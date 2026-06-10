---
title: 量子力学基础4-布洛赫定理与Kronig-Penney模型
published: 2026-06-10
description: '周期势场中的电子行为与能带形成'
image: ''
tags: ['固态电子学', '量子力学', '课程笔记']
category: '电子信息工程'
draft: false 
lang: ''
---
# Bohr 氢原子模型

Bohr 模型描述电子在量子化能级上绕核运动，成功解释了氢原子的离散光谱线。

关键特征：
- 电子占据离散（量子化）轨道
- 电子在能级间跃迁时吸收或发射能量
- 该模型是通向现代量子理论的关键一步

# Bloch 定理

对于一维周期势 U(x+d) = U(x)，Bloch 定理指出：

$$\Psi(x) = u(x)e^{ikx}$$

其中：
- u(x) 为原胞波函数，与 U(x) 具有相同周期性
- k 为波矢

该定理是理解晶体中电子行为的基础。

# Kronig-Penney 模型

Kronig-Penney 模型利用有限势阱问题近似晶体中的周期势。

**目标：** 求解 Kronig-Penney 势下的 Schrödinger 方程，证明晶格中**能带**的存在。

**方法：** 质量为 m、能量为 E 的电子受到周期势 U(x) 的作用。求解 Schrödinger 方程揭示只有特定能量范围（能带）是允许的，其他范围（带隙）被禁止。
