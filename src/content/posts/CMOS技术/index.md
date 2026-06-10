---
title: CMOS技术
published: 2026-06-10
description: 'PMOS、CMOS反相器与数字逻辑'
image: ''
tags: ['固态电子学', '晶体管', '课程笔记']
category: '电子信息工程'
draft: false 
lang: ''
---
# MOSFET 电容

MOSFET 具有多种本征电容：
- 栅-沟道电容
- 栅-源交叠电容
- 栅-漏交叠电容
- 结电容（源/漏至衬底）

这些电容影响 MOSFET 的高频性能。

# P 沟道 MOSFET (PMOS) 的直流工作

PMOS 晶体管与 NMOS 类似但极性相反：
- 源和漏为 P+ 区域
- 衬底为 N 型
- 负栅压形成沟道（空穴积累）
- V_SG > |Vt| 时电流从源流向漏

# CMOS（互补 MOS）

CMOS 技术在同一硅衬底上结合 N 沟道和 P 沟道 MOSFET。这是迄今为止最成功的集成电路 (IC) 技术。

## CMOS 数字电路

数字电子学使用只有两个电平的二进制信号：
- **高电平 (1)：** V_DD
- **低电平 (0)：** GND (0 V)

CMOS 反相器（非门）由一个 NMOS 和一个 PMOS 串联组成。输入为高时 NMOS 导通、PMOS 截止；输入为低时相反。这种配置静态功耗极低。
