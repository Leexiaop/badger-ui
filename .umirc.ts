import { defineConfig } from 'dumi';

export default defineConfig({
    title: '前端平头哥',
    favicon: '/images/logo.ico',
    logo: '/images/logo.png',
    outputPath: 'docs-dist',
    mode: 'site',
    publicPath: '/',
    // more config: https://d.umijs.org/config
    navs: [
        {
            title: 'Guide',
            path: '/guide',
        },
        {
            title: '组件库',
            path: '/components'
        },
        {
            title: '前端面试',
            path: '/interview'
        },
        {
            title: '学习进阶',
            path: '/study'
        },
        {
            title: 'LeetCode',
            path: '/leetcode'
        },
        {
            title: '关于我',
            path: '/about',
        },
        {
            title: 'GitHub',
            path: 'https://github.com/umijs/dumi',
        },
        {
            title: '更新日志',
            path: 'https://github.com/umijs/dumi444',
        }
    ]
});
