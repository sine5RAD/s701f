---
title: MOSFET功放设计记录
published: 2026-05-13
description: '记录一次功放的设计流程'
image: ''
tags: ['模拟电路']
category: '电子信息工程'
draft: false 
lang: ''
---
# 任务
使用 **BS170** 设计一个将输入电压放大12倍，$V_{DD} = 10V$ 的功率放大器

# 步骤
## 第一步
我们需要确定元件参数
![MOSFET功放模板.png](./MOSFET功放模板.png)
首先确定漏极电流$I_D$: 
由于增益$A_V = g_m(R_D||R_L)$, 
$g_m = \frac{2I_D}{V_{GS} - V_t}$
