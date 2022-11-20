---
title: 滚动字幕
nav:
    title: 滚动字幕
    path: /components
---

## 代码演示

### 基础版

```tsx
import React from 'react';
import { Subtitle } from 'badger-ui';

export default () => <Subtitle list={['我就是我，我是世界的唯一']} />;
```

## API

通过设置不同的属性可以实现 Subtitle 为不同的样式滚动字幕的属性说明如下：

| 属性         | 说明                     | 类型     | 默认值         | 可选值   | 是否必须 | 备注                  |
| :----------- | ------------------------ | :------- | :------------- | :------- | :------- | :-------------------- |
| list         | 滚动字幕文字列表         | Array    | []             | 无       | 是       |                       |
| direction    | 字幕滚动的方式           | String   | horizontal     | vertical | 否       |                       |
| speed        | 字幕滚动的速度           | Number   | 2              | 无       | 否       |                       |
| mode         | 字幕滚动的模式           | String   | normal         | ktv      | 否       |                       |
| animateColor | ktv 模式下的渐变字幕颜色 | String   | normal         | 无       | 否       | 需要在 ktv 模式下生效 |
| color        | 字幕的颜色               | String   | #1a88e7        | 无       | 否       |                       |
| textStyle    | 字幕的样式               | Object   | {}             | 无       | 否       |                       |
| isAnimation  | 字幕是否滚动             | Boolean  | true           | false    | 否       |                       |
| isStop       | 鼠标放到字幕上是否停止   | Boolean  | false          | true     | 否       |                       |
| onMouseOver  | 点击字幕触发             | Function | (index)=> void | -        | -        |                       |
| onMouseLeave | 点击字幕触发             | Function | (index)=> void | -        | -        |                       |

更多问题请联系： <br /> <img src="/images/wechat.jpeg" width="260" />
