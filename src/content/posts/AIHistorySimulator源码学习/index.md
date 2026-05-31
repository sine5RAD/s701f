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
这样我们就完成了一个简易的图片渲染器<br>
接下来是鼠标交互，我们可以用unity中学来的经验
```ts
// 鼠标/触控拖拽交互：更新 rotation 并重渲染
const onPointerDown = (e: PointerEvent) => {
  // 编辑模式：左键（或触控）放置图钉，右键继续拖拽地图
  if (isEditingLand.value) {
    if (!globeCanvas.value) return

    if (e.pointerType !== 'touch' && e.button === 2) {
      isDragging.value = true
      dragStartX.value = e.clientX
      dragStartY.value = e.clientY
      startRotation.value = rotation.value
      startTilt.value = tilt.value
      activePointerId.value = e.pointerId

      try {
        globeCanvas.value.setPointerCapture(e.pointerId)
      } catch {
        // ignore
      }
      return
    }

    if (e.pointerType !== 'touch' && e.button !== 0) return
    onCanvasPlacePin(e.clientX, e.clientY)
    return
  }

  // 非编辑模式：仅响应右键或触控开始拖拽（将左键保留给编辑）
  if (e.pointerType !== 'touch' && e.button !== 2) return

  if (!globeCanvas.value) return

  isDragging.value = true
  dragStartX.value = e.clientX
  dragStartY.value = e.clientY
  startRotation.value = rotation.value
  startTilt.value = tilt.value
  activePointerId.value = e.pointerId

  try {
    globeCanvas.value.setPointerCapture(e.pointerId)
  } catch {
    // ignore
  }
}
```

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
现在我们可以在地图上染色了，具体代码也在renderWorldGlobe()函数里
```ts
// isLand 表示当前纹理点是否属于陆地；优先使用预计算掩码提高性能。
let isLand = false
if (globeLandMask && globeTextureWidth > 0 && globeTextureHeight > 0) {
  // 将采样位置映射到掩码网格中，和纹理坐标保持一致。
  const tx = wrapTextureX(Math.floor(u * globeTextureWidth), globeTextureWidth)
  const ty = clampTextureY(Math.floor(v * globeTextureHeight), globeTextureHeight)
  isLand = !!globeLandMask[ty * globeTextureWidth + tx]
} else {
  // 掩码不可用时，回退到按颜色判断是否为陆地。
  isLand = sampleIsLand(Math.round(sampleR), Math.round(sampleG), Math.round(sampleB), 255)
}
// baseR/baseG/baseB 是经过光照修正后的底色。
const baseR = Math.round(sampleR * brightness)
const baseG = Math.round(sampleG * brightness)
const baseB = Math.round(sampleB * brightness)
if (isLand) {
  // 陆地区域再叠加一层半透明黄色，增强地表区域的辨识度。
  const overlayR = LAND_OVERLAY_R
  const overlayG = LAND_OVERLAY_G
  const overlayB = LAND_OVERLAY_B
  // 通过原底色与叠加色混合，得到最终显示颜色。
  data[pixelIndex] = Math.round(
    baseR * (1 - LAND_OVERLAY_ALPHA) + overlayR * LAND_OVERLAY_ALPHA,
  )
  data[pixelIndex + 1] = Math.round(
    baseG * (1 - LAND_OVERLAY_ALPHA) + overlayG * LAND_OVERLAY_ALPHA,
  )
  data[pixelIndex + 2] = Math.round(
    baseB * (1 - LAND_OVERLAY_ALPHA) + overlayB * LAND_OVERLAY_ALPHA,
  )
  data[pixelIndex + 3] = alpha
} else {
  // 海洋区域只保留原始底色与光照效果。
  data[pixelIndex] = baseR
  data[pixelIndex + 1] = baseG
  data[pixelIndex + 2] = baseB
  data[pixelIndex + 3] = alpha
}
```
## 编辑领土
然后我们需要记录给每个国家分配的国土<br>
咱的思路是顺时针在地图上摆放图钉，围起来的地方就是领土<br>
所以领土的数据类包含一个数组，数组的每个元素都是一个坐标数组<br>
其中sx，sy是画布内部坐标，u，v是纹理坐标<br>
canvasPixelToUV是将屏幕坐标映射到纹理坐标的函数
```ts
const onCanvasPlacePin = (clientX: number, clientY: number) => {
  const canvas = globeCanvas.value
  if (!canvas) return
  const rect = canvas.getBoundingClientRect()
  const sx = Math.round(clientX - rect.left)
  const sy = Math.round(clientY - rect.top)
  const uv = canvasPixelToUV(sx, sy)
  if (!uv) return

  // 如果点击靠近第一个图钉，则认为关闭多边形并尝试保存
  if (editingPins.value.length > 0) {
    const first = editingPins.value[0]
    if (first) {
      const canvasEl = globeCanvas.value
      if (canvasEl) {
        const firstScreen = uvToScreen(first.u, first.v, canvasEl)
        const dx = sx - firstScreen.sx
        const dy = sy - firstScreen.sy
        const dist2 = dx * dx + dy * dy
        if (dist2 < 20 * 20) {
          // 结束编辑
          finishEditingPolygon()
          return
        }
      }
    }
  }

  // 存储 uv 即可，屏幕坐标在渲染时实时计算
  editingPins.value.push({ u: uv.u, v: uv.v, sx, sy })
  scheduleRenderWorldGlobe()
}
```
其中editingPins是
```ts
const editingPins = ref<{ u: number; v: number; sx: number; sy: number }[]>([])
```
在选择地块时我们需要渲染图钉<br>
```ts
// 绘制当前正在编辑的图钉与连线（编辑态预览）
if (isEditingLand.value && editingPins.value.length) {
  context.save() // 保存样式状态（随后 restore）
  // 使用强调色与较粗线条让编辑内容显眼
  context.strokeStyle = 'rgba(40,120,240,0.95)'
  context.fillStyle = 'rgba(40,120,240,0.95)'
  context.lineWidth = 2
  // 绘制连线：依次连接每个图钉的当前屏幕位置
  context.beginPath()
  for (let i = 0; i < editingPins.value.length; i++) {
    const p = editingPins.value[i]
    if (!p) continue
    // 优先根据当前画布与投影计算屏幕坐标，若 canvas 不可用则回退到保存的快照坐标
    const { sx: px, sy: py } = globeCanvas.value
      ? uvToScreen(p.u, p.v, globeCanvas.value)
      : { sx: p.sx, sy: p.sy }
    if (i === 0)
      context.moveTo(px, py) // 起点
    else context.lineTo(px, py) // 连接线段
  }
  context.stroke() // 绘制多边形预览的轮廓线
  // 绘制每个图钉的控制点圆点，便于手动拖拽/删除
  for (const p of editingPins.value) {
    const { sx: px, sy: py } = globeCanvas.value
      ? uvToScreen(p.u, p.v, globeCanvas.value)
      : { sx: p.sx, sy: p.sy }
    context.beginPath()
    context.arc(px, py, 6, 0, Math.PI * 2) // 固定半径的圆点标记
    context.fill() // 使用与连线相同的填充色
  }
  context.restore() // 恢复到此前保存的画布样式
}
```
然后我们把选中的地块染色<br>
依然在renderWorldGlobe()函数里
```ts
// 选中国家名称（如果存在），用于在渲染时高亮对应区域。
const selCountryName = currentCountry.value?.国家名称?.trim() || ''
// 若没有任何国家数据则跳过绘制区域的流程，避免不必要的 canvas 操作。
if (landMap.value && Object.keys(landMap.value).length) {
  context.save() // 保存画布状态，绘制后使用 restore 恢复
  context.lineWidth = 1.5 // 默认描边宽度（会针对选中状态作调整）
  // 遍历每个国家及其地块
  for (const [countryName, land] of Object.entries(landMap.value)) {
    if (!land || !land.areas) continue // 跳过无效数据
    const isSelected = countryName === selCountryName // 标记是否为被选中国家
    const countryColor = getCountryColor(countryName) // 获取该国的主题颜色
    for (const area of land.areas) {
      if (!area || !area.vertices || !area.vertices.length) continue // 忽略空区域
      // 将每个顶点从纹理坐标 (u,v) 转换为经过视角旋转的平面坐标
      const rotatedPoints = area.vertices
        .filter((vert): vert is [number, number] => !!vert)
        .map(([u, v]) => uvToRotatedPoint(u, v))
      // 对多边形边界做插值平滑，减少锯齿状直线感
      const curvedPoints = buildCurvedPolygonPoints(rotatedPoints, 16)
      // 裁剪到当前可见半球，只绘制朝向用户的片段
      const clippedPoints = clipPolygonToFrontHemisphere(curvedPoints)
      if (clippedPoints.length < 3) continue // 不足 3 个点无法构成多边形
      // 计算画布中心与投影半径，用于将旋转坐标映射回屏幕坐标
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = Math.min(canvas.width, canvas.height) * 0.42
      context.beginPath()
      // 将裁剪后的每个点转换为屏幕坐标并绘制路径
      for (let i = 0; i < clippedPoints.length; i += 1) {
        const point = clippedPoints[i]
        if (!point) continue
        const sx = centerX + point.x * radius // x 投影：中心偏移 + 单位坐标 * 半径
        const sy = centerY - point.y * radius // y 投影：注意画布 y 方向与数学坐标相反
        if (i === 0) {
          context.moveTo(sx, sy) // 起点
        } else {
          context.lineTo(sx, sy) // 连续线段
        }
      }
      context.closePath() // 封闭路径，准备填充与描边
      // 根据是否为选中状态选择不同的填充与描边透明度与粗细
      context.fillStyle = isSelected
        ? withColorAlpha(countryColor, 0.22)
        : withColorAlpha(countryColor, 0.2)
      context.strokeStyle = isSelected
        ? withColorAlpha(countryColor, 0.95)
        : withColorAlpha(countryColor, 0.65)
      context.lineWidth = isSelected ? 2 : 1
      context.fill() // 绘制填充
      context.stroke() // 绘制边框
    }
  }
  context.restore() // 恢复画布状态，避免影响后续绘制样式
}
```
clipPolygonToFrontHemisphere函数如下：
```ts
// 将多边形裁剪到前半球（z >= 0），并在被地平线切割的边界处沿地平线补齐点，
// 以便渲染出被地平线遮挡部分的可视化边界（例如闭合的海平线片段）。
const clipPolygonToFrontHemisphere = (points: RotatedPoint[]) => {
  // 至少需要 3 个点才能构成多边形，短路返回空结果
  if (points.length < 3) return [] as RotatedPoint[]

  // 容差值：用于判断点是否在前半球（允许极小的数值误差导致 z 略小于 0）
  const epsilon = 1e-6
  // 在两次地平线交点之间插入的弧段细分数，用于在地平线间补齐曲线（越大越平滑）
  const horizonSegments = 16

  // 判定函数：点是否位于前半球（z >= 0）
  const isInside = (point: RotatedPoint) => point.z >= -epsilon

  /**
   * 在结果数组中添加从 `from` 到 `to` 的地平线弧段点（z = 0）。
   * - 通过 atan2 获得两个点在平面上的角度，沿最短角度差插值生成若干弧段顶点。
   * - 若角度差接近 0（几乎重合），则不插入任何点以避免重复。
   */
  const addHorizonArc = (result: RotatedPoint[], from: RotatedPoint, to: RotatedPoint) => {
    const fromAngle = Math.atan2(from.y, from.x) // 起点角度
    const toAngle = Math.atan2(to.y, to.x) // 终点角度
    let delta = toAngle - fromAngle

    // 将角度差规约到 (-PI, PI]，以便沿最短方向插值
    while (delta <= -Math.PI) delta += Math.PI * 2
    while (delta > Math.PI) delta -= Math.PI * 2

    // 若差值约为 0，则两点方向一致，不需要插入弧段
    if (Math.abs(delta) < 1e-6) {
      return
    }

    // 将弧沿 angle 从 fromAngle 到 toAngle 分割为若干段，并在 z=0 平面上添加单位向量点
    for (let step = 1; step <= horizonSegments; step += 1) {
      const t = step / horizonSegments
      const angle = fromAngle + delta * t
      result.push({ x: Math.cos(angle), y: Math.sin(angle), z: 0 })
    }
  }

  const result: RotatedPoint[] = []
  // 找到第一个位于前半球的顶点作为起点（从该点开始顺时针/逆时针遍历多边形）
  const startIndex = points.findIndex((point) => isInside(point))
  if (startIndex < 0) {
    // 若所有点均在背面，则没有需要绘制的前半球片段
    return result
  }

  const startPoint = points[startIndex]
  if (!startPoint) {
    return result
  }

  // 归一化并添加起点（将可能略微偏离单位球的点投影回单位球表面）
  result.push(normalizeRotatedPoint(startPoint))
  // pendingExit 用来记录上一个从前半球到背半球的交点，当再次进入前半球时用它补齐地平线弧
  let pendingExit: RotatedPoint | null = null

  // 从 startIndex 开始遍历多边形的每条边，使用环绕索引处理闭合边
  for (let offset = 1; offset <= points.length; offset += 1) {
    const currentIndex = (startIndex + offset - 1) % points.length
    const nextIndex = (startIndex + offset) % points.length
    const current = points[currentIndex]
    const next = points[nextIndex]
    if (!current || !next) continue

    const currentInside = isInside(current)
    const nextInside = isInside(next)

    // 情形 A：当前点与下一个点都在前半球 —— 直接将下一个点（归一化）加入结果（除非它是起点）
    if (currentInside && nextInside) {
      if (nextIndex !== startIndex) {
        result.push(normalizeRotatedPoint(next))
      }
      continue
    }

    // 情形 B：当前在前半球，下一个在背半球 —— 边穿过地平线，计算交点并添加到结果，记录为 pendingExit
    if (currentInside && !nextInside) {
      // 线性插值参数 t，按 z 分量解得当前到 next 在 z=0 处的插值比例
      const t = current.z / (current.z - next.z)
      // 在球面上插值后将点投影到地平线（z=0 单位向量）以获得准确的边界点
      const horizonPoint = projectRotatedPointToHorizon(lerpRotatedPoint(current, next, t))
      result.push(horizonPoint)
      pendingExit = horizonPoint
      continue
    }

    // 情形 C：当前在背半球，下一个进入前半球 —— 边从背面进入前半球，需要：
    //  (1) 计算进入点并添加，(2) 如果之前存在 pendingExit（之前的退出点），在二者间插入沿地平线的弧段，
    //  (3) 添加下一个顶点的归一化投影（除非它是起点）。
    if (!currentInside && nextInside) {
      const t = current.z / (current.z - next.z)
      const horizonPoint = projectRotatedPointToHorizon(lerpRotatedPoint(current, next, t))
      if (pendingExit) {
        // 在上一次退出点与本次进入点之间补齐沿地平线的弧段
        addHorizonArc(result, pendingExit, horizonPoint)
      }
      result.push(horizonPoint)
      if (nextIndex !== startIndex) {
        result.push(normalizeRotatedPoint(next))
      }
      pendingExit = null // 已处理完 pendingExit
    }
  }

  return result
}
```
然后就完成了www
## 与模型提供商通信
首先我们需要准备需要的参数:
```ts
const settings = readAiSettingsFromStorage()
const provider = prepared.provider ?? settings?.provider ?? 'OpenAI'
const apiKey = settings?.api ?? ''
const model = prepared.model ?? settings?.model ?? 'gpt-3.5-turbo'
```
以deepseek为例（os：我们需要一个国际标准来统一ai的返回结果）
```ts
// DeepSeek 分支：同样先尝试 OpenAI 兼容 SDK，再回退到官方 REST endpoint。
if (provider === 'DeepSeek') {
  // DeepSeek REST Chat endpoint (assumed). Uses Bearer token in Authorization header.
  // 没有 API Key 时无法请求 DeepSeek，直接返回 null。
  if (!apiKey) {
    console.error('No API key available for DeepSeek')
    return null
  }
  // 优先尝试使用 OpenAI 官方 SDK（DeepSeek 兼容 OpenAI 格式）。
  try {
    // baseURL 指向 DeepSeek 的兼容入口。
    const sdkResult = await callOpenAiCompatibleSdk('https://api.deepseek.com')
    // 如果 SDK 成功返回了非空字符串，直接作为最终结果。
    if (typeof sdkResult === 'string' && sdkResult.length > 0) {
      return sdkResult
    }
  } catch (err) {
    // 如果无法导入 SDK（例如在浏览器中），则使用 fetch 回退。
    console.debug('OpenAI SDK not available, using fetch fallback', err)
  }
  // 官方文档推荐的 DeepSeek OpenAI 兼容 endpoint。
  const endpoint = 'https://api.deepseek.com/chat/completions'

  // REST 回退路径：直接请求 DeepSeek 兼容接口。
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ model, messages: prepared.messages }),
    })

    // 非成功响应时读取服务端错误信息并返回 null。
    if (!res.ok) {
      const text = await res.text()
      console.error('DeepSeek API error', res.status, text)
      return null
    }

    // 正常返回时解析 JSON 并抽取统一文本结果。
    const data = await res.json()
    return extractCompletionText(data)
  } catch (e) {
    // 任何请求失败都在这里收敛，避免向上抛出未处理异常。
    console.error('Failed to call DeepSeek', e)
    return null
  }
  // 对未实现的 provider 给出明确错误，避免静默失败。
  console.error('Provider not implemented:', provider)
  return null
}

```
然后我们需要一个把模型的返回结果转为string类型的函数
```ts
// 将模型返回结果统一提取成文本，避免不同 provider 的响应结构差异影响上层调用。
const extractCompletionText = (data: unknown) => {
  // 非对象数据无法按统一结构解析，直接返回 null。
  if (!data || typeof data !== 'object') {
    return null
  }
  // 以宽松结构接收多种兼容接口返回值，便于处理 OpenAI / DeepSeek / 其他兼容实现。
  const response = data as {
    choices?: Array<{ message?: { content?: unknown }; text?: unknown }>
    output?: unknown
    result?: unknown
  }
  // 优先处理 OpenAI 风格的 choices 数组。
  if (Array.isArray(response.choices) && response.choices.length > 0) {
    // 收集所有 choice 中的文本片段，最后拼接为一个完整回复。
    const parts: string[] = []
    // 遍历每个 choice，兼容 message.content 与 text 两种常见字段。
    for (const choice of response.choices) {
      // 先读 message.content，若没有则回退到 text。
      const content = choice.message?.content ?? choice.text
      // 只收集字符串内容，避免把对象或其他非文本数据混入结果。
      if (typeof content === 'string') {
        parts.push(content)
      }
    }
    // 若至少提取到一个字符串片段，则按换行连接后返回。
    if (parts.length > 0) {
      return parts.join('\n')
    }
  }
  // 兼容某些接口直接返回 output 字段的情况。
  if (typeof response.output === 'string') return response.output
  // 兼容某些接口直接返回 result 字段的情况。
  if (typeof response.result === 'string') return response.result
  // 如果无法识别具体结构，则返回原始 JSON 字符串，至少保留调试信息。
  return JSON.stringify(data)
}
```