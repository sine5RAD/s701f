---
title: 电磁学笔记
published: 2026-06-25
description: 'AI生成的电磁学笔记'
image: ''
tags: [电磁学]
category: '电子信息工程'
draft: false 
lang: ''
---
# 一、电通量密度

## 电通量的概念

法拉第通过同心金属球实验发现，内球到外球存在一种"电荷位移"，这种位移与中间介质无关，称为**位移**、**位移通量**或**电通量**。

- 电通量 $\psi$ 的单位为库仑（C），其大小等于内球上的总电荷 $Q$：$\psi = Q$
- 电通量密度 $\mathbf{D}$ 的单位为 $\text{C/m}^2$，其方向为通量线在该点的方向
- 电通量密度的大小等于穿过垂直于通量线方向的单位面积的电通量

## 电通量密度与电场强度的关系

在自由空间中，电通量密度 $\mathbf{D}$ 与电场强度 $\mathbf{E}$ 成正比：

$$\mathbf{D} = \varepsilon_0 \mathbf{E}$$

其中 $\varepsilon_0$ 为真空介电常数。

对点电荷，径向电通量密度为：

$$\mathbf{D} = \frac{Q}{4\pi r^2} \mathbf{a}_r$$

对一般体电荷分布：

$$\mathbf{D} = \int_{\text{vol}} \frac{\rho_v dv}{4\pi R^2} \mathbf{a}_R$$

## 例题1：线电荷的电通量密度

**题目：** 求自由空间中，距 $z$ 轴上均匀线电荷（密度 $\rho_L = 8\text{ nC/m}$）3 m 处的电通量密度。

**解析：**

无限长线电荷产生的电场强度为：

$$\mathbf{E} = \frac{\rho_L}{2\pi\varepsilon_0 \rho} \mathbf{a}_\rho$$

因此电通量密度为：

$$\mathbf{D} = \frac{\rho_L}{2\pi\rho} \mathbf{a}_\rho = \frac{8 \times 10^{-9}}{2\pi \rho} \mathbf{a}_\rho$$

代入 $\rho = 3\text{ m}$：

$$\mathbf{D} = \frac{8 \times 10^{-9}}{2\pi \times 3} \mathbf{a}_\rho = 0.424 \mathbf{a}_\rho \text{ nC/m}^2$$

## 例题2：面电荷的电通量密度

**题目：** 在平面 $x = 9$ 上有均匀面电荷密度 $\rho_s = 57.2\;\mu\text{C/m}^2$，求点 $P(6,8,-10)$ 处的 $\mathbf{D}$。

**解析：**

无限大均匀带电平面产生的电通量密度为：

$$\mathbf{D} = \frac{\rho_s}{2} \mathbf{a}_N$$

平面 $x = 9$ 的法向为 $\mathbf{a}_N = \mathbf{a}_x$，所以：

$$\mathbf{D} = \frac{57.2 \times 10^{-6}}{2} \mathbf{a}_x = 28.6 \mathbf{a}_x \; \mu\text{C/m}^2$$

# 二、高斯定律

## 高斯定律的表述

法拉第实验可以推广为**高斯定律**：

> 穿过任意闭合曲面的电通量等于该曲面所包围的总电荷。

数学表达式为：

$$\oint_S \mathbf{D}_S \cdot d\mathbf{S} = Q_{\text{enc}} = \int_{\text{vol}} \rho_v dv$$

## 高斯定律的应用条件

利用高斯定律求解电场时，需要选择一个闭合曲面（高斯面），满足两个条件：

1. $\mathbf{D}_S$ 处处与曲面垂直或相切——即 $\mathbf{D}_S \cdot d\mathbf{S}$ 要么为 $D_S dS$，要么为零
2. 在 $\mathbf{D}_S \cdot d\mathbf{S}$ 不为零的部分上，$D_S$ 为常数

## 例题3：同轴电缆

**题目：** 一段 50 cm 长的同轴电缆，内导体半径 1 mm，外导体内半径 4 mm，导体间为空气。内导体总电荷 30 nC。求各导体上的电荷密度以及 $\mathbf{E}$ 和 $\mathbf{D}$ 的表达式。

**解析：**

**内导体上的电荷密度：**
内导体表面积 $S_{\text{inner}} = 2\pi a L = 2\pi \times 0.001 \times 0.5 = \pi \times 10^{-3} \text{ m}^2$
$$\rho_{s,\text{inner}} = \frac{Q}{S_{\text{inner}}} = \frac{30 \times 10^{-9}}{\pi \times 10^{-3}} = 9.55 \;\mu\text{C/m}^2$$

**外导体上的电荷密度：**
外导体内表面积 $S_{\text{outer}} = 2\pi b L = 4\pi \times 10^{-3} \text{ m}^2$
$$\rho_{s,\text{outer}} = \frac{-Q}{S_{\text{outer}}} = -2.39 \;\mu\text{C/m}^2$$

**导体间的 $\mathbf{D}$ 和 $\mathbf{E}$ 场（$a < \rho < b$）：**
取长度为 $L$、半径为 $\rho$ 的高斯圆柱面，由高斯定律：
$$\mathbf{D} = \frac{Q/L}{2\pi\rho} \mathbf{a}_\rho = \frac{9.55 \times 10^{-9}}{\rho} \mathbf{a}_\rho \text{ C/m}^2$$
$$\mathbf{E} = \frac{\mathbf{D}}{\varepsilon_0} = \frac{1079}{\rho} \mathbf{a}_\rho \text{ V/m}$$

# 三、高斯定律的应用：对称电荷分布

## 均匀线电荷

取同轴圆柱面作为高斯面，高度 $L$，半径 $\rho$：
$$\oint_S \mathbf{D} \cdot d\mathbf{S} = D_\rho \cdot 2\pi\rho L = \rho_L L$$
$$\mathbf{D} = \frac{\rho_L}{2\pi\rho} \mathbf{a}_\rho$$

## 同轴电缆

内导体半径 $a$，外导体半径 $b$，内导体表面电荷密度 $\rho_S$。
取 $a < \rho < b$ 的高斯圆柱面：
$$Q_{\text{enc}} = 2\pi a L \rho_S$$
$$\mathbf{D} = \frac{\rho_L}{2\pi\rho} \mathbf{a}_\rho, \quad \rho_L = 2\pi a \rho_S$$

当 $\rho > b$ 时，总包围电荷为零，$\mathbf{D} = 0$——同轴电缆的屏蔽原理。

# 四、散度

## 散度的定义

$$\nabla \cdot \mathbf{D} = \lim_{\Delta v \to 0} \frac{\oint_S \mathbf{D} \cdot d\mathbf{S}}{\Delta v}$$

- 正散度 → 源点（source）
- 负散度 → 汇点（sink）
- 零散度 → 无源无汇

## 散度的表达式（三大坐标系）

**直角坐标系：** $\nabla \cdot \mathbf{D} = \frac{\partial D_x}{\partial x} + \frac{\partial D_y}{\partial y} + \frac{\partial D_z}{\partial z}$

**圆柱坐标系：** $\nabla \cdot \mathbf{D} = \frac{1}{\rho}\frac{\partial}{\partial\rho}(\rho D_\rho) + \frac{1}{\rho}\frac{\partial D_\phi}{\partial\phi} + \frac{\partial D_z}{\partial z}$

**球坐标系：** $\nabla \cdot \mathbf{D} = \frac{1}{r^2}\frac{\partial}{\partial r}(r^2 D_r) + \frac{1}{r\sin\theta}\frac{\partial}{\partial\theta}(D_\theta\sin\theta) + \frac{1}{r\sin\theta}\frac{\partial D_\phi}{\partial\phi}$

## 例题4：散度与通量计算

**题目：** 已知 $\mathbf{D} = y^2 z^3 \mathbf{a}_x + 2xyz^3 \mathbf{a}_y + 3xy^2 z^2 \mathbf{a}_z \text{ pC/m}^2$，求：
(a) 穿过 $x=3$，$0 \le y \le 2$，$0 \le z \le 1$ 曲面的总电通量
(b) $P(3,2,1)$ 处的 $|\mathbf{E}|$
(c) 以 $P$ 为中心、半径 $2\;\mu\text{m}$ 的微小球体内包含的总电荷

**解析：**

**(a)** 曲面 $x=3$ 的外法向为 $\mathbf{a}_x$：
$$\psi = \int_S \mathbf{D} \cdot d\mathbf{S} = \int_{z=0}^1 \int_{y=0}^2 y^2 z^3 \, dy \, dz = \int_0^1 z^3 \cdot \frac{8}{3} \, dz = \frac{2}{3} \text{ pC}$$

**(b)** 在 $P(3,2,1)$ 处：
$$D_x = 4,\; D_y = 12,\; D_z = 36 \text{ pC/m}^2$$
$$|\mathbf{D}|_P = \sqrt{4^2+12^2+36^2} = 38.158 \text{ pC/m}^2$$
$$|\mathbf{E}|_P = \frac{|\mathbf{D}|_P}{\varepsilon_0} = 4.31 \text{ V/m}$$

**(c)** 在 $P$ 点处散度：
$$\nabla \cdot \mathbf{D} = \frac{\partial D_x}{\partial x} + \frac{\partial D_y}{\partial y} + \frac{\partial D_z}{\partial z} = 0 + 2xz^3 + 6xy^2 z \bigg|_{P(3,2,1)} = 78 \text{ pC/m}^3$$
微小球体体积 $\Delta v = \frac{4}{3}\pi r^3 = 3.351 \times 10^{-17} \text{ m}^3$
$$Q_{\text{enc}} \approx (\nabla \cdot \mathbf{D}) \Delta v = 2.61 \times 10^{-27} \text{ C}$$

## 例题5：散度的常量特性

**题目：** 验证场 $\mathbf{D} = 4xy \mathbf{a}_x + 2x^2 \mathbf{a}_y + 4z \mathbf{a}_z$ 的散度特性。

**解析：**
$$\nabla \cdot \mathbf{D} = \frac{\partial}{\partial x}(4xy) + \frac{\partial}{\partial y}(2x^2) + \frac{\partial}{\partial z}(4z) = 4y + 4$$
此场的散度与 $y$ 有关，并非常数。

