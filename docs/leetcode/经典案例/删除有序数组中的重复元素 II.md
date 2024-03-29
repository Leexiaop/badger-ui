---
title: 80.删除有序数组中的重复元素 II
---

`难度：`中等

`题目：`给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使得出现次数超过两
次的元素只出现两次 ，返回删除后数组的新长度。不要使用额外的数组空间，你必须在 原
地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

`说明：` 为什么返回数值是整数，但输出的答案是数组呢？请注意，输入数组是以「引用
」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

```java
// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
int len = removeDuplicates(nums);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```

`思路：`双指针

-   题目中要求，出现俩次，而且要求只能原地删除，所以，我们就可以用双指针法。因为
    是有序数组且是出现俩次，所以，我们指针就从 2 开始，那么如果 nums[slow - 2]
    !== nums[false],那么就说明 nums[slow]已经重复，此时要将 nums[slow]更新为
    nums[fast]

`答案：`

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	if (nums.length <= 2) return nums.length;
	let slow = 2,
		fast = 2;
	while (fast < nums.length) {
		if (nums[slow - 2] !== nums[fast]) {
			nums[slow] = nums[fast];
			slow++;
		}
		fast++;
	}
	return slow;
};
```

`解析:` const nums = [1, 1, 1, 2, 2, 3];

-   第一次循环，nums[0] === nums[2],跳过 if
-   第二次循环，nums[0] !== nums[3],此时说明 nums[2]是一个多于俩次的重复项，所以
    ，将 nums[3]覆盖 nums[2] 以此类推...
