import { defineConfig } from 'dumi';

export default defineConfig({
	title: '前端平头哥',
	favicon: '/images/logo.ico',
	logo: '/images/logo.png',
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
			title: 'LeetCode',
			path: '/leetcode',
		},
		{
			title: '关于我',
			path: '/about',
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