# 五、散度定理

$$\oint_S \mathbf{D} \cdot d\mathbf{S} = \int_{\text{vol}} (\nabla \cdot \mathbf{D}) \, dv$$

## 例题6：验证散度定理

**题目：** 对场 $\mathbf{D} = 2xy \mathbf{a}_x + x^2 \mathbf{a}_y \text{ C/m}^2$ 和平行六面体（$x=0,1$；$y=0,2$；$z=0,3$），验证散度定理。

**解析：**

**面积分：**
- $x=1$ 面：$\iint 2y \, dy\,dz = 12 \text{ C}$
- $y=2$ 面：$\iint x^2 \, dx\,dz = 1 \text{ C}$
- 其余面贡献为零
- 总面积分 $= 13 \text{ C}$

**体积分：**
$\nabla \cdot \mathbf{D} = 2y$
$$\int_{\text{vol}} 2y \, dv = \int_0^3 \int_0^2 \int_0^1 2y \, dx\,dy\,dz = 13 \text{ C}$$

散度定理验证成立。

# 六、麦克斯韦第一方程（静电学）

高斯定律的微分形式：

$$\nabla \cdot \mathbf{D} = \rho_v$$

结合 $\mathbf{D} = \varepsilon \mathbf{E}$：
$$\nabla \cdot \mathbf{E} = \frac{\rho_v}{\varepsilon}$$

---

# 学习自测

## 一、单选题

**1. 电通量密度的单位是？**
A. V/m
B. C/m²
C. C/m³
D. N/C

