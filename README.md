# visual

## 简介

欢迎来到Visual的世界，Visual是一款基于canvas的可视化**底层工具**，支持点、线、面、文字多边形的拖拽，选取等操作。

可以通过简单的Demo了解什么是Visual [Visual Demo](https://huiyan-fe.github.io/visual/demo/index.v.1.0.1.html)


## API

### 1. Visual(dmo)

|参数|类型|说明|
|:---|:---|:---|
| **dom** | `HTMLDocument` | 指定Visual的父元素 |

想要初始化Visual,可以通过`new Visual(dom)`来进行

例如：

```javascirpt
let dom = document.getElementById('content');
let visual = new Visual(dom);
```

### 2. Visual Object

#### 2.1 line(path, config)

|参数|类型|说明|
|:---|:---|:---|
| **path** | `Array` | 线段的关键点
| **config** | `Object` | 相关配置，通用配置请查阅配置说明 [config](#24-config)

line方法用来创建一条可以编辑的直线或者折线。

例如：

```javascirpt
visual.line([
	[85, 86],
	[85, 89],
	[85, 104],
	[139, 85],
], {
	strokeStyle: '#4df693',
	lineWidth: 20,
});
```

#### 2.2 text(text, point, config)

|参数|类型|说明|
|:---|:---|:---|
| **text** | `String` | 绘制的文本坐标
| **point** | `Array` | 绘制的文字的起始点
| **config** | `Object` | 相关配置，通用配置请查阅配置说明 [config](#24-config)
| **config.rotate** | `Number` | 文本的旋转角度
| **config.splitText** | `Boole` | 文字是否单独绘制，如果为true的情况下，系统自动绘制每一个单独的文字，此时，每个文字的初始旋转角度0°为正上方
| **config.textRotate** | `Number` | 单个文字的旋转角度

text用来绘制文本

```javascipt
let text = visual.text('Hello Mofei', [200, 400], {
	fontSize: 24,
	rotate: Math.PI * .25,
	splitText: true,
	textRotate: Math.PI * .25
})
```

#### 2.3 circle(redis, center, config)

|参数|类型|说明|
|:---|:---|:---|
| **redis** | `Number` | 圆的半径
| **center** | `Array` | 圆的中心点
| **config** | `Object` | 相关配置，通用配置请查阅配置说明 [config](#24-config)
| **config.border** | `Boole` | 是否绘制圆的边框

```javascript
 visual.circle(10, [200, 100], {
    fillStyle: 'yellow',
    strokeStyle: 'skyblue',
    lineWidth: 5,
    border: true
})
```

#### 2.4 config

|参数|类型|说明|
|:---|:---|:---|
| **config.fontSize** | `Number` | 文字大小默认12
| **config.textBaseline** | `String` | 文字的Baseline对齐方式 默认`alphabetic`
| **config.textAlign** | `String` | 文字的左右对齐方式 默认`left`
| **config.fillStyle** | `String` | 图形填充样式
| **config.strokeStyle** | `String` | 图形描边样式
| **config.lineWidth** | `Number` | 线宽


### 3. Visual Event

大部分的Visual Object都有事件监听，可以通过Visual Object.on('type', Function) 来监听。

#### 3.1 'change'

当Visual Object发生变化时，会触发该事件，Function中的接收一个Object参数，其通用字段如下：

|参数|类型|值|说明|
|:---|:---|:---|:---|
|object|Visual Object| - |当前移动的对象

#### 3.1.1 change for line[Object]

line类型的change事件返回以下参数:

|参数|类型|值|说明|
|:---|:---|:---|:---|
|type|String|'point'\|'line' | point:拖拽点的时候返回 <br/> line:移动整条线的时候返回
|index|Number| - | 移动点的时候返回点的索引号

#### 3.2 'finish'

当Visual Object变化结束（通常情况下为拖拽鼠标之后松开），会触发该事件，Function中的接收一个Object参数，其通用字段如下：


|参数|类型|值|说明|
|:---|:---|:---|:---|
|object|Visual Object| - |当前移动的对象