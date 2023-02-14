---
title: 生命周期篇之初始化Lifecycle
---

## initLifecycle 函数分析

initLifecycle 函数的定义位于源码的 src/core/instance/lifecycle.js

```js
export function initLifecycle(vm: Component) {
	const options = vm.$options;

	// locate first non-abstract parent
	let parent = options.parent;
	if (parent && !options.abstract) {
		while (parent.$options.abstract && parent.$parent) {
			parent = parent.$parent;
		}
		parent.$children.push(vm);
	}

	vm.$parent = parent;
	vm.$root = parent ? parent.$root : vm;

	vm.$children = [];
	vm.$refs = {};

	vm._watcher = null;
	vm._inactive = null;
	vm._directInactive = false;
	vm._isMounted = false;
	vm._isDestroyed = false;
	vm._isBeingDestroyed = false;
}
```

可以看到，initLifecycle 函数的代码量并不多，逻辑也不复杂。其主要是给 Vue 实例上
挂载了一些属性并设置了默认值，值得一提的是挂载$parent 属性和$root 属性.

首先是给实例上挂载$parent 属性:

```js
let parent = options.parent;
if (parent && !options.abstract) {
	while (parent.$options.abstract && parent.$parent) {
		parent = parent.$parent;
	}
	parent.$children.push(vm);
}

vm.$parent = parent;
```

从代码中可以看到，逻辑是这样子的：如果当前组件不是抽象组件并且存在父级，那么就通
过 while 循环来向上循环，如果当前组件的父级是抽象组件并且也存在父级，那就继续向
上查找当前组件父级的父级，直到找到第一个不是抽象类型的父级时，将其赋值
vm.$parent，同时把该实例自身添加进找到的父级的$children 属性中。这样就确保了在子
组件的$parent属性上能访问到父组件实例，在父组件的$children 属性上也能访问子组件
的实例。

接着是给实例上挂载$root 属性:

```js
vm.$root = parent ? parent.$root : vm;
```

实例
的$root属性表示当前实例的根实例，挂载该属性时，首先会判断如果当前实例存在父级，那么当前实例的根实例$root
属性就是其父级的根实例$root属性，如果不存在，那么根实例$root 属性就是它自己。这
很好理解，举个例子：假如有一个人，他如果有父亲，那么他父亲的祖先肯定也是他的祖先
，同理，他的儿子的祖先也肯定是他的祖先，我们不需要真正的一层一层的向上递归查找到
他祖先本人，只需要知道他父亲的祖先是谁然后告诉他即可。如果他没有父亲，那说明他自
己就是祖先，那么他后面的儿子、孙子的$root 属性就是他自己了。

这就是一个自上到下将根实例的$root 属性依次传递给每一个子实例的过程。

```js
vm.$children = [];
vm.$refs = {};

vm._watcher = null;
vm._inactive = null;
vm._directInactive = false;
vm._isMounted = false;
vm._isDestroyed = false;
vm._isBeingDestroyed = false;
```
