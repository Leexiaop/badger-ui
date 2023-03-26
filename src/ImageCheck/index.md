---
title: 图片校验
nav:
    title: 图片校验
    path: /components
---

## 代码演示

### 基础版

```tsx
/**
 * title: 基础用法
 * desc: 只需要传入一个list数组即可。
 */
import React from 'react';
import { ImageCheck } from 'badger-ui';

export default () => {
	return <ImageCheck />;
};
```

### 插槽版

## API

通过设置不同的属性可以实现 Captions 为不同的样式滚动字幕的属性说明如下：

| 属性         | 说明                   | 类型     | 默认值         | 可选值 | 是否必须 | 备注 |
| :----------- | ---------------------- | :------- | :------------- | :----- | :------- | :--- |
| list         | 滚动字幕文字列表       | Array    | []             | 无     | 是       |      |
| speed        | 字幕滚动的速度         | Number   | 2              | 无     | 否       |      |
| color        | 字幕的颜色             | String   | #1a88e7        | 无     | 否       |      |
| textStyle    | 字幕的样式             | Object   | {}             | 无     | 否       |      |
| isStop       | 鼠标放到字幕上是否停止 | Boolean  | false          | true   | 否       |      |
| onMouseOver  | 鼠标移入字幕触发       | Function | (index)=> void | -      | -        |      |
| onMouseLeave | 鼠标移出字幕触发       | Function | (index)=> void | -      | -        |      |
| onCilck      | 点击字幕触发           | Function | (index)=> void | -      | -        |      |

## 源码

```js

```

更多问题请联系： <br />
<img src="http://ibadgers.cn/images/wechat.jpeg" width="260" />
