---
title: 对webpack的理解
---

## 背景

webpack 最初的目标是实现前端项目的模块化，旨在更高效地管理和维护项目中的每一个资
源。

### 模块化

最早的时候，我们是通过文件的划分来实现模块化，也就是将每个功能及其相关状态数据各
自抽取到一个单独的 js 文件中，约定每个文件是一个独立的模块。然后再将这些 js 文件
引入到页面中，那么一个 script 标签对应一个模块，然后调用模块化的成员。

```js
<script src="a.js"></script>
<script src="b.js"></script>
...
```

但是这种模块化的弊端也十分的明显，模块都是全局工作，大量的模块成员容易造成全局污
染，模块与模块之间又没有依赖关系，维护困难，没有私有空间等问题，一旦项目变大，这
些问题就会更加明显。随后，就出现了命名空间的方式，规定每个模块只对外暴露一个全局
对象，然后模块的内容都挂在到这个对象上。

```js
window.moduleA = {
	method1: function () {
		console.log(3333);
	},
};
```

但是这种方式也并没有解决上一种方式的依赖等问题。所以，又改用了立即执行函数为模块
的私有空间，通过参数的方式作为声明的依赖：

```js
(function ($) {
	var name = 'module-a';

	function method1() {
		console.log(name + '#method1');
		$('body').animate({ margin: '200px' });
	}

	window.moduleA = {
		method1: method1,
	};
})(jQuery);
```

上述的方式都是早期解决模块的方式，但是仍然存在一些没有解决的问题。例如，我们是用
过 script 标签在页面引入这些模块的，这些模块的加载并不受代码的控制，时间一久维护
起来也十分的麻烦。理想的解决方式是，在页面中引入一个 JS 入口文件，其余用到的模块
可以通过代码控制，按需加载进来。除了模块加载的问题以外，还需要规定模块化的规范，
如今流行的则是 CommonJS 、ES Modules。

## 问题

从后端渲染的 JSP、PHP，到前端原生 JavaScript，再到 jQuery 开发，再到目前的三大框
架 Vue、React、Angular 开发方式，也从 javascript 到后面的
es5、es6、7、8、9、10，再到 typescript，包括编写 CSS 的预处理器 less、scss 等。
现代前端开发已经变得十分的复杂，所以我们开发过程中会遇到如下的问题：

-   需要通过模块化的方式来开发
-   使用一些高级的特性来加快我们的开发效率或者安全性，比如通过 ES6+、TypeScript
    开发脚本逻辑，通过 sass、less 等方式来编写 css 样式代码
-   监听文件的变化来并且反映到浏览器上，提高开发的效率
-   JavaScript 代码需要模块化，HTML 和 CSS 这些资源文件也会面临需要被模块化的问
    题
-   开发完成后我们还需要将代码进行压缩、合并以及其他相关的优化

而 webpack 恰好都能解决这些问题。

## webpack 是什么

webpack 是一个用于现代 JavaScript 应用程序的静态模块打包文件。这里的静态模块指的
是开发阶段，可以被 webpack 直接引用的资源（可以直接被获取打包进 bundle.js 的资源
），当 webpack 处理应用程序时，他会在内部构建一张依赖图。此依赖图会对应映射到项
目所需的每个模块（不在局限 js 文件），并生成一个或者是多个 bundle.
![webpack](http://leexiaop.github.io/static/ibadgers/interview/webpack_1.png)

## webpack 的能力

-   编译代码能力，提高效率，解决浏览器兼容问题
-   模块整合能力，提高性能，可维护性，解决浏览器频繁请求文件的问题
-   万物皆可模块能力，项目维护性增强，支持不同种类的前端模块类型，统一的模块化方
    案，所有资源文件的加载都可以通过代码控制
