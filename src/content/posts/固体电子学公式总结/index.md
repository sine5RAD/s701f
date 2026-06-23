---
title: 固体电子学公式总结
published: 2026-06-23
description: '一些公式'
image: ''
tags: [固体电子学]
category: '电子信息工程'
draft: false 
lang: ''
---
# 固态电子学公式总结

> 本文件汇总固体电子学课程 (Lecture 5-20, Week 9-10) 的全部核心公式，按主题模块整理，便于复习查阅。

---

# 一、晶体结构与量子力学基础

## Bloch 定理

晶体中电子波函数：

$\psi(x) = u(x) \cdot e^{ikx}$

其中 $u(x)$ 为单胞波函数，与势函数 $U(x)$ 具有相同周期性：$u(x + d) = u(x)$

## 晶胞原子数

| 晶格类型 | 原子数 | 计算方法 |
|---------|-------|---------|
| 简单立方 (SC) | 1 | $8 \times 1/8 = 1$ |
| 体心立方 (BCC) | 2 | $8 \times 1/8 + 1 = 2$ |
| 面心立方 (FCC) | 4 | $8 \times 1/8 + 6 \times 1/2 = 4$ |
| 金刚石结构 | 8 | 两个 FCC 子晶格叠加 |

## Miller 指数晶面间距

$d_{hkl} = a / \sqrt{h^2 + k^2 + l^2}$

---

# 二、电导率与载流子输运

## 电导率

$\sigma = n e \mu_n + p e \mu_p$

## 漂移电流密度

$J_{\text{drift}} = \sigma E = (n e \mu_n + p e \mu_p) E$

## 扩散电流密度

$J_n = e D_n \frac{dn}{dx}$（电子扩散电流）

$J_p = -e D_p \frac{dp}{dx}$（空穴扩散电流）

## Einstein 关系

$\frac{D}{\mu} = \frac{kT}{e}$

300 K 下：$D/\mu = 0.0259$ V

## 漂移速度

$v_d = \mu E$

---

# 三、半导体载流子统计

## 本征载流子浓度

$n_i^2 = N_c N_v \exp\left(-\frac{E_g}{kT}\right)$

## 本征 Fermi 能级

$E_i = \frac{E_c + E_v}{2} + \frac{kT}{2} \ln\left(\frac{N_v}{N_c}\right)$

## 质量作用定律

$n p = n_i^2$（热平衡下）

## 电中性条件

$n + N_A^- = p + N_D^+$

N 型（$N_D \gg N_A$）：$n \approx N_D$

P 型（$N_A \gg N_D$）：$p \approx N_A$

## Fermi 能级位置

N 型：$E_F - E_i = kT \ln(N_D / n_i)$

P 型：$E_i - E_F = kT \ln(N_A / n_i)$

---

# 四、PN 结

## 接触势（内建电势）

$V_{bi} = \frac{kT}{e} \ln\left(\frac{N_A N_D}{n_i^2}\right)$

$V_{bi} = \frac{1}{e}(E_{Fn} - E_{Fp})$

## 耗尽层宽度

$W = \sqrt{\frac{2\varepsilon_s}{e}\left(\frac{1}{N_A} + \frac{1}{N_D}\right)(V_{bi} - V)}$

单边突变结（$N_A \gg N_D$）：$W \approx \sqrt{\frac{2\varepsilon_s}{e N_D}(V_{bi} - V)}$，$W \approx x_n$

## 电场分布

P 侧：$E(x) = -\frac{qN_A}{\varepsilon_s}(x + x_p)$

N 侧：$E(x) = -\frac{qN_D}{\varepsilon_s}(x_n - x)$

## 最大电场

$|E_{\max}| = \sqrt{\frac{2e N_A N_D}{\varepsilon_s(N_A + N_D)}(V_{bi} - V)}$

## 耗尽层电容（势垒电容）

$C_j = A \sqrt{\frac{e \varepsilon_s N_A N_D}{2(N_A + N_D)(V_{bi} - V)}}$

## 扩散电容

$C_{\text{diff}} \propto I_F \tau$

## I-V 特性

$J = J_s (e^{eV/kT} - 1)$

$J_s = e\left(\frac{D_p n_i^2}{L_p N_D} + \frac{D_n n_i^2}{L_n N_A}\right)$

