---
title: 基础数据类型
---

Typescript 的基础数据类型和 JavaScript 的基础数据类型基本一样。

### 布尔值

值为 true 或者是 false 的就是布尔值，这在其他语言里也一样。

```typescript
let isDone: boolean = true;
```

### 数字

Typescript 里的数都是浮点数，都是 number 类型，除了支持十进制和十六进制，还支持
了二进制和八进制。

```typescript
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
```

### 字符串

用双引号（""）或者是单引号（''）表示的内容就是字符串，string。

```typescript
let name: string = 'xiaoming';
```

还可以通过反引号（``）定义模版字符串：

```typescript
let name: string = '小米';
let sentence: string = `他的名字叫:${name}`; //  他的名字叫:小米
```

### 数组

定义数组的方式有俩种：

-   第一种可以在元素类型后面接上[],表示由此类型元素组成的一个数组

```typescript
let list: number[] = [1, 2, 3];
```

-   第二种可以使用数组泛型，Array<元素类型>

```typescript
let list: Array<number> = [1, 2, 3];
```
