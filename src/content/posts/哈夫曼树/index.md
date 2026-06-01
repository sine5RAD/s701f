---
title: 哈夫曼树
published: 2026-06-01
description: '孩子们，不要逃数据结构与算法课...'
image: ''
tags: ['c++', '算法']
category: '算法'
draft: false 
lang: ''
---
# 前言
数据结构与算法课不如杀戮尖塔好玩，所以咱没去（
# 介绍
在我的理解中，哈夫曼树是一种用来压缩数据大小的前缀树。233dada说这是用在zip压缩里面的<br>
# 实现（c++）
## 数据结构
我们给一个哈夫曼树节点的结构体，其中叶子节点只存一个单词及其出现次数，非叶子节点的count值是其左右两个节点的count之和
```c++
struct HuffmanNode
{
    std::string word;
    unsigned long long count;
    HuffmanNode* left;
    HuffmanNode* right;
    HuffmanNode* parent;
    bool operator<(const HuffmanNode& other) const
    {
        return count > other.count; // For min-heap
    }
};
```

手写树很麻烦，好在c++提供了优先队列的模板<br>
所以我们需要一个Cmp
```c++
struct Cmp {
    bool operator()(HuffmanNode* a, HuffmanNode* b) const {
        return a->count > b->count; // min-heap by count
    }
};
```
## 建树
我们用优先队列存我们即将建的树
```c++
static std::priority_queue<HuffmanNode*, std::vector<HuffmanNode*>, Cmp> pq;
static std::vector<std::string> words;
static std::map<std::string, std::string> wordCode;
```

在输入时把所有节点推到优先队列里面
```c++
std::string word;
unsigned long long count;
std::cin >> word >> count;
words.push_back(word);
wordCode[word] = "";
pq.push(new HuffmanNode{word, count, nullptr, nullptr, nullptr});
```
## 处理
每一次操作，我们取出顶部的两个节点，将其合并为一个树，再把新生成的根节点插入优先队列里面
```c++
while(pq.size() > 1)
{
    HuffmanNode* w1 = pq.top();
    pq.pop();
    HuffmanNode* w2 = pq.top();
    pq.pop();
    HuffmanNode* node = new HuffmanNode{w1->word + w2->word, w1->count + w2->count, w1, w2, nullptr};
    w1->parent = node;
    w2->parent = node;
    pq.push(node);
}
```
## 分析
然后我们需要把建成的树转化为编码<br>
从根节点到叶子节点的路径，每当选择了左孩子节点，哈夫曼编码的对应位置为0，反之为1<br>
所有我们可以对其进行深度优先搜索，每当搜索到叶子节点，就记录其对应的编码
```c++
void anal(HuffmanNode* node, std::string code = "")
{
    if(node->left == nullptr && node->right == nullptr)
    {
        wordCode[node->word] = code;
        return;
    }
    anal(node->left, code + "0");
    anal(node->right, code + "1");
}
```
## 防止内存泄露
在一切都做完之后，我们要递归地把分配的内存delete掉
```c++
void del(HuffmanNode* node)
{
    if(node == nullptr) return;
    del(node->left);
    del(node->right);
    node = nullptr;
    delete node;
}
```

## 完成
[LGB2168通过](https://www.luogu.com.cn/record/280277639 'LGB2168通过')

# 完整代码
```c++
#include <iostream>
#include <vector>
#include <queue>
#include <map>

struct HuffmanNode
{
    std::string word;
    unsigned long long count;
    HuffmanNode* left;
    HuffmanNode* right;
    HuffmanNode* parent;
    bool operator<(const HuffmanNode& other) const
    {
        return count > other.count; // For min-heap
    }
};

struct Cmp {
    bool operator()(HuffmanNode* a, HuffmanNode* b) const {
        return a->count > b->count; // min-heap by count
    }
};

static std::priority_queue<HuffmanNode*, std::vector<HuffmanNode*>, Cmp> pq;
static std::vector<std::string> words;
static std::map<std::string, std::string> wordCode;

void anal(HuffmanNode* node, std::string code = "")
{
    if(node->left == nullptr && node->right == nullptr)
    {
        wordCode[node->word] = code;
        return;
    }
    anal(node->left, code + "0");
    anal(node->right, code + "1");
}
void del(HuffmanNode* node)
{
    if(node == nullptr) return;
    del(node->left);
    del(node->right);
    node = nullptr;
    delete node;
}

int main()
{
    int n;
    std::cin >> n;
    if(n == 1)
    {
        std::string word;
        int count;
        std::cin >> word >> count;
        std::cout << word << " " << "0" << std::endl;
        return 0;
    }
    for(int index = 0;index < n;index++)
    {
        std::string word;
        unsigned long long count;
        std::cin >> word >> count;
        words.push_back(word);
        wordCode[word] = "";
        pq.push(new HuffmanNode{word, count, nullptr, nullptr, nullptr});
    }
    while(pq.size() > 1)
    {
        HuffmanNode* w1 = pq.top();
        pq.pop();
        HuffmanNode* w2 = pq.top();
        pq.pop();
        HuffmanNode* node = new HuffmanNode{w1->word + w2->word, w1->count + w2->count, w1, w2, nullptr};
        w1->parent = node;
        w2->parent = node;
        pq.push(node);
    }
    HuffmanNode* root = pq.top();
    pq.pop();
    anal(root);
    for(auto& word : words)
    {
        std::cout << word << " " << wordCode[word] << std::endl;
    }
    del(root);
    return 0;
}
```