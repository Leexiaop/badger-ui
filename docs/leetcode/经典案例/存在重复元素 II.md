---
title: 219.存在重复元素 II
---

`难度：`简单

`题目：`给你一个整数数组  nums 和一个整数  k ，判断数组中是否存在两个 不同的索引
 i  和  j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；
否则，返回 false 。

`思路：`哈希表法

-   从题目中可以看出，这又是一个统计次数的题，那么请不要犹豫，一定是哈希表法，另
    外，看到某俩个值的绝对值小于某个数，是不是联想到
    了[俩数之和](https://leetcode.cn/problems/two-sum/),是的，没有错
-   创建 map,其 key 是数组中的元素，value 是元素对应的下标，当我们发现某个元素的
    已经存在于 map 中，并且，我们用当前元素的下标减去 map 中等于当前元素的下标，
    他们的差值小于 k 的时候，我们就认为满足条件，return true.

`答案：`

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
	let map = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
			return true;
		}
		map.set(nums[i], i);
	}
	return false;
};
```
