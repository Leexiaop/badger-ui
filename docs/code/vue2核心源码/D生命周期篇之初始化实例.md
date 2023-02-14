---
title: 生命周期篇之初始化实例
---

vue 干的第一件事儿就是初始化实例，也就是 new Vue，那么接下来，我们就看看这个阶段
都干了什么：

```js
//  src/core/instance/index.js
function Vue(options) {
	if (process.env.NODE_ENV !== 'production' && !(this instanceof Vue)) {
		warn(
			'Vue is a constructor and should be called with the `new` keyword'
		);
	}
	this._init(options);
}
```

可以看到代码很简答，重点是在一原型上的\_init 方法。

```js
//  src/core/instance/init.js
export function initMixin(Vue) {
	Vue.prototype._init = function (options) {
		const vm = this;
		vm.$options = mergeOptions(
			resolveConstructorOptions(vm.constructor),
			options || {},
			vm
		);
		vm._self = vm;
		initLifecycle(vm);
		initEvents(vm);
		initRender(vm);
		callHook(vm, 'beforeCreate');
		initInjections(vm); // resolve injections before data/props
		initState(vm);
		initProvide(vm); // resolve provide after data/props
		callHook(vm, 'created');

		if (vm.$options.el) {
			vm.$mount(vm.$options.el);
		}
	};
}
```

在 initMixin 函数中，我们发现了\_init 方法。首先，把 Vue 实例赋值给变量 vm，并且
把用户传递的 options 选项与当前构造函数的 options 属性及其父级构造函数的 options
属性进行合并（关于属性如何合并的问题下面会介绍），得到一个新的 options 选项赋值
给$options属性，并将$options 属性挂载到 Vue 实例上。

```js
vm.$options = mergeOptions(
	resolveConstructorOptions(vm.constructor),
	options || {},
	vm
);
```

接着，通过调用一些初始化函数来为 Vue 实例初始化一些属性，事件，响应式数据等:

```js
initLifecycle(vm); // 初始化生命周期
initEvents(vm); // 初始化事件
initRender(vm); // 初始化渲染
callHook(vm, 'beforeCreate'); // 调用生命周期钩子函数
initInjections(vm); //初始化injections
initState(vm); // 初始化props,methods,data,computed,watch
initProvide(vm); // 初始化 provide
callHook(vm, 'created'); // 调用生命周期钩子函数
```

可以看到，除了调用初始化函数来进行相关数据的初始化之外，还在合适的时机调用了
callHook 函数来触发生命周期的钩子，关于 callHook 函数是如何触发生命周期的钩子会
在下面介绍，我们先继续往下看：

```js
if (vm.$options.el) {
	vm.$mount(vm.$options.el);
}
```

在所有的初始化工作都完成以后，最后，会判断用户是否传入了 el 选项，如果传入了则调
用$mount函数进入模板编译与挂载阶段，如果没有传入el选项，则不进入下一个生命周期阶段，需要用户手动执行vm.$mount
方法才进入下一个生命周期阶段。

### 合并属性

\_init 方法里首先会调用 mergeOptions 函数来进行属性合并：

```js
vm.$options = mergeOptions(
	resolveConstructorOptions(vm.constructor),
	options || {},
	vm
);
```

它实际上就是把 resolveConstructorOptions(vm.constructor) 的返回值和 options 做合
并，resolveConstructorOptions 的实现先不考虑，可简单理解为返回
vm.constructor.options，相当于 Vue.options，那么这个 Vue.options 又是什么呢，其
实在 initGlobalAPI(Vue) 的时候定义了这个值，代码在 src/core/global-api/index.js
中：

```js
export function initGlobalAPI(Vue: GlobalAPI) {
	// ...
	Vue.options = Object.create(null);
	ASSET_TYPES.forEach((type) => {
		Vue.options[type + 's'] = Object.create(null);
	});

	extend(Vue.options.components, builtInComponents);
	// ...
}
```

首先通过 Vue.options = Object.create(null) 创建一个空对象，然后遍历
ASSET_TYPES，ASSET_TYPES 的定义在 src/shared/constants.js 中：

```js
export const ASSET_TYPES = ['component', 'directive', 'filter'];
```

所以上面遍历 ASSET_TYPES 后的代码相当于：

```js
Vue.options.components = {};
Vue.options.directives = {};
Vue.options.filters = {};
```

最后通过 extend(Vue.options.components, builtInComponents) 把一些内置组件扩展到
Vue.options.components 上，Vue 的内置组件目前 有<keep-alive>、<transition>
和<transition-group> 组件，这也就是为什么我们在其它组件中使用这些组件不需要注册
的原因。

那么回到 mergeOptions 这个函数，它的定义在 src/core/util/options.js 中：