## 击穿电压

$V_{BR} \propto E_g^{3/2} N_D^{-3/4}$

---

# 五、MOSFET

## 阈值电压

$V_t = V_{FB} + 2\phi_F + \frac{Q_B}{C_{ox}}$

$\phi_F = \frac{kT}{e} \ln\left(\frac{N_A}{n_i}\right)$，$C_{ox} = \frac{\varepsilon_{ox}}{t_{ox}}$

## DC 工作区

| 工作区 | 条件 | $I_D$ |
|-------|------|-------|
| 截止区 | $V_{GS} < V_t$ | $0$ |
| 线性区 | $V_{GS} > V_t$, $V_{DS} < V_{GS} - V_t$ | $\mu_n C_{ox} \frac{W}{L}[(V_{GS} - V_t)V_{DS} - \frac{1}{2}V_{DS}^2]$ |
| 饱和区 | $V_{GS} > V_t$, $V_{DS} \ge V_{GS} - V_t$ | $\frac{1}{2}\mu_n C_{ox} \frac{W}{L}(V_{GS} - V_t)^2$ |

## 沟道长度调制

$I_D = \frac{1}{2}\mu_n C_{ox} \frac{W}{L}(V_{GS} - V_t)^2(1 + \lambda V_{DS})$

## 跨导

$g_m = \frac{\partial I_D}{\partial V_{GS}}$

饱和区：$g_m = \mu_n C_{ox} \frac{W}{L}(V_{GS} - V_t)$

## 衬底偏置效应

$V_t = V_{t0} + \gamma(\sqrt{2\phi_F + V_{SB}} - \sqrt{2\phi_F})$

$\gamma = \frac{\sqrt{2e \varepsilon_s N_A}}{C_{ox}}$

## CMOS 对称条件

$\mu_n (W/L)_N = \mu_p (W/L)_P$

---

# 六、BJT

## 电流关系

$I_E = I_C + I_B$

$\beta = I_C / I_B$，$\alpha = I_C / I_E$

$\beta = \frac{\alpha}{1 - \alpha}$，$\alpha = \frac{\beta}{1 + \beta}$

## 集电极电流（正向有源）

$I_C = I_S e^{V_{BE} / V_T}$，$V_T = kT/e \approx 0.0259$ V

## Ebers-Moll 模型

$I_C = \alpha_F I_E + I_{C0}$

$I_E = I_{ES}(e^{V_{BE}/V_T} - 1) - \alpha_R I_{CS}(e^{V_{BC}/V_T} - 1)$

$I_C = \alpha_F I_{ES}(e^{V_{BE}/V_T} - 1) - I_{CS}(e^{V_{BC}/V_T} - 1)$

## Early 效应

$I_C = I_S e^{V_{BE}/V_T} \left(1 + \frac{V_{CE}}{V_A}\right)$

---

# 七、连续性方程

$\frac{\partial n}{\partial t} = \frac{1}{e}\frac{\partial J_n}{\partial x} + G_n - R_n$

$\frac{\partial p}{\partial t} = -\frac{1}{e}\frac{\partial J_p}{\partial x} + G_p - R_p$

## 复合寿命

$\Delta n(t) = \Delta n(0) e^{-t/\tau}$

## 扩散长度

$L_n = \sqrt{D_n \tau_n}$，$L_p = \sqrt{D_p \tau_p}$

---

# 八、常用物理常数 (300 K)

| 常数 | 符号 | 数值 |
|------|------|------|
| 电子电荷 | $e$ | $1.602 \times 10^{-19}$ C |
| Boltzmann 常数 | $k$ | $1.381 \times 10^{-23}$ J/K |
| 热电压 | $kT/e$ | $0.0259$ V |
| 真空介电常数 | $\varepsilon_0$ | $8.854 \times 10^{-14}$ F/cm |
| 硅相对介电常数 | $\varepsilon_r$ | $11.7$ |
| 硅介电常数 | $\varepsilon_s$ | $1.036 \times 10^{-12}$ F/cm |
| 二氧化硅介电常数 | $\varepsilon_{ox}$ | $3.9$ |
| 硅禁带宽度 | $E_g$ | $1.12$ eV |
| 硅本征载流子浓度 | $n_i$ | $1.5 \times 10^{10}$ cm$^{-3}$ |