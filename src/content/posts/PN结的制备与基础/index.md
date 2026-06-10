---
title: PN结的制备与基础
published: 2026-06-10
description: 'PN结的制备工艺与连续性方程'
image: ''
tags: ['固态电子学', 'PN结', '课程笔记']
category: '电子信息工程'
draft: false 
lang: ''
---
# 复习：少子寿命

- N 型材料：少子空穴寿命
- P 型材料：少子电子寿命

# 连续性方程与漂移-扩散方程

**电子连续性方程：**

$$\frac{\partial n}{\partial t} = G_n - R_n + \frac{1}{q}\nabla \cdot J_n$$

**空穴连续性方程：**

$$\frac{\partial p}{\partial t} = G_p - R_p - \frac{1}{q}\nabla \cdot J_p$$

**漂移-扩散方程：**

$$J_n = q\mu_n n E + qD_n \nabla n$$

$$J_p = q\mu_p p E - qD_p \nabla p$$

# PN 结的制备

PN 结是在同一半导体单晶中，在相邻区域分别进行 P 型和 N 型掺杂而形成的。PN 结是分隔这两个区域的界面。

## 制备工艺

1. 从硅晶圆开始（通常为 N 型掺杂 Si）
2. 在选定区域进行 P 型掺杂
3. P 与 N 区域的边界即形成 PN 结
