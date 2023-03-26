import { defineConfig } from 'dumi';

export default defineConfig({
	title: '前端平头哥',
	favicon: 'http://ibadgers.cn/images/logo.ico',
	logo: 'http://ibadgers.cn/images/logo.png',
	outputPath: 'docs-dist',
	mode: 'site',
	publicPath: '/',
	navs: [
		{
			title: 'Guide',
			path: '/guide',
		},
		{
			title: '组件库',
			path: '/components',
		},
		{
			title: '前端面试',
			path: '/interview',
		},
		{
			title: '学习进阶',
			path: '/study',
		},
		{
			title: '前端源码解析',
			path: '/code',
		},
		{
			title: 'LeetCode',
			path: '/leetcode',
		},
		{
			title: 'GitHub',
			path: 'https://github.com/Leexiaop/',
		},
		{
			title: 'Blog',
			path: 'https://leexiaop.github.io/',
		},
		{
			title: 'CSDN',
			path: 'https://blog.csdn.net/leelxp/',
		},
	],
});
