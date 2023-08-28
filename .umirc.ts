/*
 * @Author: Leexiaop 282191344@qq.com
 * @Date: 2023-07-17 11:46:39
 * @LastEditors: Leexiaop 282191344@qq.com
 * @LastEditTime: 2023-08-28 09:41:43
 * @FilePath: \badger-ui\.umirc.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'dumi';

const repo = 'badger-ui';

export default defineConfig({
	title: '前端平头哥',
	favicon: './public/logo.ico',
	logo: 'https://leexiaop.github.io/static/ibadgers/logo.png',
	mode: 'site',
	history: {
		type: 'hash',
	},
	base: `/${repo}/`,
	publicPath: process.env.NODE_ENV === 'development' ? `/${repo}/` : './',
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
