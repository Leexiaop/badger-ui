---
title: 模版编译篇之文本解析器
---

在 HTML 解析器阶段，我们讲过，当解析道文本解析器的时候，会调用勾子函数 char 函数
，而 char 函数会判断文本中是否包含变量，而创建不通的 AST 树。

```js
// 当解析到标签的文本时，触发chars
chars (text) {
    if(res = parseText(text)){
        let element = {
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text
        }
    } else {
        let element = {
            type: 3,
            text
        }
    }
}
```

我们可以看到，当 type = 2 时为含有变量的文本，而 type = 3 时为不含有变量的文本。
