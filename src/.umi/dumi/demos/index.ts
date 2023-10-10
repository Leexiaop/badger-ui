// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';

export default {
  'Captions-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("D:/lee/badger-ui/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _badgerUi = require("badger-ui");

  var _default = function _default() {
    var list = ['那一刻，我升起风马不为乞福，只为守候你的到来', '那一日，垒起玛尼堆不为修德，只为投下心湖的石子', '那一夜，我听了一宿梵唱不为参悟，只为寻你的一丝气息；', '那一月，我摇动所有的经筒不为超度，只为触摸你的指尖；', '那一年，磕长头匍匐在山路不为觐见，只为贴着你的温暖；', '那一世，转山转水转佛塔啊不为修来生，只为途中与你相见；', '那一瞬，我飞升成仙，不为长生，只为佑你平安喜乐。'];
    return /*#__PURE__*/_react["default"].createElement(_badgerUi.Captions, {
      list: list
    });
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Captions } from 'badger-ui';\n\nexport default () => {\n\tconst list = [\n\t\t'那一刻，我升起风马不为乞福，只为守候你的到来',\n\t\t'那一日，垒起玛尼堆不为修德，只为投下心湖的石子',\n\t\t'那一夜，我听了一宿梵唱不为参悟，只为寻你的一丝气息；',\n\t\t'那一月，我摇动所有的经筒不为超度，只为触摸你的指尖；',\n\t\t'那一年，磕长头匍匐在山路不为觐见，只为贴着你的温暖；',\n\t\t'那一世，转山转水转佛塔啊不为修来生，只为途中与你相见；',\n\t\t'那一瞬，我飞升成仙，不为长生，只为佑你平安喜乐。',\n\t];\n\treturn <Captions list={list} />;\n};"}},"dependencies":{},"title":"基础用法","description":"<div class=\"markdown\"><p>只需要传入一个list数组即可。</p></div>","identifier":"Captions-demo"},
  },
  'Captions-demo-1': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("D:/lee/badger-ui/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _badgerUi = require("badger-ui");

  var _default = function _default() {
    var str = '那一刻，我升起风马不为乞福，只为守候你的到来；那一日，垒起玛尼堆不为修德，只为投下心湖的石子；那一夜，我听了一宿梵唱不为参悟，只为寻你的一丝气息；那一月，我摇动所有的经筒不为超度，只为触摸你的指尖；那一年，磕长头匍匐在山路不为觐见，只为贴着你的温暖；那一世，转山转水转佛塔啊不为修来生，只为途中与你相见；那一瞬，我飞升成仙，不为长生，只为佑你平安喜乐。';
    return /*#__PURE__*/_react["default"].createElement(_badgerUi.Captions, null, str);
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Captions } from 'badger-ui';\n\nexport default () => {\n\tconst str =\n\t\t'那一刻，我升起风马不为乞福，只为守候你的到来；那一日，垒起玛尼堆不为修德，只为投下心湖的石子；那一夜，我听了一宿梵唱不为参悟，只为寻你的一丝气息；那一月，我摇动所有的经筒不为超度，只为触摸你的指尖；那一年，磕长头匍匐在山路不为觐见，只为贴着你的温暖；那一世，转山转水转佛塔啊不为修来生，只为途中与你相见；那一瞬，我飞升成仙，不为长生，只为佑你平安喜乐。';\n\treturn <Captions>{str}</Captions>;\n};"}},"dependencies":{},"title":"插槽用法","description":"<div class=\"markdown\"><p>不传入list数组，只要需要滚动的文字用组件包裹即可，可以做新闻的字幕。</p></div>","identifier":"Captions-demo-1"},
  },
  'Lottery-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("D:/lee/badger-ui/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

  var _react = _interopRequireDefault(require("react"));

  var _badgerUi = require("badger-ui");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement(_badgerUi.Lottery, {
      title: "\u62BD\u5956"
    });
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Lottery } from 'badger-ui';\n\nexport default () => <Lottery title=\"抽奖\" />;"}},"dependencies":{"react":{"version":"18.2.0"},"badger-ui":{"version":"1.0.0"}},"componentName":"Lottery","identifier":"Lottery-demo"},
  },
};
