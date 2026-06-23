---
title: kruskal最小生成树
published: 2026-06-08
description: '老师课上讲的是kruskal...我prim白学了'
image: ''
tags: ['c++', '算法']
category: '算法'
draft: false 
lang: '算法'
---
# 前言
今天看ppt，才发现老师讲的是kruskal算法...
# 介绍
这是一种每次将分属不同树的最小边加入图的算法<br>
所以我们不难联想到并查集<br>

# 实现
## 前置数据
```c++
struct edge
{
    int f, t, l;
};// 边，是的，我们甚至不需要链式前向星
struct cmp
{
    bool operator()(edge a, edge b)
    {
        return a.l > b.l;
    }
};

std::priority_queue<edge, std::vector<edge>, cmp> pq;// 存储边的优先队列，队顶是最短的边

std::vector<int>disjoint_set;// 并查集
int find(int x)// 查询
{
    if(disjoint_set[x] != x)
        disjoint_set[x] = find(disjoint_set[x]);
    return disjoint_set[x];
}
void init_disjoint_set(int n)// 初始化并查集
{
    disjoint_set.resize(n);
    for(int i = 0; i < n; i++)
        disjoint_set[i] = i;
}

```

## 合并子树
```c++
while(!pq.empty())
{
    // std::clog<<"RUA!"<<std::endl;
    edge e = pq.top();// 获取最短边
    pq.pop();
    int f = find(e.f);
    int t = find(e.t);
    if(f == t)// 如果这条边属于同一个子最小生成树，那么不进行任何操作
        continue;
    if(f != t)
    {
        disjoint_set[f] = t;// 合并子树
        cnt += e.l;
    }
}
```
判断是否联通
```c++
for(int i = 1; i <= N; i++)
{
    if(find(i) != find(1))
    {
        std::cout << "orz" << std::endl;
        return 0;
    }
}
std::cout << cnt << std::endl;
```
没什么难点，就这么简单