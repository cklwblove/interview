/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/6/8 下午4:51
 * @description 数字取整
 */

// 普通版 parseInt
var a = parseInt(2.3333);
// 2

// 进阶版  Math.trunc (IE不支持)
var a = Math.trunc(2.3333);
// 2
// 其实现原理就是
Math.trunc = Math.trunc || function (number) {
 if (isNaN(number)) {
   return NaN;
 }

 if (number > 0) {
   return Math.floor(number);
 }

 return Math.ceil(number);
}

// 黑科技版  ~~number
console.log(~~2.3333);
// -> 2
console.log(~~1.9999);
// -> 1
console.log(~~3);
// -> 3
console.log(~~[]);
// -> 0
console.log(~~NaN);
// -> 0
console.log(~~null);
// -> 0

// 按位或(OR) number | 0
console.log(2.333|0);
// -> 2
console.log(20.15|0);
// -> 20
console.log((-20.15)|0);
// -> -20

// 按位异或(XOR) number ^ 0
console.log(2.333^0);
// -> 2
console.log(20.15^0);
// -> 20
console.log((-20.15)^0);
// -> -20

// 左移 number << 0
console.log(20.15 << 0);
// -> 20
console.log((-20.15) << 0);
// -> -20
console.log(3000000000.15 << 0);
// -> -1294967296
