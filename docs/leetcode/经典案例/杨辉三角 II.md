---
title: 119.杨辉三角 II
---

`难度：`简单

`题目：`给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。在「杨辉三
角」中，每个数是它左上方和右上方的数的和。

`思路：`

-   因为创建杨辉三角是从第 0 行开始的，所以，我们创建一个 rowIndex 行的杨辉三角
    ，然后返回第 rowIndex 即可
-   三角的俩边都是 1，而中间的数字，等于上一行的俩个数字的和，即 row[i] =
    result[i-1][j-1] + result[i-1][j]

`答案：`

```js
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
	let res = [];
	for (let i = 0; i < numRows + 1; i++) {
		let rows = new Array(i + 1).fill(1);
		for (let j = 1; j < rows.length - 1; j++) {
			rows[j] = res[i - 1][j - 1] + res[i - 1][j];
		}
		res.push(rows);
	}
	return res[numRows];
};
```

`解析：`

-   首先，我们要声明一个数组 res，用来保存生成的杨辉三角
-   根据参数 numRows，来生成 numRows 行的杨辉三角
-   遍历 numRows，我们先生成一个每一行都为 1 的数组
-   遍历每一行，根据公式修改每一行的数
-   最后返回结果