**答案：** B
**解析：** 电通量密度 $\mathbf{D}$ 的单位是 $\text{C/m}^2$。
关联原文：[[Chp3 Gauss#电通量的概念]]

**2. 真空中 $\mathbf{D}$ 和 $\mathbf{E}$ 的关系是？**
A. $\mathbf{D} = \varepsilon_0 \mathbf{E}$
B. $\mathbf{D} = \mathbf{E}/\varepsilon_0$
C. $\mathbf{D} = \varepsilon_0 \mathbf{E}^2$
D. 两者无关

**答案：** A
**解析：** 在真空中 $\mathbf{D} = \varepsilon_0 \mathbf{E}$，其中 $\varepsilon_0 \approx 8.854 \times 10^{-12} \text{ F/m}$。
关联原文：[[Chp3 Gauss#电通量密度与电场强度的关系]]

**3. 高斯定律的数学表达式是？**
A. $\oint_S \mathbf{D} \cdot d\mathbf{S} = Q_{\text{enc}}$
B. $\oint_S \mathbf{D} \cdot d\mathbf{S} = 0$
C. $\oint_S \mathbf{D} \cdot d\mathbf{S} = \rho_v$
D. $\oint_S \mathbf{D} \cdot d\mathbf{S} = \varepsilon_0 Q$

**答案：** A
**解析：** 高斯定律指出穿过闭合曲面的电通量等于曲面内包围的总电荷。
关联原文：[[Chp3 Gauss#高斯定律的表述]]

## 二、多选题

**4. 选择高斯面需满足的条件包括？**
A. $\mathbf{D}_S$ 处处与曲面垂直
B. $\mathbf{D}_S$ 在高斯面上处处为常数
C. $\mathbf{D}_S$ 在与曲面垂直的部分上为常数
D. 高斯面必须为球面

**答案：** A、C
**解析：** 高斯面应使 $\mathbf{D}_S$ 处处垂直或相切于曲面，且在不为零的部分上 $D_S$ 为常数。
关联原文：[[Chp3 Gauss#高斯定律的应用条件]]

**5. 散度的物理意义包括？**
A. 正散度表示源点
B. 负散度表示汇点
C. 零散度表示无源无汇
D. 散度是矢量

**答案：** A、B、C
**解析：** 散度为标量，其正负指示场线的发出或汇聚。
关联原文：[[Chp3 Gauss#散度的定义]]

## 三、判断题

**6. 同轴电缆外部存在电场。**
**答案：** 错误
**解析：** $\rho > b$ 时包围净电荷为零，$\mathbf{D} = 0$，这是同轴电缆的屏蔽原理。
关联原文：[[Chp3 Gauss#同轴电缆]]

**7. 散度定理将面积分与体积分联系起来。**
**答案：** 正确
**解析：** $\oint_S \mathbf{D} \cdot d\mathbf{S} = \int_{\text{vol}} (\nabla \cdot \mathbf{D}) dv$。
关联原文：[[Chp3 Gauss#五、散度定理]]

## 四、简答题

**8. 简述高斯定律的内容及其应用时的条件。**
**参考答案：** 高斯定律：穿过任意闭合曲面的电通量等于该曲面所包围的总电荷。应用时需选择合适的高斯面，使 $\mathbf{D}_S$ 处处垂直或相切于曲面，且在 $\mathbf{D}_S \cdot d\mathbf{S} \neq 0$ 的部分上 $D_S$ 为常数。
关联原文：[[Chp3 Gauss#二、高斯定律]]

**9. 说明散度定理的物理意义。**
**参考答案：** 散度定理表明，矢量场在闭合曲面上的通量等于其散度在闭合曲面内体积上的积分。它将面积分转化为体积分，是连接局部散度和全局通量的桥梁。
关联原文：[[Chp3 Gauss#五、散度定理]]


---

# 一、电场中移动点电荷的能量

## 功的定义

在电场 $\mathbf{E}$ 中移动电荷 $Q$ 一段距离 $\mathbf{L}$，电场对电荷施加的力为：

$\mathbf{F} = Q\mathbf{E}$

外力需克服电场力做功。外力施加的力 $\mathbf{F}_{\text{appl}} = -Q\mathbf{E}$，微功为：

$dW = -Q\mathbf{E} \cdot d\mathbf{L}$

将电荷从初始点移动到终点的总功为：

$W = -Q\int_{\text{init}}^{\text{final}} \mathbf{E} \cdot d\mathbf{L}$

**结论：**
- $W > 0$：外力做功（我们消耗能量）
- $W < 0$：电场做功（电场消耗能量）
- 当 $\mathbf{E} \perp d\mathbf{L}$ 时，微功为零

## 均匀电场中的功

对于均匀电场 $\mathbf{E}$：

$W = -Q\mathbf{E} \cdot \mathbf{L}_{BA}$

功与路径无关，只取决于起点和终点的位置。

## 例题1：非均匀电场中的功（圆弧路径）

**题目：** 给定非均匀电场 $\mathbf{E} = y\mathbf{a}_x + x\mathbf{a}_y + 2\mathbf{a}_z$，求将 $Q=2\text{ C}$ 电荷从 $(1,0,1)$ 移动到 $(0.8,0.6,1)$ 沿圆 $x^2 + y^2 = 1$ 的较短弧所做的功。

**解析：**

$W = -Q\int_B^A \mathbf{E} \cdot d\mathbf{L}$

$d\mathbf{L} = dx\mathbf{a}_x + dy\mathbf{a}_y + dz\mathbf{a}_z$

$\mathbf{E} \cdot d\mathbf{L} = y\,dx + x\,dy + 2\,dz$

$W = -2\left(\int_1^{0.8} y\,dx + \int_0^{0.6} x\,dy + \int_1^1 2\,dz\right)$

沿圆 $x^2 + y^2 = 1$，$y = \sqrt{1-x^2}$，$x = \sqrt{1-y^2}$：

$W = -2\left(\int_1^{0.8} \sqrt{1-x^2}\,dx + \int_0^{0.6} \sqrt{1-y^2}\,dy + 0\right)$

计算得 $W \approx 0.962 \text{ J}$

## 例题2：沿直线路径的功

**题目：** 重复例题1，但沿从 $B$ 到 $A$ 的直线路径。

**解析：**

直线方程：$y = -3x + 3$，$x = 1 - y/3$

$W = -2\left(\int_1^{0.8} (-3x+3)\,dx + \int_0^{0.6} (1-y/3)\,dy + 0\right)$

计算得 $W = 0.962 \text{ J}$

**结论：** 无论路径如何（圆弧或直线），功的结果相同——说明静电场是保守场。

# 二、线积分

## 微分长度元

**直角坐标系：** $\mathbf{L} = dx\,\mathbf{a}_x + dy\,\mathbf{a}_y + dz\,\mathbf{a}_z$

**圆柱坐标系：** $\mathbf{L} = d\rho\,\mathbf{a}_\rho + \rho\,d\phi\,\mathbf{a}_\phi + dz\,\mathbf{a}_z$

**球坐标系：** $\mathbf{L} = dr\,\mathbf{a}_r + r\,d\theta\,\mathbf{a}_\theta + r\sin\theta\,d\phi\,\mathbf{a}_\phi$

## 无限长线电荷附近的功

对于无限长线电荷，$\mathbf{E} = \frac{\rho_L}{2\pi\varepsilon_0 \rho} \mathbf{a}_\rho$：

沿 $\phi$ 方向的路径：$W = 0$（$\mathbf{E} \perp d\mathbf{L}$）
沿 $\rho$ 方向的路径：$W = -\frac{Q\rho_L}{2\pi\varepsilon_0} \ln\frac{b}{a}$

# 三、电位差与电位

## 电位差的定义

电位差 $V_{AB}$ 定义为将单位正电荷从 $B$ 点移动到 $A$ 点外力所做的功：

$V_{AB} = -\int_B^A \mathbf{E} \cdot d\mathbf{L}$

电位差的单位为伏特（V），$1\text{ V} = 1\text{ J/C}$。

- $V_{AB} > 0$：外力做功将正电荷从 $B$ 移到 $A$
- $V_{AB} < 0$：电场做功（正电荷从 $A$ 自然移动到 $B$）

## 电位

电位是相对于参考点的电位差。常用参考点：
- **大地（ground）**
- **无穷远（infinity）**
- 同轴电缆的外导体

$V_A = -\int_{\text{ref}}^A \mathbf{E} \cdot d\mathbf{L}$

## 线电荷的电位差

从 $\rho = a$ 到 $\rho = b$：

$V_{ab} = \frac{\rho_L}{2\pi\varepsilon_0} \ln\frac{b}{a}$

## 点电荷的电位

取无穷远为零参考点：

$V = \frac{Q}{4\pi\varepsilon_0 r}$

# 四、点电荷的电位场

点电荷的电位差只取决于两点到电荷的距离，与路径无关：

$V_{AB} = \frac{Q}{4\pi\varepsilon_0}\left(\frac{1}{r_A} - \frac{1}{r_B}\right)$
# 五、等位面

等位面是电位相同的点组成的曲面。在等位面上移动电荷不做功。

- 点电荷的等位面 → 以点电荷为中心的球面
- 线电荷的等位面 → 以线电荷为轴的圆柱面
- 面电荷的等位面 → 平行于带电平面的平面

# 六、电位场的保守性

电位场具有**可叠加性**：

$V(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0} \int \frac{\rho_L(\mathbf{r}') dL'}{|\mathbf{r} - \mathbf{r}'|}$

电位与路径无关——静电场为**保守场**。沿闭合路径的线积分为零：

$\oint \mathbf{E} \cdot d\mathbf{L} = 0$

## 环形线电荷的电位

求 $z$ 轴上距环形线电荷（半径 $a$，线密度 $\rho_L$，位于 $z=0$ 平面）的电位：

$V = \frac{\rho_L a}{2\varepsilon_0 \sqrt{a^2 + z^2}}$

# 七、电位梯度

电位梯度定义为标量位场的最大空间变化率方向：

$\mathbf{E} = -\nabla V$

**直角坐标系：** $\nabla V = \frac{\partial V}{\partial x}\mathbf{a}_x + \frac{\partial V}{\partial y}\mathbf{a}_y + \frac{\partial V}{\partial z}\mathbf{a}_z$

**圆柱坐标系：** $\nabla V = \frac{\partial V}{\partial \rho}\mathbf{a}_\rho + \frac{1}{\rho}\frac{\partial V}{\partial \phi}\mathbf{a}_\phi + \frac{\partial V}{\partial z}\mathbf{a}_z$

**球坐标系：** $\nabla V = \frac{\partial V}{\partial r}\mathbf{a}_r + \frac{1}{r}\frac{\partial V}{\partial \theta}\mathbf{a}_\theta + \frac{1}{r\sin\theta}\frac{\partial V}{\partial \phi}\mathbf{a}_\phi$

## 例题3：已知电位求场量

**题目：** 已知 $V = 2x^2 y - 5z$，及点 $(-4,3,6)$，求 $V$、$\mathbf{E}$、$\mathbf{E}$ 方向、$\mathbf{D}$ 和 $\rho_v$。

**解析：**

$V = 2(16)(3) - 5(6) = 96 - 30 = 66 \text{ V}$

$$\mathbf{E} = -\nabla V = -\left(\frac{\partial V}{\partial x}\mathbf{a}_x + \frac{\partial V}{\partial y}\mathbf{a}_y + \frac{\partial V}{\partial z}\mathbf{a}_z\right)$$

$$= -(4xy\,\mathbf{a}_x + 2x^2\,\mathbf{a}_y - 5\,\mathbf{a}_z)$$

在 $(-4,3,6)$ 处：
$$\mathbf{E} = -(-48\,\mathbf{a}_x + 32\,\mathbf{a}_y - 5\,\mathbf{a}_z) = 48\mathbf{a}_x - 32\mathbf{a}_y + 5\mathbf{a}_z \text{ V/m}$$

$|\mathbf{E}| = \sqrt{48^2 + 32^2 + 5^2} = \sqrt{3353} \approx 57.9 \text{ V/m}$

方向单位向量：$\mathbf{a}_E = \frac{48\mathbf{a}_x - 32\mathbf{a}_y + 5\mathbf{a}_z}{57.9}$

$$\mathbf{D} = \varepsilon_0 \mathbf{E}$$

$$\rho_v = \nabla \cdot \mathbf{D} = \varepsilon_0 \nabla \cdot \mathbf{E} = \varepsilon_0 \left(\frac{\partial E_x}{\partial x} + \frac{\partial E_y}{\partial y} + \frac{\partial E_z}{\partial z}\right)$$

$$\frac{\partial E_x}{\partial x} = -4y,\; \frac{\partial E_y}{\partial y} = 0,\; \frac{\partial E_z}{\partial z} = 0$$

$$\rho_v = -4y\varepsilon_0 = -12\varepsilon_0 \text{ C/m}^3$$

# 八、电偶极子

## 电偶极子的定义

两个大小相等、符号相反、间距很小的点电荷构成**电偶极子**。

## 电偶极子的电位

$$V = \frac{Qd\cos\theta}{4\pi\varepsilon_0 r^2} = \frac{\mathbf{p} \cdot \mathbf{a}_r}{4\pi\varepsilon_0 r^2}$$

其中 $\mathbf{p} = Q\mathbf{d}$ 为**电偶极矩**。

## 电偶极子的电场

$$\mathbf{E} = \frac{Qd}{4\pi\varepsilon_0 r^3}(2\cos\theta\,\mathbf{a}_r + \sin\theta\,\mathbf{a}_\theta)$$

---

# 学习自测

## 一、单选题

**1. 电位差的单位是？**
A. J
B. V
C. A
D. W

**答案：** B
**解析：** 电位差的单位是伏特（V），$1\text{ V} = 1\text{ J/C}$。
关联原文：[[Chp4#电位差的定义]]

**2. 电场强度 $\mathbf{E}$ 和电位 $V$ 的关系是？**
A. $\mathbf{E} = \nabla V$
B. $\mathbf{E} = -\nabla V$
C. $\mathbf{E} = \nabla \times V$
D. $\mathbf{E} = -\nabla \times V$

**答案：** B
**解析：** $\mathbf{E} = -\nabla V$，电场指向电位下降最快的方向。
关联原文：[[Chp4#七、电位梯度]]

**3. 在等位面上移动电荷，电场力做功为？**
A. 正功
B. 负功
C. 零
D. 取决于电场方向

**答案：** C
**解析：** 等位面上电位相同，$\mathbf{E} \perp d\mathbf{L}$，故做功为零。
关联原文：[[Chp4#五、等位面]]

## 二、多选题

**4. 以下哪些是电位参考点的常用选择？**
A. 大地
B. 无穷远
C. 同轴电缆的外导体
D. 点电荷所在位置

**答案：** A、B、C
**解析：** 常用的电位参考点包括大地、无穷远和外导体。点电荷所在位置电位趋于无穷大，不可用作参考点。
关联原文：[[Chp4#电位]]

**5. 静电场中，电位的特点包括？**
A. 可叠加
B. 与路径无关（保守场）
C. 沿闭合回路积分为零
D. 等位面与电场线平行

**答案：** A、B、C
**解析：** 电位满足叠加原理，与路径无关（保守场），$\oint \mathbf{E} \cdot d\mathbf{L} = 0$。等位面与电场线垂直而非平行。
关联原文：[[Chp4#六、电位场的保守性]]

## 三、判断题

**6. 电偶极子的电位与距离 $r$ 成反比。**
**答案：** 错误
**解析：** 电偶极子的电位 $V \propto 1/r^2$，而点电荷的电位 $V \propto 1/r$。
关联原文：[[Chp4#电偶极子的电位]]

**7. 均匀电场中移动电荷所做的功与路径无关。**
**答案：** 正确
**解析：** 静电场为保守场，功只取决于起点和终点的位置，与路径无关。
关联原文：[[Chp4#均匀电场中的功]]

## 四、简答题

**8. 从电位梯度出发，推导已知 $V$ 求 $\mathbf{E}$ 的方法。**
**参考答案：** $\mathbf{E} = -\nabla V$。在直角坐标系中，$\mathbf{E} = -\left(\frac{\partial V}{\partial x}\mathbf{a}_x + \frac{\partial V}{\partial y}\mathbf{a}_y + \frac{\partial V}{\partial z}\mathbf{a}_z\right)$。即电场强度等于电位梯度的负值，方向指向电位下降最快的方向。
关联原文：[[Chp4#七、电位梯度]]


---

# 一、电流与电流密度

## 电流的定义

电荷的定向运动形成**电流**。电流的单位为安培（A）：

$$I = \frac{dQ}{dt}$$

电流定义为正电荷的运动方向（金属导体中实际为电子反向运动）。

## 电流密度

**电流密度** $\mathbf{J}$ 是矢量，单位为 $\text{A/m}^2$：

$$\Delta I = J_N \Delta S \quad \Rightarrow \quad I = \int_S \mathbf{J} \cdot d\mathbf{S}$$

电流密度与体电荷密度 $\rho_v$ 和速度 $\mathbf{v}$ 的关系：

$$\mathbf{J} = \rho_v \mathbf{v}$$

这称为**对流电流密度**（convection current density）。

# 二、电流连续性方程

## 积分形式

电荷守恒定律——"电荷既不能创生也不能消灭"：

$$\oint_S \mathbf{J} \cdot d\mathbf{S} = -\frac{dQ_i}{dt}$$

即流出闭合曲面的电流等于曲面内电荷的减少率。

## 微分形式（点形式）

利用散度定理：

$$\nabla \cdot \mathbf{J} = -\frac{\partial \rho_v}{\partial t}$$

这是**电流连续性方程的微分形式**。

## 例题1：电流密度

**题目：** 已知电流密度 $\mathbf{J} = \frac{2\cos\theta}{r^3} \mathbf{a}_r \text{ A/m}^2$，求相关物理量。

**解析：**
具体求解步骤需根据题目要求进行。一般思路：
- 通过 $I = \int_S \mathbf{J} \cdot d\mathbf{S}$ 求总电流
- 通过 $\nabla \cdot \mathbf{J} = -\partial \rho_v/\partial t$ 求体电荷密度的变化率

# 三、金属导体

## 能带结构

金属、半导体和绝缘体在 0 K 时的能带结构不同。金属中，价带电子在电场作用下形成**漂移速度** $\mathbf{v}_d$：

$$\mathbf{v}_d = -\mu_e \mathbf{E}$$

其中 $\mu_e$ 为电子迁移率。

## 欧姆定律的点形式

$$\mathbf{J} = \sigma \mathbf{E}$$

其中 $\sigma$ 为电导率（单位：$\text{S/m}$）。

## 宏观欧姆定律

对于均匀电场中的圆柱导体：

$V = EL, \quad I = JS = \sigma E S$

$$R = \frac{V}{I} = \frac{L}{\sigma S}$$

# 四、导体性质与边界条件

## 导体的静电性质

**性质1：** 导体内体电荷密度为零（$\rho_v = 0$），电荷只存在于外表面。
**性质2：** 静电场条件下，导体内电场强度为零（$\mathbf{E} = 0$）。

## 导体表面的边界条件

**切向分量：** $E_t = 0$，$D_t = 0$（否则电荷将运动，不满足静电场条件）
**法向分量：** $D_N = \rho_S$，$E_N = \rho_S/\varepsilon_0$

**导体在静电场中的三个原则：**
1. 导体内 $E = 0$
2. 导体表面电场处处垂直于表面
3. 导体表面为等位面

## 例题2：导体边界条件

**题目：** 已知电位 $V = 100(x^2 - y^2)$，点 $P(2,-1,3)$ 位于导体-自由空间边界上，求 $V$、$\mathbf{E}$、$\mathbf{D}$ 和 $\rho_S$ 以及导体表面方程。

**解析：**

$V_P = 100(4 - 1) = 300 \text{ V}$

$$\mathbf{E} = -\nabla V = -[200x\,\mathbf{a}_x - 200y\,\mathbf{a}_y] = -200x\,\mathbf{a}_x + 200y\,\mathbf{a}_y$$

在 $P(2,-1,3)$ 处：
$\mathbf{E} = -400\mathbf{a}_x - 200\mathbf{a}_y \text{ V/m}$

$\mathbf{D} = \varepsilon_0 \mathbf{E} = \varepsilon_0(-400\mathbf{a}_x - 200\mathbf{a}_y)$

$\rho_S = D_N = |\mathbf{D} \cdot \mathbf{n}|$（需根据具体导体表面方向确定）

导体表面为等位面，方程为 $V = 300$，即 $x^2 - y^2 = 3$（在 $P$ 点处）。

# 五、镜像法

## 镜像法的原理

一个电荷附近的无限大接地导电平面上方的电场，可以通过去掉平面并在对称位置放置一个镜像电荷来等效。

**关键点：**
- 镜像电荷与原电荷大小相等、符号相反
- 导电平面的电位为零（$V = 0$）
- 上半空间的电场不变

## 例题3：镜像法应用

**题目：** 在 $z=0$ 的接地导电平面上方 $x=0, z=3$ 处有一条 30 nC/m 的线电荷，求 $P(2,5,0)$ 处的面电荷密度。

**解析：**

去掉导电平面，在 $x=0, z=-3$ 处放置镜像线电荷（-30 nC/m）。

$P$ 点的电场由原线电荷和镜像线电荷叠加得到。由于 $P$ 在 $z=0$ 平面上，$E$ 的法向分量为两个线电荷贡献之和。

从镜像法原理可知，导电平面上的面电荷密度可由电场法向分量求得：

$$\rho_S = D_N = \varepsilon_0 E_N$$

# 六、半导体

## 本征半导体

本征半导体（如纯锗、纯硅）中，载流子有两种：
- **电子**（从价带跃迁到导带）
- **空穴**（价带留下的空位，视为正电荷）

禁带宽度约为 $1 \text{ eV}$。

## 半导体的电导率

$$\sigma = -\rho_e \mu_e + \rho_h \mu_h$$

其中 $\mu_e$、$\mu_h$ 分别为电子和空穴的迁移率。

- 半导体电导率随温度升高而增大（载流子密度快速增加）
- 金属电导率随温度升高而减小
- 半导体也满足欧姆定律的点形式：$\mathbf{J} = \sigma \mathbf{E}$

# 七、电介质材料

## 电介质的极化

电介质中的电荷为**束缚电荷**（bound charges），在电场作用下只能做微小位移。电介质具有储存电场能量的能力。

**极性分子：** 具有永久电偶极矩，外场使其定向排列。
**非极性分子：** 无永久电偶极矩，外场使其正负电荷中心分离。

## 极化强度

**极化强度 $\mathbf{P}$** 定义为每单位体积的电偶极矩：

$$\mathbf{P} = \lim_{\Delta v \to 0} \frac{1}{\Delta v} \sum_{i=1}^{n\Delta v} \mathbf{p}_i$$

单位：$\text{C/m}^2$

## 电通量密度的一般形式

$$ \mathbf{D} = \varepsilon_0 \mathbf{E} + \mathbf{P} $$

## 极化率与相对介电常数

在各向同性材料中，$\mathbf{P}$ 与 $\mathbf{E}$ 线性相关：

$$\mathbf{P} = \chi_e \varepsilon_0 \mathbf{E}$$

其中 $\chi_e$ 为电极化率。于是：

$$\mathbf{D} = \varepsilon_0(1 + \chi_e)\mathbf{E} = \varepsilon_0 \varepsilon_r \mathbf{E} = \varepsilon \mathbf{E}$$

其中 $\varepsilon_r = 1 + \chi_e$ 为相对介电常数。

## 例题4：电介质中的场

**题目：** 特氟龙（Teflon） slab 位于 $0 \le x \le a$ 区域，外部为自由空间。Teflon 外有均匀电场 $\mathbf{E}_{\text{out}} = E_0 \mathbf{a}_x \text{ V/m}$，求各区域的 $\mathbf{D}$、$\mathbf{E}$ 和 $\mathbf{P}$。

**解析：**

**区域 I（$x < 0$）：**
$\mathbf{E}_I = E_0 \mathbf{a}_x,\quad \mathbf{D}_I = \varepsilon_0 E_0 \mathbf{a}_x,\quad \mathbf{P}_I = 0$

**区域 II（$0 \le x \le a$，Teflon 内部）：**
由边界条件，$D_{N}$ 连续：
$\mathbf{D}_{II} = \varepsilon_0 E_0 \mathbf{a}_x$

$$\mathbf{E}_{II} = \frac{\mathbf{D}_{II}}{\varepsilon} = \frac{\varepsilon_0 E_0}{\varepsilon} \mathbf{a}_x = \frac{E_0}{\varepsilon_r} \mathbf{a}_x$$

$$\mathbf{P}_{II} = \mathbf{D}_{II} - \varepsilon_0 \mathbf{E}_{II} = \varepsilon_0 E_0 \left(1 - \frac{1}{\varepsilon_r}\right) \mathbf{a}_x$$

**区域 III（$x > a$）：**
$\mathbf{E}_{III} = E_0 \mathbf{a}_x,\quad \mathbf{D}_{III} = \varepsilon_0 E_0 \mathbf{a}_x,\quad \mathbf{P}_{III} = 0$

# 八、理想电介质的边界条件

## 切向分量

电场强度的切向分量连续：

$$E_{t1} = E_{t2}$$

电通量密度的切向分量一般不连续：

$$\frac{D_{t1}}{\varepsilon_1} = \frac{D_{t2}}{\varepsilon_2}$$

## 法向分量

若无自由面电荷（$\rho_S = 0$），电通量密度的法向分量连续：

$$D_{N1} = D_{N2}$$

电场强度的法向分量一般不连续：

$$\varepsilon_1 E_{N1} = \varepsilon_2 E_{N2}$$

## 电场方向和大小关系

$$\frac{\tan\theta_1}{\tan\theta_2} = \frac{\varepsilon_1}{\varepsilon_2}$$

## 例题5：Teflon 中的场（续）

**题目：** 利用边界条件完成例题4，求 Teflon 内部的场。

**解析：**

由边界条件，Teflon 与自由空间边界上：
- 法向 $\mathbf{D}$ 连续：$D_{N,\text{Teflon}} = D_{N,\text{free}} = \varepsilon_0 E_0$
- 切向 $\mathbf{E}$ 连续：$E_{t,\text{Teflon}} = E_{t,\text{free}}$

因此 Teflon 内部的 $\mathbf{D}$、$\mathbf{E}$、$\mathbf{P}$ 与例题4中区域 II 的结果一致。

## 导体-电介质边界条件

$$\mathbf{E}_{\text{inside}} = 0,\quad \mathbf{D}_{\text{inside}} = 0$$
$$E_t = 0,\quad D_t = 0$$
$$D_N = \varepsilon E_N = \rho_S$$

## 导体内电荷弛豫

任何在导体内部引入的电荷都将快速到达表面：
$$\rho_v = \rho_0 e^{-t/(\varepsilon/\sigma)}$$

时间常数 $\tau = \varepsilon/\sigma$：
- 良导体：时间常数很小（$\sim 10^{-19}\text{ s}$），电荷迅速衰减到表面
- 不良导体：时间常数较大

---

# 学习自测

## 一、单选题

**1. 电流密度的单位是？**
A. A/m
B. A/m²
C. C/m²
D. V/m

**答案：** B
**解析：** 电流密度 $\mathbf{J}$ 的单位是 $\text{A/m}^2$。
关联原文：[[Chp5#电流密度]]

**2. 欧姆定律点形式 $\mathbf{J} = \sigma \mathbf{E}$ 中 $\sigma$ 表示？**
A. 介电常数
B. 磁导率
C. 电导率
D. 电极化率

**答案：** C
**解析：** $\sigma$ 为电导率，单位 $\text{S/m}$。
关联原文：[[Chp5#欧姆定律的点形式]]

**3. 静电场中导体内部的电场强度为？**
A. 无穷大
B. 零
C. 等于表面电场
D. 由外部电场决定

**答案：** B
**解析：** 静电场条件下导体内 $\mathbf{E} = 0$。
关联原文：[[Chp5#导体的静电性质]]

**4. 电介质中，$\mathbf{D}$ 与 $\mathbf{E}$ 和 $\mathbf{P}$ 的关系是？**
A. $\mathbf{D} = \varepsilon_0 \mathbf{E} + \mathbf{P}$
B. $\mathbf{D} = \varepsilon_0 \mathbf{E} - \mathbf{P}$
C. $\mathbf{D} = \varepsilon_0 \mathbf{E}$
D. $\mathbf{D} = \mathbf{P} - \varepsilon_0 \mathbf{E}$

**答案：** A
**解析：** $\mathbf{D} = \varepsilon_0 \mathbf{E} + \mathbf{P}$，这是电通量密度在电介质中的一般形式。
关联原文：[[Chp5#电通量密度的一般形式]]

## 二、多选题

**5. 导体的静电性质包括？**
A. 导体内 $\rho_v = 0$
B. 导体内 $\mathbf{E} = 0$
C. 导体表面为等位面
D. 导体表面电场与表面相切

**答案：** A、B、C
**解析：** 导体表面电场处处垂直于表面（法向），而非相切。
关联原文：[[Chp5#导体的静电性质]]

**6. 电流连续性方程的微分形式表明？**
A. $\nabla \cdot \mathbf{J} = -\partial \rho_v/\partial t$
B. 电荷守恒
C. 电流密度散度为零
D. 电荷可以创生

**答案：** A、B
**解析：** $\nabla \cdot \mathbf{J} = -\partial \rho_v/\partial t$ 是电荷守恒定律的微分形式。只有稳恒条件下 $\nabla \cdot \mathbf{J} = 0$。
关联原文：[[Chp5#微分形式（点形式）]]

## 三、判断题

**7. 镜像法中去掉导电平面后，需在原电荷的对称位置放置等量同号电荷。**
**答案：** 错误
**解析：** 镜像电荷与原电荷大小相等、符号相反，以保证导电平面的电位为零。
关联原文：[[Chp5#镜像法的原理]]

**8. 半导体的电导率随温度升高而降低。**
**答案：** 错误
**解析：** 半导体电导率随温度升高而增大（载流子密度快速增加）。金属才随温度升高而电导率降低。
关联原文：[[Chp5#半导体的电导率]]

## 四、简答题

**9. 简述理想电介质边界条件的法向和切向关系。**
**参考答案：** 切向电场 $E_t$ 连续，切向 $D_t$ 一般不连续；法向 $D_N$ 连续（无自由面电荷时），法向 $E_N$ 一般不连续。综合得 $\tan\theta_1/\tan\theta_2 = \varepsilon_1/\varepsilon_2$。
关联原文：[[Chp5#八、理想电介质的边界条件]]


---

# 一、电容的定义

## 电容的基本概念

两个导体嵌入均匀电介质中，导体 $M_2$ 带正电荷 $+Q$，导体 $M_1$ 带等量负电荷 $-Q$。两导体间的电位差为 $V_0$。

**电容**定义为任一导体上的总电荷绝对值与导体间电位差之比：

$$C = \frac{Q}{V_0} = \frac{Q}{\int \mathbf{E} \cdot d\mathbf{L}}$$

- 电容与电位和总电荷的比值恒定
- 电容仅取决于导体的几何尺寸和介质的介电常数
- 单位：法拉（F），$1 \text{ F} = 1 \text{ C/V}$

## 平行板电容器

两无限大平行平面导体（间距 $d \ll$ 平面线度），介质介电常数为 $\varepsilon$：

$$C = \frac{\varepsilon S}{d}$$

其中 $S$ 为极板面积。

## 例题1：平行板电容计算

**题目：** 计算以云母为介质（$\varepsilon_r = 6$），极板面积 $10 \text{ in}^2$，间距 $0.01 \text{ in}$ 的平行板电容器的电容。

**解析：**

首先进行单位换算：
$10 \text{ in}^2 = 10 \times (0.0254)^2 = 6.452 \times 10^{-3} \text{ m}^2$
$0.01 \text{ in} = 0.01 \times 0.0254 = 2.54 \times 10^{-4} \text{ m}$

$$C = \frac{\varepsilon S}{d} = \frac{\varepsilon_0 \varepsilon_r S}{d} = \frac{8.854 \times 10^{-12} \times 6 \times 6.452 \times 10^{-3}}{2.54 \times 10^{-4}} = 1.35 \text{ nF}$$

# 二、几种典型的电容

## 同轴电缆（圆柱电容器）

内导体半径 $a$，外导体内半径 $b$，长度 $L$：

$$C = \frac{2\pi\varepsilon L}{\ln(b/a)}$$

## 球形电容器

两个同心导体球壳，内球半径 $a$，外球内半径 $b$：

$$C = \frac{4\pi\varepsilon ab}{b - a}$$

## 孤立导体球的电容

当 $b \to \infty$：

$$C = 4\pi\varepsilon a$$

一个直径 1 cm 的孤立导体球电容约为 $0.556 \text{ pF}$。

## 多层介质电容器

### 介质分界面平行于极板（串联）

$$\frac{1}{C} = \frac{1}{C_1} + \frac{1}{C_2}$$

### 介质分界面垂直于极板（并联）

$$C = C_1 + C_2$$

# 三、静电场的能量密度

## 电场能量

$$W_E = \frac{1}{2}QV = \frac{1}{2}CV^2 = \frac{Q^2}{2C}$$

## 电场能量密度

$$w_E = \frac{1}{2}\mathbf{D} \cdot \mathbf{E} = \frac{1}{2}\varepsilon E^2$$

总静电能：$W_E = \int_{\text{vol}} \frac{1}{2}\mathbf{D} \cdot \mathbf{E} \, dv$

# 四、双线传输线的电容

## 电位分布

采用两根平行线电荷（$\pm\rho_L$ 位于 $x = \pm a$）等效：

$$V = \frac{\rho_L}{2\pi\varepsilon} \ln\frac{R_2}{R_1}$$

圆柱表面的电位 $V_0 = \frac{\rho_L}{2\pi\varepsilon} \ln K_1$

其中 $a = \sqrt{h^2 - b^2}$，$K_1 = \frac{h + \sqrt{h^2 - b^2}}{b}$

### 单导线-地平面的电容

$$C = \frac{2\pi\varepsilon L}{\ln(2h/b)}$$

### 双线传输线的电容

$$C = \frac{\pi\varepsilon L}{\ln(2h/b)}$$

## 例题2：圆柱-平面系统确认参数

**题目：** 半径 5 m 的圆柱体电位 100 V，轴线距零电位平面 13 m。在自由空间中，求相关参数。

**解析：**

$a = \sqrt{h^2 - b^2} = \sqrt{13^2 - 5^2} = 12 \text{ m}$
$K_1 = (h + a)/b = (13 + 12)/5 = 5$
$\rho_L = 2\pi\varepsilon_0 V_0/\ln K_1$

可进一步确定 50 V 等位面的参数。

# 五、泊松方程与拉普拉斯方程

## 方程形式

泊松方程：$\nabla^2 V = -\rho_v/\varepsilon$
拉普拉斯方程：$\nabla^2 V = 0$

## 拉普拉斯算子

直角坐标系：$\nabla^2 V = \frac{\partial^2 V}{\partial x^2} + \frac{\partial^2 V}{\partial y^2} + \frac{\partial^2 V}{\partial z^2}$

圆柱坐标系：$\nabla^2 V = \frac{1}{\rho}\frac{\partial}{\partial\rho}(\rho\frac{\partial V}{\partial\rho}) + \frac{1}{\rho^2}\frac{\partial^2 V}{\partial\phi^2} + \frac{\partial^2 V}{\partial z^2}$

球坐标系：$\nabla^2 V = \frac{1}{r^2}\frac{\partial}{\partial r}(r^2\frac{\partial V}{\partial r}) + \frac{1}{r^2\sin\theta}\frac{\partial}{\partial\theta}(\sin\theta\frac{\partial V}{\partial\theta}) + \frac{1}{r^2\sin^2\theta}\frac{\partial^2 V}{\partial\phi^2}$

## 例题3：平行板电容器（拉普拉斯方程求解）

**题目：** 平行板电容器间距 $d$，$V(0) = 0$，$V(d) = V_0$。求电位分布、电场强度和电容。

**解析：**

$$\frac{d^2V}{dx^2} = 0 \Rightarrow V = Ax + B$$

边界条件：$B = 0$，$A = V_0/d$

**电位分布：** $V(x) = (V_0/d)x$

**电场强度：** $\mathbf{E} = -\frac{V_0}{d}\mathbf{a}_x$

**电容：** $C = \varepsilon S/d$

## 例题4：同轴传输线

**题目：** 同轴电缆内导体半径 $a$（电位 $V_0$），外导体内半径 $b$（电位 0），求电位分布和电容。

**解析：**

$$\frac{1}{\rho}\frac{d}{d\rho}(\rho\frac{dV}{d\rho}) = 0 \Rightarrow V = A\ln\rho + B$$

边界条件：$V(b) = 0$，$V(a) = V_0$

$A = V_0/\ln(a/b)$，$B = -A\ln b$

**电位分布：** $V(\rho) = V_0\frac{\ln(b/\rho)}{\ln(b/a)}$

**电场强度：** $\mathbf{E} = \frac{V_0}{\rho\ln(b/a)}\mathbf{a}_\rho$

**电容：** $C = \frac{2\pi\varepsilon L}{\ln(b/a)}$

## 例题5：扇形极板

**题目：** 两扇形极板 $\phi=0$（电位 0）和 $\phi=\alpha$（电位 $V_0$），求电位分布。

**解析：**

$$\frac{d^2V}{d\phi^2} = 0 \Rightarrow V = A\phi + B$$

边界条件：$V(0)=0 \Rightarrow B=0$，$V(\alpha)=V_0 \Rightarrow A=V_0/\alpha$

**电位分布：** $V(\phi) = V_0\phi/\alpha$

**电场强度：** $\mathbf{E} = -\frac{V_0}{\alpha\rho}\mathbf{a}_\phi$

## 例题6：同心球

**题目：** 内球半径 $a$（电位 $V_0$），外球半径 $b$（电位 0），求电位分布和电容。

**解析：**

$$\frac{1}{r^2}\frac{d}{dr}(r^2\frac{dV}{dr}) = 0 \Rightarrow V = -\frac{A}{r} + B$$

边界条件：$V(b)=0$，$V(a)=V_0$

$A = \frac{abV_0}{a-b}$，$B = \frac{aV_0}{a-b}$

**电位分布：** $V(r) = V_0\frac{a(b-r)}{r(b-a)}$

**电容：** $C = \frac{4\pi\varepsilon ab}{b-a}$

## 例题7：锥形结构

**题目：** 锥体悬浮于导电平面上，电位随 $\theta$ 变化，求解电容。

**解析：**

从拉普拉斯方程解得电位随 $\theta$ 的分布。

电场强度 $\mathbf{E} = -\nabla V$，面电荷密度 $\rho_S = \mathbf{D} \cdot \mathbf{n}$。

总电荷通过 $Q = \int \rho_S dS$ 求得，电容 $C = Q/V_0$。

注意这是近似结果，忽略了锥体边缘的边缘效应（fringing fields）。

---

# 学习自测

## 一、单选题

**1. 电容的单位是？**
A. 亨利（H）
B. 法拉（F）
C. 韦伯（Wb）
D. 特斯拉（T）

**答案：** B
**解析：** 电容的单位是法拉（F），$1\text{ F} = 1\text{ C/V}$。
关联原文：[[updatedChp6#电容的基本概念]]

**2. 平行板电容器的电容与极板间距的关系是？**
A. 正比
B. 反比
C. 无关
D. 平方正比

**答案：** B
**解析：** $C = \varepsilon S/d$，电容与极板间距 $d$ 成反比。
关联原文：[[updatedChp6#平行板电容器]]

**3. 泊松方程 $\nabla^2 V = -\rho_v/\varepsilon$ 中，当 $\rho_v = 0$ 时变为？**
A. 麦克斯韦方程
B. 拉普拉斯方程
C. 欧姆定律
D. 高斯定律

**答案：** B
**解析：** 当 $\rho_v = 0$ 时，泊松方程简化为拉普拉斯方程 $\nabla^2 V = 0$。
关联原文：[[updatedChp6#方程形式]]

## 二、多选题

**4. 以下关于电容的说法正确的是？**
A. 电容取决于导体的几何尺寸
B. 电容与介质的介电常数有关
C. 电容与外加电压成正比
D. 电容与总电荷成正比

**答案：** A、B
**解析：** 电容仅取决于导体的几何尺寸和介质的介电常数，与电压和电荷无关。
关联原文：[[updatedChp6#电容的基本概念]]

**5. 电场能量密度的表达式包括？**
A. $\frac{1}{2}\varepsilon E^2$
B. $\frac{1}{2}\mathbf{D} \cdot \mathbf{E}$
C. $\frac{1}{2}CV^2$
D. $\frac{1}{2}QV$

**答案：** A、B
**解析：** 电场能量密度 $w_E = \mathbf{D}\cdot\mathbf{E}/2 = \varepsilon E^2/2$。
关联原文：[[updatedChp6#电场能量密度]]

## 三、判断题

**6. 同轴电缆的电容 $C = 2\pi\varepsilon L / \ln(b/a)$。**
**答案：** 正确
**解析：** 这是同轴电缆电容的标准公式。
关联原文：[[updatedChp6#同轴电缆（圆柱电容器）]]

**7. 孤立导体球的电容与球的半径的平方成正比。**
**答案：** 错误
**解析：** 孤立导体球的电容 $C = 4\pi\varepsilon a$，与半径 $a$ 成正比。
关联原文：[[updatedChp6#孤立导体球的电容]]

## 四、简答题

**8. 简述泊松方程和拉普拉斯方程的物理意义。**
**参考答案：** 泊松方程 $\nabla^2 V = -\rho_v/\varepsilon$ 描述有体电荷分布时电位与电荷密度的关系。拉普拉斯方程 $\nabla^2 V = 0$ 是无源区域中电位的控制方程。两者结合边界条件可用于求解电位场。
关联原文：[[updatedChp6#五、泊松方程与拉普拉斯方程]]


---

# 一、毕奥-萨伐尔定律

## 定律表述

**毕奥-萨伐尔定律**描述了一个微分电流元 $Id\mathbf{L}$ 产生的磁场：

$$d\mathbf{H} = \frac{I d\mathbf{L} \times \mathbf{a}_R}{4\pi R^2}$$

其中 $d\mathbf{H}$ 的单位为 $\text{A/m}$。

对于体电流密度 $\mathbf{J}$ 和面电流密度 $\mathbf{K}$：

$$d\mathbf{H} = \frac{\mathbf{J} dv \times \mathbf{a}_R}{4\pi R^2}, \quad d\mathbf{H} = \frac{\mathbf{K} dS \times \mathbf{a}_R}{4\pi R^2}$$

## 无限长直导线的磁场

无限长直导线载流 $I$，距离导线 $\rho$ 处的磁场：

$$\mathbf{H} = \frac{I}{2\pi\rho} \mathbf{a}_\phi$$

- 磁场大小与距离成反比
- 磁场方向为环绕导线的圆周方向（右手定则）

## 有限长导线的磁场

对于有限长直线电流，磁场公式需积分求解：

$$\mathbf{H} = \frac{I}{4\pi\rho}(\sin\alpha_2 - \sin\alpha_1)\mathbf{a}_\phi$$

其中 $\alpha_1$ 和 $\alpha_2$ 分别为导线两端到场点的方位角。

## 例题1：折线电流的磁场

**题目：** 求 $P_2(0.4, 0.3, 0)$ 处的 $\mathbf{H}$。一根 8 A 的线电流从正 $x$ 轴无穷远沿 $x$ 轴流入原点，再沿 $y$ 轴流向无穷远。

**解析：**

利用毕奥-萨伐尔定律分别计算两段导线在 $P_2$ 处的磁场贡献，然后叠加。

$x$ 轴段（从 $-\infty$ 到 0）：在 $P_2(0.4,0.3,0)$ 处的 $d\mathbf{L} = dx\mathbf{a}_x$，
$\mathbf{R} = 0.4\mathbf{a}_x + 0.3\mathbf{a}_y$
$| \mathbf{R} | = \sqrt{0.4^2 + 0.3^2} = 0.5$

$y$ 轴段（从 0 到 $\infty$）：在 $P_2$ 处的 $d\mathbf{L} = dy\mathbf{a}_y$

分别计算两段在 $P_2$ 处的 $d\mathbf{H}$ 并积分，然后求和。

# 二、安培环路定律

## 定律表述

**安培环路定律**：磁场强度 $\mathbf{H}$ 沿任意闭合路径的线积分等于该路径所包围的总电流：

$$\oint \mathbf{H} \cdot d\mathbf{L} = I_{\text{enc}}$$

安培环路定律常用于求解具有高度对称性的磁场问题。

## 应用示例1：无限长直导线

以导线为中心取圆形路径（半径 $\rho$）：

$$\oint \mathbf{H} \cdot d\mathbf{L} = H_\phi \cdot 2\pi\rho = I$$

$$H_\phi = \frac{I}{2\pi\rho}$$

## 应用示例2：同轴传输线

同轴传输线内导体半径 $a$，外导体内半径 $b$，外半径 $c$。

**区域 $0 < \rho < a$（内导体内部）：**
$$I_{\text{enc}} = I\frac{\rho^2}{a^2}, \quad H_\phi = \frac{I\rho}{2\pi a^2}$$

**区域 $a < \rho < b$（导体间）：**
$$I_{\text{enc}} = I, \quad H_\phi = \frac{I}{2\pi\rho}$$

**区域 $b < \rho < c$（外导体内部）：**
$$I_{\text{enc}} = I\frac{c^2 - \rho^2}{c^2 - b^2}, \quad H_\phi = \frac{I}{2\pi\rho}\frac{c^2 - \rho^2}{c^2 - b^2}$$

**区域 $\rho > c$（外部）：**
$$I_{\text{enc}} = 0, \quad H_\phi = 0$$

同轴电缆对外部不产生磁场——具有**屏蔽效应**。

## 应用示例3：电流片

无限大电流片位于 $z = 0$ 平面，面电流密度 $\mathbf{K} = K_y \mathbf{a}_y$：

$$\mathbf{H} = \pm\frac{K_y}{2}\mathbf{a}_x$$

上方取 $+$，下方取 $-$。

两片反向电流片（间距 $h$）之间：
$$\mathbf{H} = K_y \mathbf{a}_x$$
外部为零。

## 理想螺线管

无限长螺线管，单位长度匝数 $n$，电流 $I$：

**内部：** $H = nI$（均匀）
**外部：** $H = 0$

## 理想环形螺线管

$N$ 匝环形螺线管：

**内部：** $H_\phi = \frac{NI}{2\pi\rho}$（沿圆周方向）
**外部：** $H = 0$

# 三、旋度

## 旋度的定义

旋度是矢量场的"环量面密度"（每单位面积的环量）：

$$(\nabla \times \mathbf{H})_N = \lim_{\Delta S_N \to 0} \frac{\oint \mathbf{H} \cdot d\mathbf{L}}{\Delta S_N}$$

**物理意义：** 旋度描述了矢量场的旋转特性。

- 静电场：$\nabla \times \mathbf{E} = 0$（无旋场）
- 稳恒磁场：$\nabla \times \mathbf{H} = \mathbf{J}$（有旋场）

## 旋度的表达式

**直角坐标系：**
$$\nabla \times \mathbf{H} = \begin{vmatrix} \mathbf{a}_x & \mathbf{a}_y & \mathbf{a}_z \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ H_x & H_y & H_z \end{vmatrix}$$

**圆柱坐标系：**
$$\nabla \times \mathbf{H} = \frac{1}{\rho}\begin{vmatrix} \mathbf{a}_\rho & \rho\mathbf{a}_\phi & \mathbf{a}_z \\ \frac{\partial}{\partial\rho} & \frac{\partial}{\partial\phi} & \frac{\partial}{\partial z} \\ H_\rho & \rho H_\phi & H_z \end{vmatrix}$$

## 安培环路定律的点形式

$$\nabla \times \mathbf{H} = \mathbf{J}$$

这是安培环路定律的微分形式，也是**麦克斯韦第二方程**（非时变条件）。

同时，$\nabla \times \mathbf{E} = 0$ 是**麦克斯韦第三方程**（非时变条件）。

## 例题2：旋度计算

**题目：** 已知磁场 $\mathbf{H}$ 的表达式，求 $\nabla \times \mathbf{H}$。

**解析：** 根据旋度定义，计算 $\mathbf{H}$ 的各分量偏导，代入坐标系的旋度公式即可。

# 四、斯托克斯定理

$$\oint \mathbf{H} \cdot d\mathbf{L} = \int_S (\nabla \times \mathbf{H}) \cdot d\mathbf{S}$$

斯托克斯定理将闭合路径的线积分与其所围曲面的旋度面积分联系起来。

## 例题3：验证斯托克斯定理

**题目：** 球面 $r = 4$，$0 \le \theta \le 0.1\pi$，$0 \le \phi \le 0.3\pi$ 上，$\mathbf{H} = 6r\sin\phi\,\mathbf{a}_r + 18r\sin\theta\cos\phi\,\mathbf{a}_\phi$，验证斯托克斯定理。

**解析：**

**左侧——线积分：** 沿球面边界的三段圆弧分别计算 $\oint \mathbf{H} \cdot d\mathbf{L}$，求和得约 $22.2 \text{ A}$。

**右侧——面积分：** 计算 $\nabla \times \mathbf{H}$ 在球面上的面积分，结果应与左侧相等。

# 五、磁通量与磁通密度

## 磁通密度

在自由空间中，定义磁通密度 $\mathbf{B}$：

$$\mathbf{B} = \mu_0 \mathbf{H}$$

其中 $\mu_0 = 4\pi \times 10^{-7} \text{ H/m}$ 为真空磁导率。

$\mathbf{B}$ 的单位为 $\text{Wb/m}^2$（韦伯/平方米）或特斯拉（T）。

## 磁通量

磁通量 $\Phi$ 定义为穿过某面积的磁通密度通量：

$$\Phi = \int_S \mathbf{B} \cdot d\mathbf{S}$$

单位：韦伯（Wb）。

## 磁通的高斯定律

$$\oint_S \mathbf{B} \cdot d\mathbf{S} = 0$$

即**穿过任意闭合曲面的磁通量为零**——说明不存在磁单极子（磁荷）。

微分形式：

$$\nabla \cdot \mathbf{B} = 0$$

这是**麦克斯韦第四方程**（静电场和稳恒磁场条件）。

## 例题4：同轴电缆的磁通

**题目：** 求同轴电缆在 $a \le \rho \le b$，$0 \le z \le d$ 区域中的磁通。

**解析：**

$$\mathbf{B} = \mu_0 \mathbf{H} = \frac{\mu_0 I}{2\pi\rho} \mathbf{a}_\phi$$

$$\Phi = \int_S \mathbf{B} \cdot d\mathbf{S} = \int_0^d \int_a^b \frac{\mu_0 I}{2\pi\rho} \, d\rho\, dz = \frac{\mu_0 I d}{2\pi} \ln\frac{b}{a}$$

# 六、标量磁位与矢量磁位

## 标量磁位

$\mathbf{H} = -\nabla V_m$ 定义标量磁位 $V_m$。

由于 $\nabla \times \mathbf{H} = \mathbf{J}$，标量磁位仅在无电流区域（$\mathbf{J} = 0$）有效。

## 矢量磁位

由于 $\nabla \cdot \mathbf{B} = 0$，而 $\nabla \cdot (\nabla \times \mathbf{A}) = 0$，可定义：

$$\mathbf{B} = \nabla \times \mathbf{A}$$

其中 $\mathbf{A}$ 称为**矢量磁位**，单位为 $\text{Wb/m}$。

为了唯一确定 $\mathbf{A}$，需附加条件（**规范条件**）：
- 库仑规范：$\nabla \cdot \mathbf{A} = 0$
- 洛伦兹规范：$\nabla \cdot \mathbf{A} = -\mu\varepsilon\frac{\partial V}{\partial t}$

## 矢量磁位的泊松方程

由安培定律 $\nabla \times \mathbf{H} = \mathbf{J}$ 和 $\mathbf{B} = \nabla \times \mathbf{A}$：

$$\nabla^2 \mathbf{A} = -\mu \mathbf{J}$$

这是矢量形式的泊松方程。

## 麦克斯韦方程总结（静电场和稳恒磁场）

**积分形式：**
$$\oint_S \mathbf{D} \cdot d\mathbf{S} = Q, \quad \oint_S \mathbf{B} \cdot d\mathbf{S} = 0$$
$$\oint \mathbf{E} \cdot d\mathbf{L} = 0, \quad \oint \mathbf{H} \cdot d\mathbf{L} = I$$

**微分形式：**
$$\nabla \cdot \mathbf{D} = \rho_v, \quad \nabla \cdot \mathbf{B} = 0$$
$$\nabla \times \mathbf{E} = 0, \quad \nabla \times \mathbf{H} = \mathbf{J}$$

---

# 学习自测

## 一、单选题

**1. 毕奥-萨伐尔定律中，磁场强度 $\mathbf{H}$ 的单位是？**
A. A/m
B. T
C. Wb/m²
D. H/m

**答案：** A
**解析：** 磁场强度 $\mathbf{H}$ 的单位是 $\text{A/m}$。
关联原文：[[Chp7+Magneti Field#定律表述]]

**2. 无限长直导线载流 $I$，距导线 $\rho$ 处的磁场强度为？**
A. $\frac{I}{2\pi\rho}$
B. $\frac{I}{4\pi\rho}$
C. $\frac{I}{2\pi\rho^2}$
D. $\frac{I}{4\pi\rho^2}$

**答案：** A
**解析：** $H = I/(2\pi\rho)$，方向由右手定则确定。
关联原文：[[Chp7+Magneti Field#无限长直导线的磁场]]

**3. $\nabla \times \mathbf{H} = \mathbf{J}$ 是什么方程？**
A. 高斯定律
B. 欧姆定律
C. 安培环路定律的点形式
D. 毕奥-萨伐尔定律

**答案：** C
**解析：** $\nabla \times \mathbf{H} = \mathbf{J}$ 是安培环路定律的微分形式。
关联原文：[[Chp7+Magneti Field#安培环路定律的点形式]]

## 二、多选题

**4. 以下哪些是磁场的无源性质表现？**
A. $\oint_S \mathbf{B} \cdot d\mathbf{S} = 0$
B. $\nabla \cdot \mathbf{B} = 0$
C. $\nabla \cdot \mathbf{E} = \rho_v/\varepsilon_0$
D. $\oint_S \mathbf{B} \cdot d\mathbf{S} = \mu_0 I$

**答案：** A、B
**解析：** 磁通的高斯定律 $\oint_S \mathbf{B} \cdot d\mathbf{S} = 0$ 和 $\nabla \cdot \mathbf{B} = 0$ 表明不存在磁单极子。
关联原文：[[Chp7+Magneti Field#磁通的高斯定律]]

**5. 斯托克斯定理表述正确的是？**
A. $\oint \mathbf{H} \cdot d\mathbf{L} = \int_S (\nabla \times \mathbf{H}) \cdot d\mathbf{S}$
B. 将线积分与面积分联系起来
C. $\oint_S \mathbf{D} \cdot d\mathbf{S} = \int_{\text{vol}} (\nabla \cdot \mathbf{D}) dv$
D. $\oint \mathbf{H} \cdot d\mathbf{L} = I_{\text{enc}}$

**答案：** A、B
**解析：** 斯托克斯定理将闭合路径的线积分与其所围曲面的旋度面积分联系起来。C 是散度定理，D 是安培环路定律积分形式。
关联原文：[[Chp7+Magneti Field#四、斯托克斯定理]]

## 三、判断题

**6. 同轴电缆对外部空间会产生磁场。**
**答案：** 错误
**解析：** 同轴电缆中 $\rho > c$ 时 $I_{\text{enc}} = 0$，因此 $\mathbf{H} = 0$，具有屏蔽效应。
关联原文：[[Chp7+Magneti Field#应用示例2：同轴传输线]]

**7. $\nabla \cdot \mathbf{B} = 0$ 说明存在磁单极子。**
**答案：** 错误
**解析：** $\nabla \cdot \mathbf{B} = 0$ 表明磁通线是闭合的，不存在磁单极子。
关联原文：[[Chp7+Magneti Field#磁通的高斯定律]]

## 四、简答题

**8. 简述安培环路定律的物理意义及其应用条件。**
**参考答案：** 安培环路定律：$\mathbf{H}$ 沿任意闭合路径的线积分等于路径所包围的总电流。适用于具有高度对称性的磁场问题（如无限长导线、同轴电缆、螺线管等），需选择合适路径使 $\mathbf{H}$ 与 $d\mathbf{L}$ 平行或垂直且在路径上 $\mathbf{H}$ 为常数。
关联原文：[[Chp7+Magneti Field#二、安培环路定律]]

**9. 什么是斯托克斯定理？它与散度定理有何区别？**
**参考答案：** 斯托克斯定理：$\oint \mathbf{H} \cdot d\mathbf{L} = \int_S (\nabla \times \mathbf{H}) \cdot d\mathbf{S}$，将闭合路径的线积分转化为曲面积分。散度定理将闭合曲面的面积分转化为体积分，而斯托克斯定理将闭合路径的线积分转化为曲面积分。
关联原文：[[Chp7+Magneti Field#四、斯托克斯定理]]


---

# 一、运动电荷的受力

## 洛伦兹力定律

电荷在电磁场中受到的总力为：

$$\mathbf{F} = \mathbf{F}_e + \mathbf{F}_m = Q\mathbf{E} + Q(\mathbf{v} \times \mathbf{B})$$

这就是**洛伦兹力定律**（Lorentz Force Law），有时被称为"第五个麦克斯韦方程"。

**电场力 $\mathbf{F}_e$：** 沿电场方向（正电荷）
**磁场力 $\mathbf{F}_m$：** 垂直于速度 $\mathbf{v}$ 和磁通密度 $\mathbf{B}$（右手定则）

磁场力的大小：

$$F_m = |Q|vB\sin\theta$$

其中 $\theta$ 为 $\mathbf{v}$ 与 $\mathbf{B}$ 之间的夹角（$< 180^\circ$）。

**重要结论：** 静止电荷或平行于磁场运动的电荷不受磁场力。

当电场和磁场同时存在时，电场使电荷加速从而与磁场线垂直交叉，产生垂直于纸面的磁场力分量。

# 二、微分电流元受力

## 体电流

微分电流元 $Id\mathbf{L}$ 在磁场 $\mathbf{B}$ 中受到的力：

$$d\mathbf{F} = Id\mathbf{L} \times \mathbf{B}$$

对于体电流密度 $\mathbf{J}$：$Id\mathbf{L} = \mathbf{J} dv$

$$d\mathbf{F} = \mathbf{J} \times \mathbf{B} \, dv$$

对于面电流密度 $\mathbf{K}$：$Id\mathbf{L} = \mathbf{K} dS$

$$d\mathbf{F} = \mathbf{K} \times \mathbf{B} \, dS$$

## 总力

对体电流或面电流积分求总力：

$$\mathbf{F} = \int_{\text{vol}} \mathbf{J} \times \mathbf{B} \, dv, \quad \mathbf{F} = \int_S \mathbf{K} \times \mathbf{B} \, dS$$

对线电流（闭合回路）：

$$\mathbf{F} = \oint I \, d\mathbf{L} \times \mathbf{B}$$

对于均匀磁场中的直导线（长度 $L$，电流 $I$）：

$$\mathbf{F} = I\mathbf{L} \times \mathbf{B}$$

# 三、闭合回路受力与直流电机

闭合载流回路在磁场中受到的总力可由上述公式积分求得。这是**直流电机（DC Motor）**的基本原理：载流线圈在磁场中受到力矩而转动。

# 四、磁性材料的性质

## 原子磁矩

磁性材料按原子磁矩的配置和相互作用分类。原子磁矩的来源包括：

- **电子轨道运动**（$m_{\text{orb}}$）
- **电子自旋**（$m_{\text{spin}}$）
- 原子核自旋（贡献较小）

总磁矩为轨道磁矩和自旋磁矩的矢量和。

## 顺磁性与反磁性

**顺磁性：** 原子具有净磁矩，在外磁场中趋于定向排列，磁化方向与磁场同向。
**反磁性：** 轨道电子在外磁场中产生感应磁矩，方向与外磁场相反。

## 铁磁性

铁磁性材料具有较强的原子磁矩，相邻分子的磁矩通过相互作用在小区域（**磁畴**，domain）内部分对齐。

无外磁场时，各磁畴磁矩取向随机，总磁矩为零。
施加外磁场 $\mathbf{B}_0$ 后，与外磁场方向接近的磁畴生长，产生显著的磁通密度增强。

**铁磁性元素：** 铁（Fe）、镍（Ni）、钴（Co）（室温）；钆（Gd）、镝（Dy）（低温）。

# 五、磁化与磁导率

## 磁偶极子集合

束缚电流 $I_b$ 环绕微分面积 $d\mathbf{S}$，产生磁矩：

$$d\mathbf{m} = I_b \, d\mathbf{S}$$

总磁矩为每个偶极子的矢量和：

$$\mathbf{m}_{\text{total}} = \sum_{i=1}^{n\Delta v} \mathbf{m}_i$$

## 磁化强度

**磁化强度 $\mathbf{M}$** 定义为单位体积的磁偶极矩：

$$\mathbf{M} = \lim_{\Delta v \to 0} \frac{1}{\Delta v} \sum_{i=1}^{n\Delta v} \mathbf{m}_i$$

单位：$\text{A/m}$（与 $\mathbf{H}$ 相同）。

若所有偶极子相同且同向：$\mathbf{M} = n\mathbf{m}$

## 束缚电流

磁偶极子排列产生束缚电流（magnetization current 或 bound current）。

沿微分长度 $d\mathbf{L}$ 的束缚电流为：

$$dI_b = \mathbf{M} \cdot d\mathbf{L}$$

体束缚电流密度：$\mathbf{J}_b = \nabla \times \mathbf{M}$
面束缚电流密度：$\mathbf{K}_b = \mathbf{M} \times \mathbf{a}_n$

## 磁场强度与磁化

在磁性材料中，磁通密度 $\mathbf{B}$、磁场强度 $\mathbf{H}$ 和磁化强度 $\mathbf{M}$ 的关系为：

$$\mathbf{B} = \mu_0(\mathbf{H} + \mathbf{M})$$

对各向同性线性介质：

$$\mathbf{M} = \chi_m \mathbf{H}$$

其中 $\chi_m$ 为磁化率。

$$\mathbf{B} = \mu_0(1 + \chi_m)\mathbf{H} = \mu_0\mu_r \mathbf{H} = \mu \mathbf{H}$$

其中 $\mu_r = 1 + \chi_m$ 为相对磁导率。

---

# 学习自测

## 一、单选题

**1. 洛伦兹力定律中，磁场力 $\mathbf{F}_m$ 的方向？**
A. 沿电场方向
B. 垂直于 $\mathbf{v}$ 和 $\mathbf{B}$
C. 沿速度方向
D. 沿磁场方向

**答案：** B
**解析：** $\mathbf{F}_m = Q(\mathbf{v} \times \mathbf{B})$，方向垂直于 $\mathbf{v}$ 和 $\mathbf{B}$ 所在平面。
关联原文：[[Chp8 Magnetic Materials 2023-lxl#洛伦兹力定律]]

**2. 磁场力的大小 $F_m = qvB\sin\theta$ 中，$\theta$ 是什么？**
A. $\mathbf{v}$ 与 $\mathbf{F}$ 的夹角
B. $\mathbf{v}$ 与 $\mathbf{B}$ 的夹角
C. $\mathbf{L}$ 与 $\mathbf{B}$ 的夹角
D. $\mathbf{E}$ 与 $\mathbf{B}$ 的夹角

**答案：** B
**解析：** $\theta$ 为速度 $\mathbf{v}$ 与磁通密度 $\mathbf{B}$ 之间的夹角。
关联原文：[[Chp8 Magnetic Materials 2023-lxl#洛伦兹力定律]]

**3. 磁化强度 $\mathbf{M}$ 的单位是？**
A. A/m
B. T
C. Wb/m
D. H/m

**答案：** A
**解析：** 磁化强度 $\mathbf{M}$ 的单位是 $\text{A/m}$，与 $\mathbf{H}$ 相同。
关联原文：[[Chp8 Magnetic Materials 2023-lxl#磁化强度]]

**4. 铁磁性材料在无外磁场时？**
A. 具有强磁性
B. 磁畴取向随机，总磁矩为零
C. 所有原子磁矩完全对齐
D. 磁畴不存在

**答案：** B
**解析：** 铁磁性材料内部磁畴磁矩随机取向，无外磁场时总磁矩为零。
关联原文：[[Chp8 Magnetic Materials 2023-lxl#铁磁性]]

## 二、多选题

**5. 铁磁性元素包括？**
A. 铁（Fe）
B. 镍（Ni）
C. 钴（Co）
D. 铜（Cu）

**答案：** A、B、C
**解析：** 铁、镍、钴是室温下的铁磁性元素。铜是非铁磁性材料。
关联原文：[[Chp8 Magnetic Materials 2023-lxl#铁磁性]]

**6. $\mathbf{B} = \mu_0(\mathbf{H} + \mathbf{M})$ 中各量的含义是？**
A. $\mathbf{B}$ 为磁通密度
B. $\mathbf{H}$ 为磁场强度
C. $\mathbf{M}$ 为磁化强度
D. $\mathbf{M}$ 为磁导率

**答案：** A、B、C
**解析：** $\mathbf{B} = \mu_0(\mathbf{H} + \mathbf{M})$ 是磁性材料中三个磁场量的关系式。
关联原文：[[Chp8 Magnetic Materials 2023-lxl#磁场强度与磁化]]

## 三、判断题

**7. 静止电荷在磁场中会受到磁场力。**
**答案：** 错误
**解析：** 磁场力 $\mathbf{F}_m = Q(\mathbf{v} \times \mathbf{B})$，只有当电荷运动（$v \neq 0$）时才不为零。
关联原文：[[Chp8 Magnetic Materials 2023-lxl#洛伦兹力定律]]

**8. 顺磁性材料的磁化方向与外磁场方向相反。**
**答案：** 错误
**解析：** 顺磁性材料的磁化方向与外磁场方向相同。反磁性材料的磁化方向才与外磁场方向相反。
关联原文：[[Chp8 Magnetic Materials 2023-lxl#顺磁性与反磁性]]

## 四、简答题

**9. 简述铁磁性材料的特点。**
**参考答案：** 铁磁性材料具有较强原子磁矩，相邻分子相互作用形成磁畴。无外场时磁畴取向随机，总磁矩为零。有外场时磁畴沿外场方向对齐，产生显著磁化。典型铁磁性元素有 Fe、Ni、Co。
关联原文：[[Chp8 Magnetic Materials 2023-lxl#四、磁性材料的性质]]

**10. 写出 $\mathbf{B}$、$\mathbf{H}$、$\mathbf{M}$ 之间的关系，并说明各量的意义。**
**参考答案：** $\mathbf{B} = \mu_0(\mathbf{H} + \mathbf{M})$，其中 $\mathbf{B}$ 为磁通密度，$\mathbf{H}$ 为磁场强度，$\mathbf{M}$ 为磁化强度，$\mu_0$ 为真空磁导率。对于线性各向同性介质，$\mathbf{M} = \chi_m \mathbf{H}$，$\mathbf{B} = \mu \mathbf{H}$，$\mu = \mu_0(1 + \chi_m) = \mu_0\mu_r$。
关联原文：[[Chp8 Magnetic Materials 2023-lxl#磁场强度与磁化]]


---

