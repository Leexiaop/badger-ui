---
title: vue2生命周期
---

vue 的生命周期经过：

beforeCreate 是 new Vue(),之后触发的第一个钩子，在当前阶段 data,methods,computed
以及 watch 上的数据和方法都不能被访问

created 在实例创建完成后发生，当前阶段已经完成了数据观测，也就是可以使用数据了，
更新数了，在这里更新数据不会出发 updated 函数，可以做一些初始数据的获取，在当前
阶段无法和 dom 进行交互，如果非要想，可以通过 nextTick 来访问 dom

beforeMount 发生在挂载之前，在这之前 template 模版已导入渲染函数编译，而当前阶段
虚拟 dom 已经创建完成，即将开始渲染，在此也可以对数据进行更新，不会出发 updated

mounted 在挂在完成之后发生，在当前阶段，正式 dom 挂载完毕，数据完成双向绑定，可
以访问到 dom 节点，使用$ref 属性对 dom 操作

beforeUpdate 发生在更新之前，也就是响应式数据发生更新虚拟 dom 重新渲染之前被触发
，可以在当前阶段更改数据，不会造成重复渲染

updated 发生在更新完成之后，当前阶段组件 dom 已经完成更新，要注意的是避免在此期
间更新数据，因为可能会导致无限循环的更新

beforeDestory 发生在实例销毁之前，在当前阶段实例完全可以被使用，我们可以在这时进
行善后收尾工作，比如清楚定时器

destroyed 发生在实例销毁阶段，这个时候只剩下 dom 空壳，组件被拆解，数据绑定被卸
载，监听被移除，子实例也统统被销毁
