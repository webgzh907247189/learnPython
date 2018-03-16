# 学习计划与练习

## 计划

[JavaScript 标准参考教程 2.1 ~ 2.7](http://javascript.ruanyifeng.com/grammar/basic.html)

## 练习

> 注：习题范围不局限于计划的内容，需要在掌握计划内容的基础上延伸思考。

### 1.数值的相等

设计一个 `equal` 函数，在一定精度范围内对参数进行数值相等比较。

输入与输出：

```js
/**
 * @param {Number} x 将要比较的数值。
 * @param {Number} y 将要比较的数值。
 * @param {?} 若需要其他参数，可自行设计。
 * @returns {Boolean} x 与 y 是否在精度范围内相等
*/
```

输出例子：

```js
equal(1, 1) // true
equal(1, 2) // false
equal(0.2 + 0.1 , 0.3) // true
equal(0.2 * 0.1 , 0.02) // true
```

### 2.收集英文段落中的单词，首字母按 A-Z 排序

设计一个 `dictionary` 函数，收集英文段落中的单词，并按 A-Z 排序。

输入与输出：

```js
/**
 * @param {String} source 源段落文本。
 * @param {?} 若需要其他参数，可自行设计。
 * @returns {Array} 排序后的数组
*/
```

输出例子：

```js
var source = `Since his code is opensource, I have decided to fix it and integrate it into my extension SteemPlus. Our code structures being very different, this was a two men jobs for several weeks but we're finally done.`
dictionary(source);
// ["A", "And", "Being"... "Since", "SteemPlus.", "Structures", "This", "To", "Two", "Very", "Was", "We're", "Weeks"]
```

### 3. 获取属性

设计一个 `get` 函数，获取对象上某个属性的值，若没有，返回 `undefined`。

输入与输出：

```js
/**
 * @param {Object} obj 目标对象。
 * @param {String} 目标属性名。
 * @param {?} 若需要其他参数，可自行设计。
 * @returns {All} 目标值。
*/
```

输出例子：

```js
var someObj = {
    a: {
        b: 123
    },
    b: 456
};
get(someObj, 'b'); // 456
get(someObj, 'c'); // undefined
get(someObj, 'a.b'); // 123
get(someObj, 'a.b.c.d'); // undefined
```

### 4. forEach

设计一个 `forEach` 函数，行为与数组 forEach 一致。

输入与输出：

```js
/**
 * @param {Array|Object} arr 目标数组或类数组。
 * @param {Function} 循环操作。
 * @param {?} 若需要其他参数，可自行设计。
 * @returns {undefined}
*/
```

输出例子：

```js
var someArr = [1,2,3];
var anotherArr = [{
    key: 'foo'
}, {
    key: 'bar'
}];
var arrLike = {
    '0': 'foo',
    '1': 'bar',
    '2': 'baz',
    'lengh': 3
}

forEach(someArr, (v) => {
    console.log(v);
});
// 1
// 2
// 3
forEach(anotherArr, (v) => {
    console.log(v.key);
});
// foo
// bar
forEach(arrLike, (v.key) => {
    console.log(v)
});
// foo
// bar
// baz
```

### 5. sum

设计一个 `sum` 函数，实现不定参数累加。

输入与输出：

```js
/**
 * @param {Number|String} adder 累加数或字符串。
 * @param {?} 若需要其他参数，可自行设计。
 * @returns {Number|String} 累加结果
*/
```

输出例子：

```js
sum() //0
sum(1) //1
sum(1, -2, 3) //2

var times = Math.floor(Math.random() * 10);
var args = [];
for(var idx = 0; idx < times; idx++) {
    args.push(1);
}
sum(...args) // 如果 times 随机为 3，则输出结果为 3 。
```

### 6. 类型判断

设计一个 `getType` 函数，获取任意值的类型。

输入与输出：

```js
/**
 * @param {ALL} target 累加数或字符串。
 * @param {?} 若需要其他参数，可自行设计。
 * @returns {String} 目标的类型
*/
```

输出例子：

```js
getType(1); //"Number"
getType('1'); //"String"
getType({}); //"Object"
getType([]); //"Array"
getType(null); //"null"
getType(() => {}); //"function"

//...
```