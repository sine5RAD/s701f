---
title: prim最小生成树
published: 2026-06-01
description: '其实我之前会这个，但是没有加堆优化www'
image: ''
tags: ['c++', '算法']
category: '算法'
draft: false 
lang: ''
---
# 前言
没什么可说的了，总之不要逃数据结构与算法（
# 介绍
我对prim的理解是贪心算法，每一次从已加入最小生成树的点与未加入最小生成树的点之间的连线中选择最短的那条边，然后把这条边加入已选择的边中
# 实现（c++）
## 前置数据
```c++
std::priority_queue<std::pair<int, int>, std::vector<std::pair<int, int>>, std::greater<std::pair<int, int>>> pq;// 堆优化用的优先队列，它始终保持pair的第一个值最小的元素在队列顶端
std::vector<int> dist;// 当前最小生成树到每个点的距离
std::vector<bool> vis;// 点是否已经加入最小生成树
```
## 链式前向星（存图）
```c++
struct edge
{
    int u, v, w;
    int next;
};
std::vector<edge> edges;
std::vector<int> head;
void Add(int u, int v, int w)
{
    edges.push_back({u, v, w, head[u]});
    head[u] = edges.size() - 1;
    edges.push_back({v, u, w, head[v]});
    head[v] = edges.size() - 1;
}
```
## 初始化
就像dijkstra那样，我们首先要把距离数组设置为inf
```c++
dist.resize(N + 1, 0x3f3f3f3f);
```
然后我们随便选一个点开始计算最小生成树，就选1吧
```c++
dist[1] = 0;
vis.resize(N + 1, false);
externed(1);
```
## 对新增顶点链接的边进行松弛操作
externed函数的内容:
```c++
/// @brief 在新加入点n后，更新与n相邻的点的距离
/// @param n 新加入的点
void externed(int n)
{
    vis[n] = true;// 首先将该点设置为已加入最小生成树
    for (int u = head[n]; u != -1; u = edges[u].next)// 遍历所有从该点出发的边
    {
        int v = edges[u].v;
        int w = edges[u].w;
        if (vis[v])// 如果v点已经加入最小生成树，则跳过
        {
            continue;
        }
        if (dist[v] > w)// 如果现有的最小生成树到v点的距离大于n点到v点的距离，则更新距离
        {
            dist[v] = w;
            pq.push({w, v});// 把更新后的距离加入优先队列中。这个w, v的意思是现在的最小生成树连接到v点的距离是w
        }
    }
}
```
## 确定新增的顶点
我们要持续把优先队列顶端且未加入最小生成树的顶点加入最小生成树集合中
```c++
while (!pq.empty())
{
    auto [d, i] = pq.top();
    pq.pop();
    if (vis[i])
    {
        continue;
    }
    res += d;
    externed(i);
}
```
## 判断联通与输出
```
for (int i = 1; i <= N; ++i)
{
    if (!vis[i])
    {
        std::cout << "orz" << std::endl;
        return 0;
    }
}
std::cout << res << std::endl;
```
# 完成
[LGP3366通过](https://www.luogu.com.cn/record/280280172 'LGP3366通过')

# 完整代码
```c++
#include <iostream>
#include <vector>
#include <algorithm>
#include <queue>

struct edge
{
    int u, v, w;
    int next;
};
std::vector<edge> edges;
std::vector<int> head;
void Add(int u, int v, int w)
{
    edges.push_back({u, v, w, head[u]});
    head[u] = edges.size() - 1;
    edges.push_back({v, u, w, head[v]});
    head[v] = edges.size() - 1;
}
std::priority_queue<std::pair<int, int>, std::vector<std::pair<int, int>>, std::greater<std::pair<int, int>>> pq;
std::vector<int> dist;
std::vector<bool> vis;

/// @brief 在新加入点n后，更新与n相邻的点的距离
/// @param n 新加入的点
void externed(int n)
{
    vis[n] = true;
    for (int u = head[n]; u != -1; u = edges[u].next)
    {
        int v = edges[u].v;
        int w = edges[u].w;
        if (vis[v])
        {
            continue;
        }
        if (dist[v] > w)
        {
            dist[v] = w;
            pq.push({w, v});
        }
    }
}

int main()
{
    int N, M;
    std::cin >> N >> M;
    edges.reserve(2 * M + 5);
    long long res = 0;
    head.resize(N + 1, -1);
    for (int i = 0; i < M; ++i)
    {
        int u, v, w;
        std::cin >> u >> v >> w;
        Add(u, v, w);
    }
    dist.resize(N + 1, 0x3f3f3f3f);
    dist[1] = 0;
    vis.resize(N + 1, false);
    externed(1);
    while (!pq.empty())
    {
        auto [d, i] = pq.top();
        pq.pop();
        if (vis[i])
        {
            continue;
        }
        res += d;
        externed(i);
    }
    for (int i = 1; i <= N; ++i)
    {
        if (!vis[i])
        {
            std::cout << "orz" << std::endl;
            return 0;
        }
    }
    std::cout << res << std::endl;
}
```