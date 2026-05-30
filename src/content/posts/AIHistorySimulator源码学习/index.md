---
title: AIHistorySimulator源码学习
published: 2026-05-30
description: '咱的第一个vibe coding项目'
image: ''
tags: ['vue3', 'typescript', '算法', '数学']
category: '前端开发'
draft: false 
lang: ''
---
# 前言
最近与以前在推特上认识的朋友玩文游。讲几个外星国家走向宇宙的故事<br>
由于一共有九个人，关系过于复杂，于是乎想着AI推演<br>
但是手动让AI推演太过麻烦，就想着能不能自己做一个交互网页，让推进游戏更简单一点<br>
于是就有了这个项目<br>
# 难点
## 墨卡托投影地图转球面地图
项目的世界生成页面需要实现一个墨卡托投影地图转球面地图的功能<br>
### 我们需要知道的参数
1. 图片
```ts
const pixels = context.createImageData(width, height)
```
2. 画布中心，一个坐标，咱们要把球面中心放在这里
```ts
const centerX = width / 2
const centerY = height / 2
```
3. 球体半径，实践中半径要比画布的长宽最小值小一点
```ts
const radius = Math.min(width, height) * 0.42
```
4. 旋转角，包括左右旋转角（绕y轴旋转，逆时针为正）和俯仰旋转角（绕x轴旋转，逆时针为正）
```ts
const yaw = rotation.value
const pitch = tilt.value
```
其中rotation是全局的经度偏移量，pitch是全局的纬度偏移量
5. 可选的光照方向，让球体更立体。咱的设置如下
```ts
const lightX = -0.35
const lightY = 0.35
const lightZ = 0.87
```
### 将图片映射到球面
对于我们生成的图片pixel，其中的每一个像素都要被映射到球面上对应的位置<br>
首先我们归一化图片，将宽和高映射到$[-1, 1]$区间内<br>
```ts
for (let y = 0; y < height; y += 1) 
  // 将画布 y 坐标归一化到球面坐标系中，值域约为 [-1, 1]。
  const normalizedY = (centerY - y) / radius
  for (let x = 0; x < width; x += 1) 
    // 将画布 x 坐标归一化到球面坐标系中，值域约为 [-1, 1]。
    const normalizedX = (x - centerX) / radius
```
为什么normalizedY和normalizedX的计算方式不一样呢？<br>
我们需要知道canvas和context.createImageData(width, height)的坐标系<br>
[菜鸟教程](https://www.runoob.com/html/html5-canvas.html "菜鸟教程") 告诉我们，canvas的(0, 0)坐标位于左上角<br>
也就是说，canvas的x轴正半轴向右，y轴正半轴向下<br>
然而在球面坐标系中，x轴正半轴向右，而y轴正半轴向上<br>
<br>
接下来，由于球面上所有点同球心的距离都是1，根据勾股定理，我们可以计算出在归一化的球面中，这个像素对应的normalizedZ的值，即$z = \sqrt{1 - x^2 - y^2}$<br>
<br>
下一步是计算旋转<br>
yaw和pitch实际上组成了一个欧拉角<br>
<del>如果是unity我们可以调用一行transform.rotate解决</del><br>
但在这里，我们必须自己计算<br>
这里要用到线性代数的相关知识<br>
yaw的旋转矩阵是
$
Y = 
\begin{bmatrix}
\cos(\text{yaw}) & 0 & \sin(\text{yaw})\\
0 & 1 & 0\\
-\sin(\text{yaw}) & 0 & \cos(\text{yaw})
\end{bmatrix}
$, 而pitch的旋转矩阵是
$
P = 
\begin{bmatrix}
1 & 0 & 0\\
0 & \cos(\text{pitch}) & \sin(\text{pitch})\\
0 & -\sin(\text{pitch}) & \cos(\text{pitch})
\end{bmatrix}
$
<br>
为了达到我们想要的效果，咱们先做pitch旋转，再做yaw旋转<br>
即
$$
% 先做 pitch（绕 x 轴旋转）
\begin{bmatrix}
x_1\\
y_1\\
z_1
\end{bmatrix}
=
\begin{bmatrix}
1 & 0 & 0\\
0 & \cos(\text{pitch}) & -\sin(\text{pitch})\\
0 & \sin(\text{pitch}) & \cos(\text{pitch})
\end{bmatrix}
\begin{bmatrix}
x_n\\
y_n\\
z_n
\end{bmatrix}
=
\begin{bmatrix}
x_n\\
y_n\cos(\text{pitch}) - z_n\sin(\text{pitch})\\
y_n\sin(\text{pitch}) + z_n\cos(\text{pitch})
\end{bmatrix}
$$
$$
% 再做 yaw（绕 y 轴旋转）
\begin{bmatrix}
x_r\\
y_r\\
z_r
\end{bmatrix}
=
\begin{bmatrix}
\cos(\text{yaw}) & 0 & \sin(\text{yaw})\\
0 & 1 & 0\\
-\sin(\text{yaw}) & 0 & \cos(\text{yaw})
\end{bmatrix}
\begin{bmatrix}
x_1\\
y_1\\
z_1
\end{bmatrix}
=
\begin{bmatrix}
x_1\cos(\text{yaw}) + z_1\sin(\text{yaw})\\
y_1\\
-x_1\sin(\text{yaw}) + z_1\cos(\text{yaw})
\end{bmatrix}
$$

旋转代码为
```ts
const rotatedY = normalizedY * cosPitch - normalizedZ * sinPitch
const pitchZ = normalizedY * sinPitch + normalizedZ * cosPitch
const rotatedX = normalizedX * cosYaw + pitchZ * sinYaw
const rotatedZ = -normalizedX * sinYaw + pitchZ * cosYaw
```
其中pitchZ为中间量<br>
<br>
然后我们需要将旋转后的点渲染在球面上<br>
首先获取其经纬度<br>

```ts
const latitude = Math.asin(Math.max(-1, Math.min(1, rotatedY)))
const longitude = Math.atan2(rotatedX, rotatedZ)
```
由于墨卡托投影在接近极点时拉伸严重，故剪裁(但是这会导致极区不被渲染，咱也没有什么比较好的解决方案)
```ts
// Mercator 投影对纬度做上限裁剪，避免极区无限拉伸。
const clampedLatitude = Math.max(
  -maxMercatorLatitude,
  Math.min(maxMercatorLatitude, latitude),
)
```
![墨卡托投影在球面上的y值计算公式](古德曼函数逆推导.svg)
这个图必须调成白天模式才能看见www<br>
根据古德曼函数的逆推导，咱们可以计算出y<br>
```ts
const mercatorY = 0.5 - Math.log(Math.tan(Math.PI / 4 + clampedLatitude / 2)) / (2 * Math.PI)
```
这样我们就有了所有用于渲染纹理的数据
```ts
// u/v 分别表示纹理中的水平和垂直位置，范围都在 [0, 1]。
const u = (longitude + Math.PI) / (2 * Math.PI)
const v = clamp01(mercatorY)
```
添加光照，这里我们假设基础亮度为$0.28 + 0.72 \times 0.15$，最大亮度为1
```ts
const brightness =
  0.28 +
  0.72 * Math.max(0.15, normalizedX * lightX + normalizedY * lightY + normalizedZ * lightZ)
```
当前像素在pixels中的起始下标。createImageData函数返回一个图片数组。其中第$4x-4$、$4x-3$、$4x-2$、$4x-1$位分别表示第x个像素的rgba值，
```ts
const pixelIndex = (y * width + x) * 4
```
对纹理进行采样
```ts
// 纹理采样坐标：减去 0.5 可以让采样落在像素中心，而不是像素边缘。
const sampleX = u * globeTextureWidth - 0.5
const sampleY = v * globeTextureHeight - 0.5// 分别采样纹理的 R/G/B 通道，用于还原原始地图颜色。

const sampleR = sampleTextureChannel(
  globeTextureData,
  globeTextureWidth,
  globeTextureHeight,
  sampleX,
  sampleY,
  0,
)
const sampleG = sampleTextureChannel(
  globeTextureData,
  globeTextureWidth,
  globeTextureHeight,
  sampleX,
  sampleY,
  1,
)
const sampleB = sampleTextureChannel(
  globeTextureData,
  globeTextureWidth,
  globeTextureHeight,
  sampleX,
  sampleY,
  2,
)
```
这样我们就完成了一个简易的图片渲染器

## 陆地识别
公理：一个像素，如果不是海洋，它就是陆地<br>
我们可以预先生成陆地的掩码<br>
在watch()中添加
```ts
const prepared = await prepareGlobeTexture(src)
if (!prepared) {
  return
}
```
prepareGlobeTexture的代码
```ts
const prepareGlobeTexture = async (src: string) => {
  // 增加一个 render token 用于取消旧的异步加载任务（防止竞态）
  const renderToken = ++globeRenderToken

  try {
    // 1) 加载图片资源（DataURL 或外部 URL）
    //    loadImageElement 返回在图片加载成功时解析的 HTMLImageElement。
    const image = await loadImageElement(src)

    // 2) 检查 renderToken：如果在等待期间另一次渲染请求已启动，则放弃本次结果
    if (renderToken !== globeRenderToken) {
      return false
    }

    // 3) 获取图片像素尺寸，用于创建与图片等尺寸的离屏画布
    const sourceWidth = image.naturalWidth || image.width
    const sourceHeight = image.naturalHeight || image.height

    if (!sourceWidth || !sourceHeight) {
      return false
    }

    // 4) 准备离屏 canvas（复用以减少频繁创建）
    if (!globeTextureCanvas) {
      globeTextureCanvas = document.createElement('canvas')
    }

    globeTextureCanvas.width = sourceWidth
    globeTextureCanvas.height = sourceHeight

    // 5) 获取 2D 上下文（将 willReadFrequently 设置为 true 以优化 readPixel 场景）
    const sourceContext = globeTextureCanvas.getContext('2d', { willReadFrequently: true })
    if (!sourceContext) {
      return false
    }

    // 6) 将图片绘制到离屏画布，并读取像素数据用于后续采样
    sourceContext.drawImage(image, 0, 0, sourceWidth, sourceHeight)
    globeTextureData = sourceContext.getImageData(0, 0, sourceWidth, sourceHeight).data
    globeTextureWidth = sourceWidth
    globeTextureHeight = sourceHeight

    // 7) 尝试基于纹理颜色在客户端生成陆地掩码（提高渲染时的判定性能）
    //    若生成失败则保留 globeLandMask 为 null，渲染时退回到按颜色判断。
    globeLandMask = null
    try {
      generateLandMaskClient()
    } catch (err) {
      console.error('客户端生成陆地掩码失败', err)
      globeLandMask = null
    }

    return true
  } catch (error) {
    console.error('Failed to prepare globe texture', error)
    return false
  }
}
```
在加载完成后我们调用generateLandMaskClient()，用第六步中保存的globeTextureData生成陆地掩码
```ts
const generateLandMaskClient = () => {
  if (!globeTextureData || !globeTextureWidth || !globeTextureHeight) return

  const w = globeTextureWidth
  const h = globeTextureHeight
  const mask = new Uint8Array(w * h)

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4
      const r = globeTextureData[idx] ?? 0
      const g = globeTextureData[idx + 1] ?? 0
      const b = globeTextureData[idx + 2] ?? 0
      const a = globeTextureData[idx + 3] ?? 255
      mask[y * w + x] = sampleIsLand(r, g, b, a) ? 1 : 0
    }
  }

  globeLandMask = mask
}
```
判断是否为陆地的函数，通过检测颜色的b通道值同r, g的关系来判断是否为陆地
```ts
const sampleIsLand = (r: number, g: number, b: number, a = 255) => {
  const alphaThreshold = 10
  if (a <= alphaThreshold) return false
  const blueRatio = 1.1
  const blueMargin = 24
  const maxrg = Math.max(r, g)
  const blueIsDominant = b >= maxrg * blueRatio && b >= maxrg + blueMargin
  return !blueIsDominant
}
```
## 国土记录
## 与模型提供商通信
## 存档
