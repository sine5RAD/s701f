---
title: 固态电子学期末复习17-MOSFET的阈值与特性
published: 2026-06-10
description: '阈值电压、线性区与饱和区'
image: ''
tags: ['固态电子学', '晶体管', '课程笔记']
category: '电子信息工程'
draft: false 
lang: ''
---
# MOS 电容与反型层

P 型衬底 MOS 电容：
- **阈值电压 (Vt)：** 形成强反型层（沟道）所需的最小栅压
- 耗尽电容 C_dep 取决于耗尽区宽度 W
- C_dep 受栅压控制，随 V_GS 增大而增大

# MOSFET 阈值电压

阈值电压 Vt 是在源漏间形成导电沟道所需的最小栅源电压，取决于：
- 氧化层厚度
- 掺杂浓度
- 栅与半导体间的功函数差
- 固定氧化层电荷

# NMOS MOSFET 的直流工作

NMOS 晶体管工作于三个区域：

1. **截止区：** V_GS < Vt。无沟道，无漏极电流 (I_D = 0)
2. **线性区（三极管区）：** V_GS > Vt 且 V_DS < V_GS - Vt。沟道表现为电阻
3. **饱和区：** V_GS > Vt 且 V_DS ≥ V_GS - Vt = V_DSAT。沟道在漏端夹断，漏极电流饱和

# 漏极电流方程

## 线性区：

$$I_D = \mu_n C_{ox}\frac{W}{L}\left[(V_{GS} - V_t)V_{DS} - \frac{V_{DS}^2}{2}\right]$$

## 饱和区：

$$I_D = \frac{1}{2}\mu_n C_{ox}\frac{W}{L}(V_{GS} - V_t)^2$$

## 沟道长度调制

沟道长度调制效应修正饱和区电流：

$$I_D \approx I_D(1 + \lambda V_{DS})$$

其中 λ 为沟道长度调制参数。
