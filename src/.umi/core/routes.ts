// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'D:/lee/badger-ui/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('../dumi/layout').default],
    "component": ((props) => {
        const React = require('react');
        const { default: getDemoRenderArgs } = require('D:/lee/badger-ui/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { usePrefersColor, context } = require('dumi/theme');

        
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        })
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('../dumi/layout').default, require('D:/lee/badger-ui/node_modules/dumi-theme-default/es/layout.js').default],
    "routes": [
      {
        "path": "/components/captions",
        "component": require('D:/lee/badger-ui/src/Captions/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Captions/index.md",
          "updatedTime": 1693215121000,
          "componentName": "Captions",
          "title": "滚动字幕",
          "nav": {
            "title": "滚动字幕",
            "path": "/components"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基础版",
              "heading": "基础版"
            },
            {
              "depth": 3,
              "value": "插槽版",
              "heading": "插槽版"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 2,
              "value": "源码",
              "heading": "源码"
            }
          ],
          "hasPreviewer": true,
          "group": {
            "path": "/components/captions",
            "title": "滚动字幕"
          }
        },
        "title": "滚动字幕 - 前端平头哥"
      },
      {
        "path": "/",
        "component": require('D:/lee/badger-ui/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1693215121000,
          "hero": {
            "title": "Badger Front-end Develop",
            "desc": "<div class=\"markdown\"><p>读万卷书，行万里路，代码运行了那么久，却总觉得不是最优秀...</p></div>",
            "actions": [
              {
                "text": "Getting Started",
                "link": "/components"
              }
            ]
          },
          "features": [
            {
              "icon": "https://leexiaop.github.io/static/ibadgers/1.png",
              "title": "组件不再是UI界面",
              "desc": "<div class=\"markdown\"><p>组件库不再是像其他只关注UI界面组件，而是更加关注业务场景，使用起来也方便至极，源码就在下面，可以学习思想，结合自己的场景稍加改动，即可适用任何你在用的技术栈，让你的不再为少见场景下开发组件难而发愁。</p></div>"
            },
            {
              "icon": "https://leexiaop.github.io/static/ibadgers/2.png",
              "title": "面试题分模块深入原理",
              "desc": "<div class=\"markdown\"><p>面试题仅仅是想起什么就是什么的八股文，我们做了精细的模块划分。将各公司常见的面试题收入进来。一一给出答案，并且尽量的做到深入原理，在coding环节，也尽可能多的写出代码。提高自身的coding能力。</p></div>"
            },
            {
              "icon": "https://leexiaop.github.io/static/ibadgers/3.png",
              "title": "Leetcode算法天天刷",
              "desc": "<div class=\"markdown\"><p>互联网如此的浪潮下，如何能找到更好的工作。唯一的方法就是提高自己的能力，面试中算法水平的高低是决定你能去什么样的公司，能拿多少钱的关键，所以，卷算法是你唯一的选择。</p></div>"
            },
            {
              "icon": "https://leexiaop.github.io/static/ibadgers/4.png",
              "title": "学习拔高进阶是硬道理",
              "desc": "<div class=\"markdown\"><p>曾经一直以为只要在自己的那一亩三分地深入研究就可以了，但是谁又能预料到当前的行业情况又是这样的起伏不定。所以，学习一些新的东西是势在必行，我选择了3D方向，和go语言。为自己增加一些筹码。</p></div>"
            },
            {
              "icon": "https://leexiaop.github.io/static/ibadgers/6.png",
              "title": "卷是脚下的路",
              "desc": "<div class=\"markdown\"><p>未来路在哪里，加班使常态，累。未来路在哪里，技术还总缺那么一点点，卷。。。</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>备案号 A20220625-0033 | Copyright © 2022<br />Powered by Lee!</p></div>",
          "slugs": [
            {
              "depth": 2,
              "value": "Badger Front-end Develop 的初衷",
              "heading": "badger-front-end-develop-的初衷"
            }
          ],
          "title": "Badger Front-end Develop 的初衷"
        },
        "title": "Badger Front-end Develop 的初衷 - 前端平头哥"
      },
      {
        "path": "/code/vue2核心源码/内置组件篇",
        "component": require('D:/lee/badger-ui/docs/code/vue2核心源码/内置组件篇.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/code/vue2核心源码/内置组件篇.md",
          "updatedTime": 1693215121000,
          "title": "内置组件篇之keep-alive",
          "order": 35,
          "slugs": [
            {
              "depth": 2,
              "value": "1. 前言",
              "heading": "1-前言"
            },
            {
              "depth": 2,
              "value": "2 用法回顾",
              "heading": "2-用法回顾"
            },
            {
              "depth": 2,
              "value": "3. 实现原理",
              "heading": "3-实现原理"
            },
            {
              "depth": 3,
              "value": "props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "created",
              "heading": "created"
            },
            {
              "depth": 3,
              "value": "destroyed",
              "heading": "destroyed"
            },
            {
              "depth": 3,
              "value": "mounted",
              "heading": "mounted"
            },
            {
              "depth": 3,
              "value": "render",
              "heading": "render"
            },
            {
              "depth": 2,
              "value": "4. 生命周期钩子",
              "heading": "4-生命周期钩子"
            },
            {
              "depth": 2,
              "value": "5. 总结",
              "heading": "5-总结"
            }
          ],
          "nav": {
            "path": "/code",
            "title": "Code"
          },
          "group": {
            "path": "/code/vue2核心源码",
            "title": "Vue2核心源码"
          }
        },
        "title": "内置组件篇之keep-alive - 前端平头哥"
      },
      {
        "path": "/code/vue2核心源码/实例方法篇set",
        "component": require('D:/lee/badger-ui/docs/code/vue2核心源码/实例方法篇set.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/code/vue2核心源码/实例方法篇set.md",
          "updatedTime": 1693215121000,
          "title": "实例方法篇set",
          "order": 28,
          "slugs": [
            {
              "depth": 2,
              "value": "vm.$set",
              "heading": "vmset"
            },
            {
              "depth": 3,
              "value": "用法回顾",
              "heading": "用法回顾"
            },
            {
              "depth": 3,
              "value": "内部原理",
              "heading": "内部原理"
            }
          ],
          "nav": {
            "path": "/code",
            "title": "Code"
          },
          "group": {
            "path": "/code/vue2核心源码",
            "title": "Vue2核心源码"
          }
        },
        "title": "实例方法篇set - 前端平头哥"
      },
      {
        "path": "/code/vue2核心源码/模版编译篇",
        "component": require('D:/lee/badger-ui/docs/code/vue2核心源码/模版编译篇.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/code/vue2核心源码/模版编译篇.md",
          "updatedTime": 1693215121000,
          "title": "模版编译篇",
          "order": 8,
          "slugs": [
            {
              "depth": 2,
              "value": "模版编译篇",
              "heading": "模版编译篇"
            },
            {
              "depth": 2,
              "value": "编译流程",
              "heading": "编译流程"
            }
          ],
          "nav": {
            "path": "/code",
            "title": "Code"
          },
          "group": {
            "path": "/code/vue2核心源码",
            "title": "Vue2核心源码"
          }
        },
        "title": "模版编译篇 - 前端平头哥"
      },
      {
        "path": "/code/vue2核心源码/模版编译篇总结",
        "component": require('D:/lee/badger-ui/docs/code/vue2核心源码/模版编译篇总结.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/code/vue2核心源码/模版编译篇总结.md",
          "updatedTime": 1693215121000,
          "title": "模版编译篇总结",
          "order": 13,
          "slugs": [
            {
              "depth": 2,
              "value": "整体流程",
              "heading": "整体流程"
            }
          ],
          "nav": {
            "path": "/code",
            "title": "Code"
          },
          "group": {
            "path": "/code/vue2核心源码",
            "title": "Vue2核心源码"
          }
        },
        "title": "模版编译篇总结 - 前端平头哥"
      },
      {
        "path": "/code/vue2核心源码/生命周期篇",
        "component": require('D:/lee/badger-ui/docs/code/vue2核心源码/生命周期篇.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/code/vue2核心源码/生命周期篇.md",
          "updatedTime": 1693215121000,
          "title": "生命周期篇",
          "order": 14,
          "slugs": [
            {
              "depth": 2,
              "value": "1. 前言",
              "heading": "1-前言"
            },
            {
              "depth": 2,
              "value": "2. 生命周期流程图",
              "heading": "2-生命周期流程图"
            },
            {
              "depth": 2,
              "value": "3. 总结",
              "heading": "3-总结"
            }
          ],
          "nav": {
            "path": "/code",
            "title": "Code"
          },
          "group": {
            "path": "/code/vue2核心源码",
            "title": "Vue2核心源码"
          }
        },
        "title": "生命周期篇 - 前端平头哥"
      },
      {
        "path": "/code/vue2核心源码/生命周期篇之初始化5",
        "component": require('D:/lee/badger-ui/docs/code/vue2核心源码/生命周期篇之初始化5.initState.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/code/vue2核心源码/生命周期篇之初始化5.initState.md",
          "updatedTime": 1693215121000,
          "title": "生命周期篇之初始化initState",
          "order": 19,
          "slugs": [
            {
              "depth": 2,
              "value": "1. 前言",
              "heading": "1-前言"
            },
            {
              "depth": 2,
              "value": "2. initState 函数分析",
              "heading": "2-initstate-函数分析"
            },
            {
              "depth": 2,
              "value": "3. 初始化 props",
              "heading": "3-初始化-props"
            },
            {
              "depth": 3,
              "value": "3.1 规范化数据",
              "heading": "31-规范化数据"
            },
            {
              "depth": 3,
              "value": "3.2 initProps 函数分析",
              "heading": "32-initprops-函数分析"
            },
            {
              "depth": 3,
              "value": "3.3 validateProp 函数分析",
              "heading": "33-validateprop-函数分析"
            },
            {
              "depth": 3,
              "value": "3.4 getPropDefaultValue 函数分析",
              "heading": "34-getpropdefaultvalue-函数分析"
            },
            {
              "depth": 3,
              "value": "3.5 assertProp 函数分析",
              "heading": "35-assertprop-函数分析"
            },
            {
              "depth": 2,
              "value": "4. 初始化 methods",
              "heading": "4-初始化-methods"
            },
            {
              "depth": 2,
              "value": "5. 初始化 data",
              "heading": "5-初始化-data"
            },
            {
              "depth": 2,
              "value": "6. 初始化 computed",
              "heading": "6-初始化-computed"
            },
            {
              "depth": 3,
              "value": "6.1 回顾用法",
              "heading": "61-回顾用法"
            },
            {
              "depth": 3,
              "value": "6.2 initComputed 函数分析",
              "heading": "62-initcomputed-函数分析"
            },
            {
              "depth": 3,
              "value": "6.3 defineComputed 函数分析",
              "heading": "63-definecomputed-函数分析"
            },
            {
              "depth": 3,
              "value": "6.4 createComputedGetter 函数分析",
              "heading": "64-createcomputedgetter-函数分析"
            },
            {
              "depth": 3,
              "value": "6.5 depend 和 evaluate",
              "heading": "65-depend-和-evaluate"
            },
            {
              "depth": 2,
              "value": "7. 初始化 watch",
              "heading": "7-初始化-watch"
            },
            {
              "depth": 3,
              "value": "7.1 回顾用法",
              "heading": "71-回顾用法"
            },
            {
              "depth": 3,
              "value": "7.2 initWatch 函数分析",
              "heading": "72-initwatch-函数分析"
            },
            {
              "depth": 3,
              "value": "7.3 createWatcher 函数分析",
              "heading": "73-createwatcher-函数分析"
            },
            {
              "depth": 2,
              "value": "8. 总结",
              "heading": "8-总结"
            }
          ],
          "nav": {
            "path": "/code",
            "title": "Code"
          },
          "group": {
            "path": "/code/vue2核心源码",
            "title": "Vue2核心源码"
          }
        },
        "title": "生命周期篇之初始化initState - 前端平头哥"
      },
      {
        "path": "/code/vue2核心源码/生命周期篇之初始化6",
        "component": require('D:/lee/badger-ui/docs/code/vue2核心源码/生命周期篇之初始化6.模版编译阶段.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/code/vue2核心源码/生命周期篇之初始化6.模版编译阶段.md",
          "updatedTime": 1693215121000,
          "title": "生命周期篇之初始化模版编译阶段",
          "order": 20,
          "slugs": [
            {
              "depth": 2,
              "value": "1. 前言",
              "heading": "1-前言"
            },
            {
              "depth": 2,
              "value": "2. 模板编译阶段分析",
              "heading": "2-模板编译阶段分析"
            },
            {
              "depth": 3,
              "value": "2.1 两种$mount 方法对比",
              "heading": "21-两种mount-方法对比"
            },
            {
              "depth": 3,
              "value": "2.2 完整版的 vm.$mount 方法分析",
              "heading": "22-完整版的-vmmount-方法分析"
            },
            {
              "depth": 2,
              "value": "3. 总结",
              "heading": "3-总结"
            }
          ],
          "nav": {
            "path": "/code",
            "title": "Code"
          },
          "group": {
            "path": "/code/vue2核心源码",
            "title": "Vue2核心源码"
          }
        },
        "title": "生命周期篇之初始化模版编译阶段 - 前端平头哥"
      },
      {
        "path": "/code/vue2核心源码/生命周期篇之初始化7",
        "component": require('D:/lee/badger-ui/docs/code/vue2核心源码/生命周期篇之初始化7.挂载阶段.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/code/vue2核心源码/生命周期篇之初始化7.挂载阶段.md",
          "updatedTime": 1693215121000,
          "title": "生命周期篇之初始化挂载阶段",
          "order": 21,
          "slugs": [
            {
              "depth": 2,
              "value": "1. 前言",
              "heading": "1-前言"
            },
            {
              "depth": 2,
              "value": "2. 挂载阶段分析",
              "heading": "2-挂载阶段分析"
            },
            {
              "depth": 2,
              "value": "3. 总结",
              "heading": "3-总结"
            }
          ],
          "nav": {
            "path": "/code",
            "title": "Code"
          },
          "group": {
            "path": "/code/vue2核心源码",
            "title": "Vue2核心源码"
          }
        },
        "title": "生命周期篇之初始化挂载阶段 - 前端平头哥"
      },
      {
        "path": "/code/vue2核心源码/生命周期篇之初始化8",
        "component": require('D:/lee/badger-ui/docs/code/vue2核心源码/生命周期篇之初始化8.销毁阶段.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/code/vue2核心源码/生命周期篇之初始化8.销毁阶段.md",
          "updatedTime": 1693215121000,
          "title": "生命周期篇之初始化销毁阶段",
          "order": 22,
          "slugs": [
            {
              "depth": 2,
              "value": "销毁阶段分析",
              "heading": "销毁阶段分析"
            }
          ],
          "nav": {
            "path": "/code",
            "title": "Code"
          },
          "group": {
            "path": "/code/vue2核心源码",
            "title": "Vue2核心源码"
          }
        },
        "title": "生命周期篇之初始化销毁阶段 - 前端平头哥"
      },
      {
        "path": "/code/vue2核心源码/虚拟dom篇之diff过程",
        "component": require('D:/lee/badger-ui/docs/code/vue2核心源码/虚拟DOM篇之Diff过程.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/code/vue2核心源码/虚拟DOM篇之Diff过程.md",
          "updatedTime": 1693215121000,
          "title": "虚拟DOM篇之Diff过程",
          "order": 5,
          "slugs": [
            {
              "depth": 2,
              "value": "patch 过程",
              "heading": "patch-过程"
            },
            {
              "depth": 2,
              "value": "创建节点",
              "heading": "创建节点"
            },
            {
              "depth": 2,
              "value": "删除节点",
              "heading": "删除节点"
            },
            {
              "depth": 2,
              "value": "更新节点",
              "heading": "更新节点"
            }
          ],
          "nav": {
            "path": "/code",
            "title": "Code"
          },
          "group": {
            "path": "/code/vue2核心源码",
            "title": "Vue2核心源码"
          }
        },
        "title": "虚拟DOM篇之Diff过程 - 前端平头哥"
      },
      {
        "path": "/code/vue2核心源码/虚拟dom篇之update子节点",
        "component": require('D:/lee/badger-ui/docs/code/vue2核心源码/虚拟DOM篇之Update子节点.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/code/vue2核心源码/虚拟DOM篇之Update子节点.md",
          "updatedTime": 1693215121000,
          "title": "虚拟DOM篇之Update子节点",
          "order": 6,
          "slugs": [
            {
              "depth": 2,
              "value": "更新子节点",
              "heading": "更新子节点"
            },
            {
              "depth": 3,
              "value": "创建子节点",
              "heading": "创建子节点"
            },
            {
              "depth": 3,
              "value": "删除子节点",
              "heading": "删除子节点"
            },
            {
              "depth": 3,
              "value": "移动子节点",
              "heading": "移动子节点"
            },
            {
              "depth": 3,
              "value": "更新子节点",
              "heading": "更新子节点-1"
            },
            {
              "depth": 2,
              "value": "回归源码",
              "heading": "回归源码"
            }
          ],
          "nav": {
            "path": "/code",
            "title": "Code"
          },
          "group": {
            "path": "/code/vue2核心源码",
            "title": "Vue2核心源码"
          }
        },
        "title": "虚拟DOM篇之Update子节点 - 前端平头哥"
      },
      {
        "path": "/code/vue2核心源码/过滤篇之工作原理",
        "component": require('D:/lee/badger-ui/docs/code/vue2核心源码/过滤篇之工作原理.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/code/vue2核心源码/过滤篇之工作原理.md",
          "updatedTime": 1693215121000,
          "title": "过滤器之工作原理",
          "order": 31,
          "slugs": [
            {
              "depth": 2,
              "value": "1. 前言",
              "heading": "1-前言"
            },
            {
              "depth": 2,
              "value": "2. resolveFilter 函数分析",
              "heading": "2-resolvefilter-函数分析"
            },
            {
              "depth": 2,
              "value": "3. 串联过滤器原理",
              "heading": "3-串联过滤器原理"
            },
            {
              "depth": 2,
              "value": "4. 过滤器接收参数",
              "heading": "4-过滤器接收参数"
            },
            {
              "depth": 2,
              "value": "5. 小结",
              "heading": "5-小结"
            }
          ],
          "nav": {
            "path": "/code",
            "title": "Code"
          },
          "group": {
            "path": "/code/vue2核心源码",
            "title": "Vue2核心源码"
          }
        },
        "title": "过滤器之工作原理 - 前端平头哥"
      },
      {
        "path": "/code/vue2核心源码/过滤篇之过滤器解析",
        "component": require('D:/lee/badger-ui/docs/code/vue2核心源码/过滤篇之过滤器解析.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/code/vue2核心源码/过滤篇之过滤器解析.md",
          "updatedTime": 1693215121000,
          "title": "过滤器之过滤器解析",
          "order": 33,
          "slugs": [
            {
              "depth": 2,
              "value": "1. 前言",
              "heading": "1-前言"
            },
            {
              "depth": 2,
              "value": "2. 在何处解析过滤器",
              "heading": "2-在何处解析过滤器"
            },
            {
              "depth": 2,
              "value": "3. parseFilters 函数分析",
              "heading": "3-parsefilters-函数分析"
            },
            {
              "depth": 2,
              "value": "4. 小结",
              "heading": "4-小结"
            }
          ],
          "nav": {
            "path": "/code",
            "title": "Code"
          },
          "group": {
            "path": "/code/vue2核心源码",
            "title": "Vue2核心源码"
          }
        },
        "title": "过滤器之过滤器解析 - 前端平头哥"
      },
      {
        "path": "/interview",
        "component": require('D:/lee/badger-ui/docs/interview/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/interview/index.md",
          "updatedTime": 1693215121000,
          "title": "前端面试概览",
          "slugs": [
            {
              "depth": 2,
              "value": "前端面试概览",
              "heading": "前端面试概览"
            }
          ],
          "nav": {
            "path": "/interview",
            "title": "Interview"
          }
        },
        "title": "前端面试概览 - 前端平头哥"
      },
      {
        "path": "/interview/http/http三次握手和四次挥手",
        "component": require('D:/lee/badger-ui/docs/interview/HTTP/http三次握手和四次挥手.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/interview/HTTP/http三次握手和四次挥手.md",
          "updatedTime": 1693215121000,
          "title": "http三次握手和四次挥手",
          "slugs": [
            {
              "depth": 2,
              "value": "三次握手",
              "heading": "三次握手"
            },
            {
              "depth": 3,
              "value": "为什么不是俩次握手？",
              "heading": "为什么不是俩次握手"
            },
            {
              "depth": 2,
              "value": "四次挥手",
              "heading": "四次挥手"
            },
            {
              "depth": 3,
              "value": "四次挥手的原因",
              "heading": "四次挥手的原因"
            },
            {
              "depth": 2,
              "value": "总体流程",
              "heading": "总体流程"
            }
          ],
          "nav": {
            "path": "/interview",
            "title": "Interview"
          },
          "group": {
            "path": "/interview/http",
            "title": "HTTP"
          }
        },
        "title": "http三次握手和四次挥手 - 前端平头哥"
      },
      {
        "path": "/interview/http/http缓存是什么",
        "component": require('D:/lee/badger-ui/docs/interview/HTTP/http缓存是什么.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/interview/HTTP/http缓存是什么.md",
          "updatedTime": 1693215121000,
          "title": "http缓存是什么",
          "slugs": [
            {
              "depth": 2,
              "value": "强缓存",
              "heading": "强缓存"
            },
            {
              "depth": 3,
              "value": "Expires",
              "heading": "expires"
            },
            {
              "depth": 3,
              "value": "Cache-Control",
              "heading": "cache-control"
            },
            {
              "depth": 2,
              "value": "协商缓存",
              "heading": "协商缓存"
            },
            {
              "depth": 3,
              "value": "Last-Modified 和 If-Modified-Since",
              "heading": "last-modified-和-if-modified-since"
            },
            {
              "depth": 3,
              "value": "ETag 和 If-None-Match",
              "heading": "etag-和-if-none-match"
            },
            {
              "depth": 2,
              "value": "两种缓存策略的执行机制",
              "heading": "两种缓存策略的执行机制"
            },
            {
              "depth": 2,
              "value": "缓存的位置",
              "heading": "缓存的位置"
            },
            {
              "depth": 3,
              "value": "Service Worker",
              "heading": "service-worker"
            },
            {
              "depth": 3,
              "value": "Memory Cache",
              "heading": "memory-cache"
            },
            {
              "depth": 3,
              "value": "Disk Cache",
              "heading": "disk-cache"
            },
            {
              "depth": 3,
              "value": "Push Cache",
              "heading": "push-cache"
            },
            {
              "depth": 2,
              "value": "用户行为对缓存的影响",
              "heading": "用户行为对缓存的影响"
            }
          ],
          "nav": {
            "path": "/interview",
            "title": "Interview"
          },
          "group": {
            "path": "/interview/http",
            "title": "HTTP"
          }
        },
        "title": "http缓存是什么 - 前端平头哥"
      },
      {
        "path": "/interview/http/tls-ssl的加密过程",
        "component": require('D:/lee/badger-ui/docs/interview/HTTP/TLS-SSL的加密过程.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/interview/HTTP/TLS-SSL的加密过程.md",
          "updatedTime": 1693215121000,
          "title": "TLS/SSL的加密过程",
          "slugs": [
            {
              "depth": 4,
              "value": "散列函数",
              "heading": "散列函数"
            },
            {
              "depth": 4,
              "value": "对称加密",
              "heading": "对称加密"
            },
            {
              "depth": 4,
              "value": "非对称加密",
              "heading": "非对称加密"
            },
            {
              "depth": 4,
              "value": "TLS/SSL 加密的过程",
              "heading": "tlsssl-加密的过程"
            }
          ],
          "nav": {
            "path": "/interview",
            "title": "Interview"
          },
          "group": {
            "path": "/interview/http",
            "title": "HTTP"
          }
        },
        "title": "TLS/SSL的加密过程 - 前端平头哥"
      },
      {
        "path": "/interview/vue系列/vue的ssr是如何实现的",
        "component": require('D:/lee/badger-ui/docs/interview/vue系列/vue的SSR是如何实现的.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/interview/vue系列/vue的SSR是如何实现的.md",
          "updatedTime": 1693215121000,
          "title": "Vue的SSR是如何实现的",
          "slugs": [
            {
              "depth": 2,
              "value": "vue 如何实现 SSR",
              "heading": "vue-如何实现-ssr"
            },
            {
              "depth": 2,
              "value": "总结",
              "heading": "总结"
            }
          ],
          "nav": {
            "path": "/interview",
            "title": "Interview"
          },
          "group": {
            "path": "/interview/vue系列",
            "title": "Vue系列"
          }
        },
        "title": "Vue的SSR是如何实现的 - 前端平头哥"
      },
      {
        "path": "/interview/其他/单点登录是什么",
        "component": require('D:/lee/badger-ui/docs/interview/其他/单点登录是什么.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/interview/其他/单点登录是什么.md",
          "updatedTime": 1693215121000,
          "title": "单点登录是什么",
          "slugs": [
            {
              "depth": 2,
              "value": "单点登录",
              "heading": "单点登录"
            },
            {
              "depth": 2,
              "value": "如何实现",
              "heading": "如何实现"
            },
            {
              "depth": 3,
              "value": "同域名下的单点登录",
              "heading": "同域名下的单点登录"
            },
            {
              "depth": 3,
              "value": "不同域名下的单点登录",
              "heading": "不同域名下的单点登录"
            },
            {
              "depth": 3,
              "value": "前端完成的不同域单点登录",
              "heading": "前端完成的不同域单点登录"
            },
            {
              "depth": 2,
              "value": "登录流程",
              "heading": "登录流程"
            }
          ],
          "nav": {
            "path": "/interview",
            "title": "Interview"
          },
          "group": {
            "path": "/interview/其他",
            "title": "其他"
          }
        },
        "title": "单点登录是什么 - 前端平头哥"
      },
      {
        "path": "/interview/其他/移动端长列表优化",
        "component": require('D:/lee/badger-ui/docs/interview/其他/移动端长列表优化.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/interview/其他/移动端长列表优化.md",
          "updatedTime": 1693215121000,
          "title": "移动端长列表优化",
          "slugs": [
            {
              "depth": 2,
              "value": "什么是虚拟列表",
              "heading": "什么是虚拟列表"
            },
            {
              "depth": 2,
              "value": "为什么需要",
              "heading": "为什么需要"
            },
            {
              "depth": 2,
              "value": "实现原理",
              "heading": "实现原理"
            }
          ],
          "nav": {
            "path": "/interview",
            "title": "Interview"
          },
          "group": {
            "path": "/interview/其他",
            "title": "其他"
          }
        },
        "title": "移动端长列表优化 - 前端平头哥"
      },
      {
        "path": "/interview/前端工程化/webpack构建流程",
        "component": require('D:/lee/badger-ui/docs/interview/前端工程化/webpack构建流程.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/interview/前端工程化/webpack构建流程.md",
          "updatedTime": 1693215121000,
          "title": "webpack构建流程",
          "slugs": [
            {
              "depth": 2,
              "value": "运行流程",
              "heading": "运行流程"
            },
            {
              "depth": 3,
              "value": "初始化流程",
              "heading": "初始化流程"
            },
            {
              "depth": 3,
              "value": "编译流程",
              "heading": "编译流程"
            },
            {
              "depth": 4,
              "value": "compile 编译",
              "heading": "compile-编译"
            },
            {
              "depth": 4,
              "value": "make 编译模块",
              "heading": "make-编译模块"
            },
            {
              "depth": 4,
              "value": "build module 完成模块编译",
              "heading": "build-module-完成模块编译"
            },
            {
              "depth": 3,
              "value": "输出流程",
              "heading": "输出流程"
            },
            {
              "depth": 4,
              "value": "seal 输出资源",
              "heading": "seal-输出资源"
            },
            {
              "depth": 4,
              "value": "emit 输出完成",
              "heading": "emit-输出完成"
            },
            {
              "depth": 2,
              "value": "总结",
              "heading": "总结"
            }
          ],
          "nav": {
            "path": "/interview",
            "title": "Interview"
          },
          "group": {
            "path": "/interview/前端工程化",
            "title": "前端工程化"
          }
        },
        "title": "webpack构建流程 - 前端平头哥"
      },
      {
        "path": "/interview/前端工程化/对webpack的理解",
        "component": require('D:/lee/badger-ui/docs/interview/前端工程化/对webpack的理解.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/interview/前端工程化/对webpack的理解.md",
          "updatedTime": 1693215121000,
          "title": "对webpack的理解",
          "slugs": [
            {
              "depth": 2,
              "value": "背景",
              "heading": "背景"
            },
            {
              "depth": 3,
              "value": "模块化",
              "heading": "模块化"
            },
            {
              "depth": 2,
              "value": "问题",
              "heading": "问题"
            },
            {
              "depth": 2,
              "value": "webpack 是什么",
              "heading": "webpack-是什么"
            },
            {
              "depth": 2,
              "value": "webpack 的能力",
              "heading": "webpack-的能力"
            }
          ],
          "nav": {
            "path": "/interview",
            "title": "Interview"
          },
          "group": {
            "path": "/interview/前端工程化",
            "title": "前端工程化"
          }
        },
        "title": "对webpack的理解 - 前端平头哥"
      },
      {
        "path": "/interview/小程序/微信小程序如何实现分包配置",
        "component": require('D:/lee/badger-ui/docs/interview/小程序/微信小程序如何实现分包配置.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/interview/小程序/微信小程序如何实现分包配置.md",
          "updatedTime": 1693215121000,
          "title": "微信小程序如何实现分包配置",
          "slugs": [
            {
              "depth": 2,
              "value": "分包是什么",
              "heading": "分包是什么"
            },
            {
              "depth": 2,
              "value": "分包的构成",
              "heading": "分包的构成"
            },
            {
              "depth": 2,
              "value": "为什么需要分包",
              "heading": "为什么需要分包"
            },
            {
              "depth": 2,
              "value": "分包配置",
              "heading": "分包配置"
            },
            {
              "depth": 2,
              "value": "独立分包",
              "heading": "独立分包"
            },
            {
              "depth": 2,
              "value": "分包预备加载",
              "heading": "分包预备加载"
            },
            {
              "depth": 2,
              "value": "分包异步化",
              "heading": "分包异步化"
            }
          ],
          "nav": {
            "path": "/interview",
            "title": "Interview"
          },
          "group": {
            "path": "/interview/小程序",
            "title": "小程序"
          }
        },
        "title": "微信小程序如何实现分包配置 - 前端平头哥"
      },
      {
        "path": "/interview/小程序/微信小程序的实现原理",
        "component": require('D:/lee/badger-ui/docs/interview/小程序/微信小程序的实现原理.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/interview/小程序/微信小程序的实现原理.md",
          "updatedTime": 1693215121000,
          "title": "微信小程序的实现原理",
          "slugs": [
            {
              "depth": 2,
              "value": "通信",
              "heading": "通信"
            },
            {
              "depth": 2,
              "value": "运行机制",
              "heading": "运行机制"
            }
          ],
          "nav": {
            "path": "/interview",
            "title": "Interview"
          },
          "group": {
            "path": "/interview/小程序",
            "title": "小程序"
          }
        },
        "title": "微信小程序的实现原理 - 前端平头哥"
      },
      {
        "path": "/interview/小程序/微信小程序的支付流程",
        "component": require('D:/lee/badger-ui/docs/interview/小程序/微信小程序的支付流程.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/interview/小程序/微信小程序的支付流程.md",
          "updatedTime": 1693215121000,
          "title": "微信小程序的支付流程",
          "slugs": [
            {
              "depth": 2,
              "value": "操作步骤",
              "heading": "操作步骤"
            },
            {
              "depth": 2,
              "value": "支付流程",
              "heading": "支付流程"
            }
          ],
          "nav": {
            "path": "/interview",
            "title": "Interview"
          },
          "group": {
            "path": "/interview/小程序",
            "title": "小程序"
          }
        },
        "title": "微信小程序的支付流程 - 前端平头哥"
      },
      {
        "path": "/interview/小程序/微信小程序的登录流程",
        "component": require('D:/lee/badger-ui/docs/interview/小程序/微信小程序的登录流程.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/interview/小程序/微信小程序的登录流程.md",
          "updatedTime": 1693215121000,
          "title": "微信小程序的登录流程",
          "slugs": [
            {
              "depth": 2,
              "value": "流程",
              "heading": "流程"
            },
            {
              "depth": 2,
              "value": "详细流程",
              "heading": "详细流程"
            }
          ],
          "nav": {
            "path": "/interview",
            "title": "Interview"
          },
          "group": {
            "path": "/interview/小程序",
            "title": "小程序"
          }
        },
        "title": "微信小程序的登录流程 - 前端平头哥"
      },
      {
        "path": "/leetcode/经典案例/爬楼梯",
        "component": require('D:/lee/badger-ui/docs/leetcode/经典案例/爬楼梯.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/leetcode/经典案例/爬楼梯.md",
          "updatedTime": 1693215121000,
          "title": "70.爬楼梯",
          "slugs": [],
          "nav": {
            "path": "/leetcode",
            "title": "Leetcode"
          },
          "group": {
            "path": "/leetcode/经典案例",
            "title": "经典案例"
          }
        },
        "title": "70.爬楼梯 - 前端平头哥"
      },
      {
        "path": "/program",
        "component": require('D:/lee/badger-ui/docs/program/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/program/index.md",
          "updatedTime": 1693215121000,
          "title": "官网地址",
          "slugs": [],
          "nav": {
            "path": "/program",
            "title": "Program"
          }
        },
        "title": "官网地址 - 前端平头哥"
      },
      {
        "path": "/program/program",
        "component": require('D:/lee/badger-ui/docs/program/program.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/program/program.md",
          "updatedTime": 1693215121000,
          "title": "实用网站和项目",
          "slugs": [],
          "nav": {
            "path": "/program",
            "title": "Program"
          }
        },
        "title": "实用网站和项目 - 前端平头哥"
      },
      {
        "path": "/study",
        "component": require('D:/lee/badger-ui/docs/study/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/study/index.md",
          "updatedTime": 1693215121000,
          "title": "学习进阶概览",
          "slugs": [
            {
              "depth": 2,
              "value": "学习进阶概览",
              "heading": "学习进阶概览"
            }
          ],
          "nav": {
            "path": "/study",
            "title": "Study"
          }
        },
        "title": "学习进阶概览 - 前端平头哥"
      },
      {
        "path": "/components",
        "meta": {},
        "exact": true,
        "redirect": "/components/captions"
      },
      {
        "path": "/code/vue2核心源码",
        "meta": {},
        "exact": true,
        "redirect": "/code/vue2核心源码/虚拟dom篇之diff过程"
      },
      {
        "path": "/code",
        "meta": {},
        "exact": true,
        "redirect": "/code/vue2核心源码/虚拟dom篇之diff过程"
      },
      {
        "path": "/interview/http",
        "meta": {},
        "exact": true,
        "redirect": "/interview/http/http三次握手和四次挥手"
      },
      {
        "path": "/interview/vue系列",
        "meta": {},
        "exact": true,
        "redirect": "/interview/vue系列/vue的ssr是如何实现的"
      },
      {
        "path": "/interview/其他",
        "meta": {},
        "exact": true,
        "redirect": "/interview/其他/单点登录是什么"
      },
      {
        "path": "/interview/前端工程化",
        "meta": {},
        "exact": true,
        "redirect": "/interview/前端工程化/webpack构建流程"
      },
      {
        "path": "/interview/小程序",
        "meta": {},
        "exact": true,
        "redirect": "/interview/小程序/微信小程序如何实现分包配置"
      },
      {
        "path": "/leetcode/经典案例",
        "meta": {},
        "exact": true,
        "redirect": "/leetcode/经典案例/爬楼梯"
      },
      {
        "path": "/leetcode",
        "meta": {},
        "exact": true,
        "redirect": "/leetcode/经典案例"
      }
    ],
    "title": "前端平头哥",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
