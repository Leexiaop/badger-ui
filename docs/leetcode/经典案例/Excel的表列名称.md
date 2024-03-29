---
title: 168.Excel的表列名称
---

`难度：`简单

`题目：`给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。

`思路：`

-   核心思路是 10 进制转 N（26） 进制
-   难点是处理进位的问题，因为没有 0，所以要用 Z 来表示 10 的情况
-   可以巧妙的可以建立数字和 （A-Z）ASCII 的映射关系

`答案：`

```js
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (n) {
	let results = [],
		num = n;
	do {
		const quotient = Math.floor(num / 26);
		const remainder = num % 26;

		num = remainder === 0 ? quotient - 1 : quotient;
		results.unshift(remainder === 0 ? 26 : remainder);
	} while (num);

	return results.map((item) => String.fromCharCode(64 + item)).join('');
};
```
