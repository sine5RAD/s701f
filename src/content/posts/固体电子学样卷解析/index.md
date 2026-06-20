---
title: 固体电子学样卷解析
published: 2026-06-18
description: '下周考试，所以让AI写了个样卷解析www'
image: ''
tags: ['电子信息工程']
category: '固体电子学'
draft: false 
lang: ''
---
# Solid State Electronics 期末试卷详细解析

> **EEEN2004J Solid State Electronics — Semester 2 Final Examination**
> 科目协调人：Xiulong Bao | 考试时间：120 分钟
>
> 本文档为样卷完整解析，包含每道题的详细计算步骤、公式推导和概念解释。

---

## 目录

- [Question 1](#question-1) — Q1A & Q1B
- [Question 2](#question-2)
  - [Q2A. 突变 N+P 结](#q2a-突变-np-结)
  - [Q2B. 单边 P+N 结](#q2b-单边-pn-结)
- [Question 3](#question-3)
  - [Q3A. MOS 能带图](#q3a-理想-mos-电容器能带图)
  - [Q3B. MOSFET 参数](#q3b-mosfet-参数计算)
- [Question 4](#question-4)
  - [Q4A. PNP BJT 能带图](#q4a-pnp-bjt-能带图)
  - [Q4B. Early 效应](#q4b-early-效应)
- [附录](#附录所用常数与公式索引)

---

## Question 1 (15%) — 半导体基础

### Q1A. Si 掺杂硼（p 型）

硼是第三族元素，掺入 Si 中充当**受主**（acceptor）。掺杂浓度 $N_A = 2 \times 10^{17}\,\text{cm}^{-3}$。

**1. 空穴浓度（多数载流子）**

$$p \approx N_A = \mathbf{2.000 \times 10^{17}}\,\text{cm}^{-3}$$

室温下杂质完全电离，空穴浓度近似等于受主浓度。

**2. 电子浓度（少数载流子）**

$$n = \frac{n_i^2}{p} = \frac{(1.5\times10^{10})^2}{2\times10^{17}} = \mathbf{1.125 \times 10^{3}}\,\text{cm}^{-3}$$

利用质量作用定律 $n \cdot p = n_i^2$。

**3. 费米能级位置**

相对本征费米能级 $E_i$：

$$E_f - E_i = -kT \ln\frac{N_A}{n_i} = -0.026 \times \ln\frac{2\times10^{17}}{1.5\times10^{10}} = -0.026 \times 16.405 = -\mathbf{0.4266}\,\text{eV}$$

$E_f$ 在 $E_i$ **下方 0.4266 eV**，靠近价带顶 $E_v$，确认是 p 型半导体。

**4. 简化能带图**

```
    Ec ────────────────
                       |  Eg = 1.1 eV
    Ei ────────────────   (Ef 上方 0.4266 eV)
    Ef ─*──────────────
    Ev ────────────────
```

- $E_c - E_f = 0.55 + 0.4266 = 0.9766\,\text{eV}$
- $E_f - E_v = 0.55 - 0.4266 = 0.1234\,\text{eV}$

> $E_f$ 靠近 $E_v$ 而远离 $E_c$，表明空穴是多数载流子。

---

### Q1B. 掺杂 Si 棒的电阻

**已知参数**：

| 参数 | 数值 | 说明 |
|:---|---:|:---|
| 长度 $L$ | $1\,\text{mm} = 0.1\,\text{cm}$ | |
| 截面积 $A$ | $10\,\mu\text{m}^2 = 10^{-7}\,\text{cm}^2$ | |
| 磷掺杂 $N_D$ | $3\times10^{17}\,\text{cm}^{-3}$ | 施主，n 型 |
| $\mu_n$ | $700\,\text{cm}^2/(\text{V}\cdot\text{s})$ | 题中给定 |

**1. 电导率**

n 型半导体中 $n \approx N_D$：

$$\sigma = q\mu_n n \approx q\mu_n N_D = 1.6\times10^{-19} \times 700 \times 3\times10^{17} = \mathbf{33.6}\,(\Omega\cdot\text{cm})^{-1}$$

**2. 电阻率**

$$\rho = \frac{1}{\sigma} = \mathbf{0.02976}\,\Omega\cdot\text{cm}$$

**3. 电阻**

$$R = \rho\frac{L}{A} = 0.02976 \times \frac{0.1}{10^{-7}} = \mathbf{2.976 \times 10^{4}}\,\Omega = \mathbf{29.76}\,\text{k}\Omega$$

---

## Question 2 (35%) — PN 结

### Q2A. 突变 N+P 结

**已知参数**：$N_A = 10^{15}\,\text{cm}^{-3}$（P 侧），$N_D = 10^{17}\,\text{cm}^{-3}$（N+ 侧），$T = 300\,\text{K}$

**1. 接触电势（内建电势）$V_0$**

$$V_0 = \frac{kT}{q}\ln\frac{N_A N_D}{n_i^2} = 0.026 \times \ln\frac{10^{15}\times10^{17}}{(1.5\times10^{10})^2}$$

$$\frac{N_A N_D}{n_i^2} = \frac{10^{32}}{2.25\times10^{20}} = 4.444\times10^{11}$$

$$V_0 = 0.026 \times \ln(4.444\times10^{11}) = 0.026 \times 26.82 = \mathbf{0.6973}\,\text{V}$$

**2. 热平衡下耗尽层宽度 $W$**

$$\varepsilon_s = \varepsilon_{r,Si}\,\varepsilon_0 = 11.8 \times 8.85\times10^{-14} = 1.0443\times10^{-12}\,\text{F/cm}$$

$$\frac{1}{N_A}+\frac{1}{N_D} = 10^{-15} + 10^{-17} = 1.01\times10^{-15}\,\text{cm}^3$$

$$
\begin{aligned}
W &= \sqrt{\frac{2\varepsilon_s V_0}{q}\!\left(\frac{1}{N_A}+\frac{1}{N_D}\right)} \\
  &= \sqrt{9.099\times10^{6} \times 1.01\times10^{-15}} \\
  &= \sqrt{9.19\times10^{-9}} \\
  &= \mathbf{9.59\times10^{-5}}\,\text{cm} \\
  &= \mathbf{0.96}\,\mu\text{m}
\end{aligned}
$$

由于 $N_D \gg N_A$，耗尽区主要向P 侧扩展：

- P 侧：$x_p \approx 0.96\,\mu\text{m}$
- N+ 侧：$x_n \approx 0.0095\,\mu\text{m} \ll x_p$

**3. 零偏耗尽电容（$5\mu\text{m}\times5\mu\text{m}$ 结面积）**

$A = 25\,\mu\text{m}^2 = 2.5\times10^{-7}\,\text{cm}^2$

$$
\begin{aligned}
C_{j0} &= \frac{\varepsilon_s A}{W} = \frac{1.0443\times10^{-12}\times2.5\times10^{-7}}{9.59\times10^{-5}} \\
       &= \mathbf{2.72\times10^{-15}}\,\text{F} \\
       &= \mathbf{2.72}\,\text{fF}
\end{aligned}
$$

**4. 平衡能带图**

```
P-side (NA = 1e15)            N-side (ND = 1e17)
       Ec                                Ec
   ──────────\                      /──────────
              \                    /
               \__________________/
   ──────────  /                  \  ──────────
       Ef     /                    \     Ef
   ──────────/                      \──────────
       Ev                                Ev

        <──── 耗尽区 ────>
        |<── W = 0.96 μm ──>|
            qV0 = 0.6973 eV
```

### Q2B. 单边 P+N 结

**已知参数**：$A = 10^{-4}\,\text{cm}^2$，N 侧 $N_D = 10^{15}\,\text{cm}^{-3}$，$\tau_p = 0.4\,\mu\text{s}$

> 对于 P+N 结，N 侧轻掺杂，电流由 N 侧少数载流子（空穴）的扩散主导。

**1. 反向饱和电流 $I_s$**

公式：$I = qA(D_p p_{n0}/L_p)(e^{qV/kT}-1)$

$$p_{n0} = \frac{n_i^2}{N_D} = \frac{(1.5\times10^{10})^2}{10^{15}} = 2.25\times10^{5}\,\text{cm}^{-3}$$

$$D_p = \frac{kT}{q}\mu_p = 0.026 \times 450 = 11.7\,\text{cm}^2/\text{s}$$

$$L_p = \sqrt{D_p\tau_p} = \sqrt{11.7 \times 0.4\times10^{-6}} = 2.163\times10^{-3}\,\text{cm}$$

$$
\begin{aligned}
I_s &= qA\frac{D_p p_{n0}}{L_p} \\
    &= 1.6\times10^{-19} \times 10^{-4} \times \frac{11.7 \times 2.25\times10^{5}}{2.163\times10^{-3}} \\
    &= \mathbf{1.95\times10^{-14}}\,\text{A} = \mathbf{0.02}\,\text{pA}
\end{aligned}
$$

**2. 正向偏压 $V = 0.4\,\text{V}$**

$$\frac{qV}{kT} = \frac{0.4}{0.026} = 15.385,\quad e^{15.385}=4.81\times10^{6}$$

$$
\begin{aligned}
I_f &= I_s(e^{qV/kT}-1) = 1.95\times10^{-14} \times 4.81\times10^{6} \\
    &= \mathbf{9.35\times10^{-8}}\,\text{A} = \mathbf{93.5}\,\text{nA}
\end{aligned}
$$

**3. 反向偏压 $V = -4\,\text{V}$**

$$\frac{qV}{kT} = \frac{-4}{0.026} = -153.85,\quad e^{-153.85} \approx 0$$

$$I_r = I_s(e^{-153.85}-1) \approx -I_s = \mathbf{-1.95\times10^{-14}}\,\text{A}$$

> 在 $4\,\text{V}$ 反向偏压下，电流已完全饱和，值为 $-I_s$。

---

## Question 3 (35%) — MOS 电容器与 MOSFET

### Q3A. 理想 MOS 电容器能带图

条件：p 型硅衬底，$V_{GS} < 0$（栅极接负压）

```
金属        氧化层           p 型硅
───       ─────────        ──────────────
  E_Fm ──────────
                            Ec ────────────
                        \  Ei ────────────  界面处
                         \ Ef ────────────  向上弯曲
                          \Ev ────────────
```

$V_{GS} < 0$ 时 MOS 结构工作在**积累模式**：

1. 栅极负电压吸引空穴（p-Si 多数载流子）到 Si/SiO2 界面
2. 能带在界面处**向上弯曲**
3. 界面空穴浓度 > 体内空穴浓度（积累）
4. 无耗尽层——积累的空穴层完全屏蔽电场

---

### Q3B. MOSFET 参数计算

**已知参数**：$N_A = 2\times10^{15}\,\text{cm}^{-3}$，$t_{ox}=12\,\text{nm}$，$\varepsilon_{r,s}=11.8$，$\varepsilon_{r,ox}=3.9$，$W/L=90$，$\mu_n=1100\,\text{cm}^2/(\text{V}\cdot\text{s})$

**1. 总能带弯曲与阈值电压**

费米势：

$$
\begin{aligned}
\phi_F &= \frac{kT}{q}\ln\frac{N_A}{n_i} = 0.026 \times \ln\frac{2\times10^{15}}{1.5\times10^{10}} \\
       &= 0.026 \times 11.80 = \mathbf{0.3068}\,\text{V}
\end{aligned}
$$

强反型起始：$\psi_s = 2\phi_F = \mathbf{0.6136}\,\text{V}$

最大耗尽宽度：

$$
\begin{aligned}
W_{dep,\max} &= \sqrt{\frac{4\varepsilon_s\phi_F}{qN_A}} \\
             &= \sqrt{\frac{4\times1.0443\times10^{-12}\times0.3068}{1.6\times10^{-19}\times2\times10^{15}}} \\
             &= \sqrt{4.005\times10^{-9}} \\
             &= \mathbf{6.33\times10^{-5}}\,\text{cm} = \mathbf{0.633}\,\mu\text{m}
\end{aligned}
$$

最大耗尽电荷密度：

$$
\begin{aligned}
Q_{dep,\max} &= qN_A W_{dep,\max} = 1.6\times10^{-19}\times2\times10^{15}\times6.33\times10^{-5} \\
             &= \mathbf{2.03\times10^{-8}}\,\text{C/cm}^2
\end{aligned}
$$

单位面积氧化层电容：

$$
\begin{aligned}
C_{ox} &= \frac{\varepsilon_{ox}}{t_{ox}} = \frac{3.9\times8.85\times10^{-14}}{12\times10^{-7}} \\
       &= \mathbf{2.876\times10^{-7}}\,\text{F/cm}^2
\end{aligned}
$$

氧化层压降：

$$V_{ox} = \frac{Q_{dep,\max}}{C_{ox}} = \frac{2.03\times10^{-8}}{2.876\times10^{-7}} = \mathbf{0.0704}\,\text{V}$$

阈值电压（理想 MOS，$V_{FB}=0$）：

$$V_T = V_{FB} + 2\phi_F + V_{ox} = 0 + 0.6136 + 0.0704 = \mathbf{0.684}\,\text{V}$$

**2. 工作模式与漏极电流**

给定 $V_G=2\text{V}$，$V_D=0.5\text{V}$：

| 比较项 | 数值 |
|:---|---:|
| $V_{GS}$ | $2.0\,\text{V}$ |
| $V_{DS}$ | $0.5\,\text{V}$ |
| $V_{GS}-V_T$ | $2.0 - 0.684 = 1.316\,\text{V}$ |
| 比较 | $0.5 < 1.316$ |

$\because V_{DS}=0.5\,\text{V} < V_{GS}-V_T=1.316\,\text{V}$

$\therefore$ **MOSFET 工作在三极管（线性）区**。

漏极电流：

$$I_D = \mu_n C_{ox}\frac{W}{L}\!\left[(V_{GS}-V_T)V_{DS}-\frac{V_{DS}^2}{2}\right]$$

$$= 1100 \times 2.876\times10^{-7} \times 90 \times \left[1.316\times0.5 - \frac{0.5^2}{2}\right]$$

$$= 1100 \times 2.876\times10^{-7} \times 90 \times 0.533$$

$$= \mathbf{1.52\times10^{-2}}\,\text{A} = \mathbf{15.2}\,\text{mA}$$

> **关于 $\lambda$ 的说明**：沟道长度调制参数 $\lambda = 0.1\,\text{V}^{-1}$ 通常仅在饱和区起作用，三极管区一般不适用。

---

## Question 4 (15%) — BJT

### Q4A. PNP BJT 能带图

**1. 热平衡态**

```
  发射极 (P+)         基极 (N)       集电极 (P)
  ────────────    ────────────    ────────────
      Ec              Ec              Ec
  ────────────    ────\  /────    ────────────
      Ei              Ei \/           Ei
  ────────────    ────/\────    ────────────
  Ef ────────────  Ef ─────────   Ef ─────────
      Ev              Ev              Ev
  ────────────    ────/  \────    ────────────
```

- 热平衡下 $E_f$ 处处相等
- E-B 结和 B-C 结均存在内建势垒和耗尽区

**2. 正向有源模式**（$V_{EB}>0$，$V_{CB}<0$）

```
  发射极 (P+)         基极 (N)         集电极 (P)

  Ec ─────────    Ec ──/\──────    Ec ───────\───
  Ei ─────────    Ei ──────────    Ei ────────────
  Ef ────────     Ef ──────────    Ef ────────────
  Ev ─────────    Ev ──\/──────    Ev ───────/───

    E-B 正偏         窄基区扩散        B-C 反偏
    势垒降低         空穴扩散输运      势垒升高
    空穴注入                            空穴被扫入
```

**工作机理**：

| 步骤 | 描述 |
|:---:|:---|
| ① 发射 | $V_{EB}>0$ 使 E-B 结正偏，势垒降低，空穴从发射极注入基区 |
| ② 扩散 | 空穴在窄基区中靠浓度梯度扩散 |
| ③ 收集 | $V_{CB}<0$ 使 B-C 结反偏，空穴被强电场扫入集电极 |
| ④ 电流 | $I_E = I_B + I_C$ |

---

### Q4B. Early 效应

**定义**：Early 效应（基区宽度调制效应）指 BJT 在正向有源区工作时，$I_C$ 随 $V_{CE}$ 增大而增大的现象。

**物理机制**：

```
  N+ 发射极         P 基区          N- 集电极
 ┌─────────────┬──────────────┬──────────────────┐
 │             │  ##########  │                  │
 │             │  ##########  │  B-C 耗尽区     │
 │             │  有效基区    │  ←─────────→     │
 │  注入电子   │  宽度 W_B    │  随 V_CB ↑ 展宽 │
 └─────────────┴──────────────┴──────────────────┘
                   ↑ W_B ↓ 当 V_CB ↑
```

1. 正向有源模式，B-C 结反偏
2. 增大 $V_{CB}$（即 $V_{CE}$）→ B-C 结耗尽区**加宽**
3. 耗尽区向基区扩展 → 有效中性基区宽度 $W_B$ **减小**
4. 少子浓度梯度增大 → $I_C$ **增大**

**定量描述**：

$$I_C = I_S e^{V_{BE}/V_T}\left(1 + \frac{V_{CE}}{V_A}\right)$$

其中 $V_A$ 为 **Early 电压**，典型值 50–100 V。

**后果**：

| 后果 | 说明 |
|:---|---:|
| 有限输出电阻 | $r_o = \dfrac{V_A + V_{CE}}{I_C} \approx \dfrac{V_A}{I_C}$ |
| $I_C$-$V_{CE}$ 特性斜率 | 输出特性曲线在饱和区有正斜率 |
| 基区越窄，效应越显著 | 现代 BJT 需考虑 Early 效应 |

---

## 附录：所用常数与公式索引

**物理常数**（试卷末页提供）：

| 常数 | 符号 | 数值 |
|:---|---:|:---|
| 玻尔兹曼常数 | $k$ | $1.3807\times10^{-23}\,\text{J/K}$ |
| 电子电荷 | $q$ | $1.60\times10^{-19}\,\text{C}$ |
| 真空介电常数 | $\varepsilon_0$ | $8.85\times10^{-14}\,\text{F/cm}$ |
| 室温热电压 | $kT/q$ | $0.026\,\text{V}$ |
| Si 相对介电常数 | $\varepsilon_{r,Si}$ | 11.8 |
| Si 本征载流子浓度 | $n_i$ | $1.5\times10^{10}\,\text{cm}^{-3}$ |
| Si 电子迁移率 | $\mu_n$ | $1300\,\text{cm}^2/(\text{V}\cdot\text{s})$ |
| Si 空穴迁移率 | $\mu_p$ | $450\,\text{cm}^2/(\text{V}\cdot\text{s})$ |

**核心公式索引**：

| 公式 | 应用 |
|:---|:---:|
| $p = N_A$，$n = n_i^2/p$ | Q1A |
| $\sigma = q\mu n$，$R = \rho L/A$ | Q1B |
| $V_0 = (kT/q)\ln(N_A N_D/n_i^2)$ | Q2A(i) |
| $W = \sqrt{2\varepsilon_s V_0/q\cdot(1/N_A+1/N_D)}$ | Q2A(ii) |
| $C_{j0} = \varepsilon_s A/W$ | Q2A(iii) |
| $I_s = qA(D_p p_{n0}/L_p)$ | Q2B(i) |
| $I = I_s(e^{qV/kT}-1)$ | Q2B(ii)(iii) |
| $\phi_F = (kT/q)\ln(N_A/n_i)$，$V_T = 2\phi_F + Q_{dep,\max}/C_{ox}$ | Q3B(i) |
| $I_D = \mu_n C_{ox}(W/L)[(V_{GS}-V_T)V_{DS}-V_{DS}^2/2]$（三极管区） | Q3B(ii) |
| $I_C = I_S e^{V_{BE}/V_T}(1+V_{CE}/V_A)$（Early 效应） | Q4B |

---

> **制作说明**：本文档基于样卷 PDF 自动提取题目内容后生成解析，所有数值计算均经过 Python 验算。
> 解析中的能带图均为 ASCII 示意，实际答题时需在答题纸上画出带有正确曲率和间距的能带图。

---

# Solid State Electronics 备考公式清单

> 试卷末页**未提供**但在答题中必须使用的公式，按题目编号排列。
> 试卷已给出的公式（接触势、阈值电压、PN结饱和电流）不再重复列出。

---

## 目录

- [通用常数与单位换算](#通用常数与单位换算)
- [Q1 半导体基础](#q1-半导体基础)
- [Q2 PN结](#q2-pn结)
- [Q3 MOS 电容器与MOSFET](#q3-mos-电容器与mosfet)
- [Q4 BJT](#q4-bjt)

---

## 通用常数与单位换算

试卷给出的常数部分以 SI 制（m, F/m）为标准，但计算中常用 cm 制：

| 换算 | 公式 |
|:---|:---|
| 长度 | $\text{m} = 100\ \text{cm}$ |
| 介电常数 | $\varepsilon_0 = 8.85\times10^{-12}\ \text{F/m} = 8.85\times10^{-14}\ \text{F/cm}$ |
| 面积 | $\mu\text{m}^2 = 10^{-8}\ \text{cm}^2$ |
| 热电压 | $\dfrac{kT}{q} = 0.026\ \text{V}$ |

---

## Q1 半导体基础

### 质量作用定律

$n \cdot p = n_i^2$

### 多子近似（完全电离，室温）

- p 型： $\approx N_A$ $， = n_i^2 / N_A$
- n 型： $\approx N_D$ $， = n_i^2 / N_D$

### 费米能级位置

$E_f - E_i = \pm kT\ln\frac{N}{n_i}$

（$+$ 号对应 n 型，$-$ 号对应 p 型）

### 电导率与电阻

$\sigma = q(\mu_n n + \mu_p p) \approx q\mu_{\text{majority}} N_{\text{doping}}$

$\rho = \frac{1}{\sigma}$

$R = \rho\frac{L}{A}$

---

## Q2 PN结

### 爱因斯坦关系

$D_n = \frac{kT}{q}\mu_n,\qquad D_p = \frac{kT}{q}\mu_p$

### 扩散长度

$L_n = \sqrt{D_n\tau_n},\qquad L_p = \sqrt{D_p\tau_p}$

### 少子平衡浓度（单边结）

对于 P+N 结，N 侧少子（空穴）：${n0} = \dfrac{n_i^2}{N_D}$
对于 N+P 结，P 侧少子（电子）：${p0} = \dfrac{n_i^2}{N_A}$

### 耗尽电容（平行板电容模型）

$C_j = \frac{\varepsilon_s A}{W}$

其中 $\varepsilon_s = \varepsilon_{r,Si}\cdot\varepsilon_0$，$ 为耗尽层宽度。

### 介电常数

$\varepsilon_s = \varepsilon_{r,Si}\cdot\varepsilon_0 = 11.8 \times 8.85\times10^{-14} = 1.0443\times10^{-12}\ \text{F/cm}$

---

## Q3 MOS 电容器与 MOSFET

### 费米势

$\phi_F = \frac{kT}{q}\ln\frac{N_A}{n_i}$

### 单位面积氧化层电容

$C_{ox} = \frac{\varepsilon_{ox}}{t_{ox}} = \frac{\varepsilon_{r,ox}\varepsilon_0}{t_{ox}}$

SiO2 相对介电常数：$\varepsilon_{r,ox} = 3.9$

### 耗尽层宽度（MOS 单边，p 衬底）

$W_{dep} = \sqrt{\frac{2\varepsilon_s\psi_s}{qN_A}}$

其中 $\psi_s$ 为表面势。

### 最大耗尽宽度（强反型起始点）

$\psi_s(\text{th}) = 2\phi_F$

$W_{dep,\max} = \sqrt{\frac{4\varepsilon_s\phi_F}{qN_A}}$

### 最大耗尽电荷密度

$Q_{dep,\max} = qN_A W_{dep,\max}$

### 阈值电压（完整形式，含平带电压）

$V_T = V_{FB} + 2\phi_F + \frac{Q_{dep,\max}}{C_{ox}}$

理想 MOS：${FB}=0$

### 漏极电流

**三极管（线性）区**（${DS} < V_{GS} - V_T$）：

$I_D = \mu_n C_{ox}\frac{W}{L}\left[(V_{GS}-V_T)V_{DS} - \frac{V_{DS}^2}{2}\right]$

**饱和区**（$V_{DS} \geq V_{GS} - V_T$）：
$I_D = \frac{1}{2}\mu_n C_{ox}\frac{W}{L}(V_{GS}-V_T)^2(1 + \lambda V_{DS})$

---

## Q4 BJT

### 考虑 Early 效应的集电极电流

$I_C = I_S e^{V_{BE}/V_T}\left(1 + \frac{V_{CE}}{V_A}\right)$

其中 $ 为 Early 电压（典型值 50–100 V）， = kT/q = 0.026\ \text{V}$。

### 输出电阻

$r_o = \frac{V_A + V_{CE}}{I_C} \approx \frac{V_A}{I_C}$

---

## 常见陷阱提示

| 陷阱 | 正确做法 |
|:---|:---|
| $\varepsilon_0$ 直接用 F/m 代入 | 先换算为 F/cm: $\times 10^{-2}$ |
| 面积 $\mu\text{m}^2$ 不换算 | \ \mu\text{m}^2 = 10^{-8}\ \text{cm}^2$ |
| MOS 耗尽公式用了 PN 结双边公式 | MOSFET 是单边耗尽，/N_D \to 0$ |
| Early 参数 $\lambda$ 在三极管区也乘上去 | $\lambda$ 只在饱和区有效 |

---

> 整理自样卷解析中所有使用但试卷末页**未提供**的公式。

