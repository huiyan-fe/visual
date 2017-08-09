# visual

## 简介

欢迎来到Visual的世界，Visual是一款基于canvas的可视化**底层工具**，支持点、线、面、文字多边形的拖拽，选取等操作。

可以通过简单的Demo了解什么是Visual [Visual Demo](https://huiyan-fe.github.io/visual/demo/index.v.1.0.1.html)


## API

### 1. Visual(dmo)

* **dom** `[HTMLDocument]` 指定Visual的父元素

想要初始化Visual,可以通过`new Visual(dom)`来进行

例如：

```javascirpt
let dom = document.getElementById('content');
let visual = new Visual(dom);
```

### 2. Visual Object

#### 2.1 line(path, config)

* **path** `[Array]` 线段的关键点
* **config** `[Object]` 相关配置，通用配置请查阅配置说明 [config](#24-config)

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

* **text** `[String]` 绘制的文本坐标
* **point** `[Array]` 绘制的文字的起始点
* **config** `[Object]` 相关配置，通用配置请查阅配置说明 [config](#24-config)
* **config.rotate** `[Number]` 文本的旋转角度
* **config.splitText** `[Boole]` 文字是否单独绘制
* **config.textRotate** `[Boole]` 单个文字的旋转角度

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

#### 2.4 config