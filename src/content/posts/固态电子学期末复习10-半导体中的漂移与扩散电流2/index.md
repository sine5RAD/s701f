---
title: 固态电子学期末复习10-半导体中的漂移与扩散电流2
published: 2026-06-10
description: '过剩载流子与连续性方程'
image: ''
tags: ['固态电子学', '半导体物理', '课程笔记']
category: '电子信息工程'
draft: false 
lang: ''
---
# 过剩载流子与连续性方程

## 过剩载流子

掺杂（非本征）半导体平衡态下：
- N 型：n₀ >> p₀
- P 型：p₀ >> n₀
- 过剩载流子对少子的影响远大于对多子的影响

## 计算示例

考虑 N 型 Si 样品，ND = 10¹⁵/cm³，T = 300 K，过剩载流子 Δn = Δp = 10¹³/cm³：

300 K 热平衡时：
- n₀ = ND = 10¹⁵ /cm³
- p₀ = nᵢ² / n₀ = (1.5 × 10¹⁰)² / 10¹⁵ = 2.25 × 10⁵ /cm³

加入过剩载流子后：
- n = n₀ + Δn
- p = p₀ + Δp

# 连续性方程

连续性方程描述载流子浓度随时间和位置的变化，包含产生、复合、漂移和扩散：

**电子连续性方程：**

$$\frac{\partial n}{\partial t} = \frac{1}{q}\frac{\partial J_n}{\partial x} + G_n - R_n$$

**空穴连续性方程：**

$$\frac{\partial p}{\partial t} = -\frac{1}{q}\frac{\partial J_p}{\partial x} + G_p - R_p$$

其中 G 为产生率，R 为复合率。
