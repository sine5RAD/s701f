---
title: lua学习记录1
published: 2026-06-07
description: '学习lua的第一天'
image: ''
tags: ['lua', 'c#', '嵌入式']
category: 'lua'
draft: false 
lang: ''
---
# 前言
因为一些神秘原因（指玩的游戏做mod需要lua），我决定把它学了<br>
这里不会记录一些语法之类的可以从网上找到的教程内容，只会记录那些教程不讲，咱自己摸索出的东西
# table中有nil会发生什么
教程当中讲，对于一个lua表
```lua
local array = {1, nil, 2}
print(#array)
```
输出结果应该是3<br>
但是咱在实操当中结果是2<br>
AI的回答是在lua表中添加nil会导致#运算符和ipair的结果不可预测<br>
lua把#table定义为table的第一个border（t[i]返回nil）<br>
但是问题在于，对于我们给出的array，t[2]（赋值为nil）和t[4]（超出表边界，不存在）的返回值都是nil<br>
所以#array在寻找border时，既可能找到2，也可能找到4<br>
比如对于下面这行代码<br>
```lua
local array = {5, nil, "红酱自动机", 6, 7, 8}
print(#array)
```
输出结果就是6而不是2<br>
所以实践当中最好不要在lua表里面加nil
# pair, ipair的区别以及pair的一些特性
对于下面这段代码
```lua
do
    local table = {
        [false] = "false",
        [true] = "true",
        [1] = "one",
        [2] = "two",
        [3] = "three",
        name = "张三",
        age = 18,
        friend = {
            name = "李四",
            age = 20
        }
    }
    for k, v in pairs(table) do
        print(k, v)
    end
    print("-------------")
    for k, v in ipairs(table) do
        print(k, v)
    end
    print("-------------")
    print(#table) -- 3
end
```
其输出为
```text
false   false
true    true
2       two
3       three
name    张三
friend  table: 0000000000fba550
age     18
1       one
-------------
1       one
2       two
3       three
-------------
3
```
lua的table被分为数组区和哈希区<br>
ipair只遍历数组区，而pair把数组区和哈希区一起遍历<br>
我们可以看到
```lua
[1] = "one",
[2] = "two",
[3] = "three",
```
这些是被存在数组区的<br>
那我们不禁要问了
```c
int luaH_next (lua_State *L, Table *t, StkId key) {
  unsigned int asize = t->asize;
  unsigned int i = findindex(L, t, s2v(key), asize);  /* find original key */
  for (; i < asize; i++) {  /* try first array part（数组区遍历） */
    lu_byte tag = *getArrTag(t, i);
    if (!tagisempty(tag)) {  /* a non-empty entry? */
      setivalue(s2v(key), cast_int(i) + 1);
      farr2val(t, i, tag, s2v(key + 1));
      return 1;
    }
  }
  for (i -= asize; i < sizenode(t); i++) {  /* hash part（哈希区遍历） */
    if (!isempty(gval(gnode(t, i)))) {  /* a non-empty entry? */
      Node *n = gnode(t, i);
      getnodekey(L, s2v(key), n);
      setobj2s(L, key + 1, gval(n));
      return 1;
    }
  }
  return 0;  /* no more elements */
}
```
源码里面写的是先顺序遍历数组区，再顺序遍历哈希区啊，怎么用pair进行遍历的时候，数组区的元素也没有按顺序输出呢？<br>
答案是数组区是一个会随着插入元素数量变化的变长数组，而pair不保证后加入的数据一定在数组区
```c
/*
** Insert a key in a table where there is space for that key, the
** key is valid, and the value is not nil.
*/
static void newcheckedkey (Table *t, const TValue *key, TValue *value) {
  unsigned i = keyinarray(t, key);
  if (i > 0)  /* is key in the array part? */
    obj2arr(t, i - 1, value);  /* set value in the array */
  else {
    int done = insertkey(t, key, value);  /* insert key in the hash part */
    lua_assert(done);  /* it cannot fail */
    cast(void, done);  /* to avoid warnings */
  }
}
```
插入的源码是这么写的www<br>
如果keyinarray（一个用来检测key是否在数组区范围内的宏）告诉我们新元素的范围还在数组区内，就将其插入数组区，否则将其插入哈希区<br>
那么如何让pair按顺序遍历呢（不建议这么做，因为插入新元素的时候会rehash，不保证新元素一定在数组区，会发生问题）?<br>
将table按照默认方式初始化就行
```lua
do
    local table = {
        "one",
        "two",
        "three",
        [false] = "false",
        [true] = "true",
        name = "张三",
        age = 18,
        friend = {
            name = "李四",
            age = 20
        }
    }
    for k, v in pairs(table) do
        print(k, v)
    end
    print("-------------")
    for k, v in ipairs(table) do
        print(k, v)
    end
    print("-------------")
    print(#table) -- 3
end
```
输出为
```text
1       one
2       two
3       three
false   false
true    true
age     18
name    张三
friend  table: 0000000000eca1d0
-------------
1       one
2       two
3       three
-------------
3
```
两相对比，我们还可以得到另外一个结论，lua表中非默认元素是在数组区初始化完成后再加入表的