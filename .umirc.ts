import { defineConfig } from 'dumi';

export default defineConfig({
	title: '前端平头哥',
	favicon: 'https://leexiaop.github.io/statics/ibadgers/logo.ico',
	logo: 'https://leexiaop.github.io/statics/ibadgers/logo.png',
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
			title: '实用网站和项目',
			path: '/program',
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