```js
/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
export function mergeOptions(
	parent: Object,
	child: Object,
	vm?: Component
): Object {
	if (typeof child === 'function') {
		child = child.options;
	}
	const extendsFrom = child.extends;
	if (extendsFrom) {
		parent = mergeOptions(parent, extendsFrom, vm);
	}
	if (child.mixins) {
		for (let i = 0, l = child.mixins.length; i < l; i++) {
			parent = mergeOptions(parent, child.mixins[i], vm);
		}
	}
	const options = {};
	let key;
	for (key in parent) {
		mergeField(key);
	}
	for (key in child) {
		if (!hasOwn(parent, key)) {
			mergeField(key);
		}
	}
	function mergeField(key) {
		const strat = strats[key] || defaultStrat;
		options[key] = strat(parent[key], child[key], vm, key);
	}
	return options;
}
```

可以看出，mergeOptions 函数的 主要功能是把 parent 和 child 这两个对象根据一些合
并策略，合并成一个新对象并返回。首先递归把 extends 和 mixins 合并到 parent 上:

```js
const extendsFrom = child.extends;
if (extendsFrom) {
	parent = mergeOptions(parent, extendsFrom, vm);
}
if (child.mixins) {
	for (let i = 0, l = child.mixins.length; i < l; i++) {
		parent = mergeOptions(parent, child.mixins[i], vm);
	}
}
```

然后创建一个空对象 options，遍历 parent，把 parent 中的每一项通过调用 mergeField
函数合并到空对象 options 里.

```js
const options = {};
let key;
for (key in parent) {
	mergeField(key);
}
```

接着再遍历 child，把存在于 child 里但又不在 parent 中 的属性继续调用 mergeField
函数合并到空对象 options 里.

```js
for (key in child) {
	if (!hasOwn(parent, key)) {
		mergeField(key);
	}
}
```

最后，options 就是最终合并后得到的结果，将其返回。

这里值得一提的是 mergeField 函数，它不是简单的把属性从一个对象里复制到另外一个对
象里，而是根据被合并的不同的选项有着不同的合并策略。例如，对于 data 有 data 的合
并策略，即该文件中的 strats.data 函数；对于 watch 有 watch 的合并策略，即该文件
中的 strats.watch 函数等等。这就是设计模式中非常典型的策略模式。

关于这些合并策略都很简单，我们不一一展开介绍，仅介绍生命周期钩子函数的合并策略，
因为我们后面会用到。生命周期钩子函数的合并策略如下：

```js
/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (parentVal,childVal):  {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(hook => {
  strats[hook] = mergeHook
})
```

这其中的 LIFECYCLE_HOOKS 的定义在 src/shared/constants.js 中：

```js
export const LIFECYCLE_HOOKS = [
	'beforeCreate',
	'created',
	'beforeMount',
	'mounted',
	'beforeUpdate',
	'updated',
	'beforeDestroy',
	'destroyed',
	'activated',
	'deactivated',
	'errorCaptured',
];
```

这里定义了所有钩子函数名称，所以对于钩子函数的合并策略都是 mergeHook 函数
。mergeHook 函数的实现用了一个多层嵌套的三元运算符，如果嵌套太深不好理解的话我们
可以将其展开，如下：

```js
function mergeHook (parentVal,childVal):  {
 if (childVal) {
   if (parentVal) {
     return parentVal.concat(childVal)
   } else {
     if (Array.isArray(childVal)) {
       return childVal
     } else {
       return [childVal]
     }
   }
 } else {
   return parentVal
 }
}
```

从展开后的代码中可以看到，它的合并策略是这样子的：如果 childVal 不存在，就返回
parentVal；否则再判断是否存在 parentVal，如果存在就把 childVal 添加到 parentVal
后返回新数组；否则返回 childVal 的数组。所以回到 mergeOptions 函数，一旦 parent
和 child 都定义了相同的钩子函数，那么它们会把 2 个钩子函数合并成一个数组。

那么问题来了，为什么要把相同的钩子函数转换成数组呢？这是因为 Vue 允许用户使用
Vue.mixin 方法（关于该方法会在后面章节中介绍）向实例混入自定义行为，Vue 的一些插
件通常都是这么做的。所以当 Vue.mixin 和用户在实例化 Vue 时，如果设置了同一个钩子
函数，那么在触发钩子函数时，就需要同时触发这个两个函数，所以转换成数组就是为了能
在同一个生命周期钩子列表中保存多个钩子函数。

## callHook 函数如何触发钩子函数

关于 callHook 函数如何触发钩子函数的问题，我们只需看一下该函数的实现源码即可，该
函数的源码位于 src/core/instance/lifecycle.js 中:

```js
export function callHook(vm: Component, hook: string) {
	const handlers = vm.$options[hook];
	if (handlers) {
		for (let i = 0, j = handlers.length; i < j; i++) {
			try {
				handlers[i].call(vm);
			} catch (e) {
				handleError(e, vm, `${hook} hook`);
			}
		}
	}
}
```

可以看到，callHook 函数逻辑非常简单。首先从实例的$options 中获取到需要触发的钩子
名称所对应的钩子函数数组 handlers，我们说过，每个生命周期钩子名称都对应了一个钩
子函数数组。然后遍历该数组，将数组中的每个钩子函数都执行一遍。
