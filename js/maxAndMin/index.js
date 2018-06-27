/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/6/22 上午11:24
 * @description 数组中的最大值和最小值
 * Math.max()
 * Math.min()
 */

/* name module */
// 注意:
// 1,数组中的值不为 number 的时候，则会得到 NaN
// 2,max 是 Math 的静态方法，所以应该像这样使用：Math.max()，而不是作为 Math 实例的方法 (简单的来说，就是不使用 new )
// 3,如果没有参数，则结果为 -Infinity (注意是负无穷大)

Math.max(true, 0) // 1
Math.max(true, '2', null) // 2
Math.max(1, undefined) // NaN
Math.max(1, {}) // NaN

var min = Math.min();
var max = Math.max();
// console.log(min > max);
// Infinity > -Infinity

// 第一版，循环遍历
var arr = [6, 4, 8, 2, 0, 1];
// var result = arr[0];
// for (var i = 0; i < arr.length; i++) {
//   result = Math.max(result, arr[i]);
// }
// console.log(result);

// 第二版，reduce
function max(prev, next) {
  return Math.max(prev, next);
}

console.log(arr.reduce(max))

//
function Max(array) {
  return array.reduce((a, b) => a > b ? a : b)
}

// // 排序
// arr.sort(function(a,b){return a - b;});
// // 取最后一个
// console.log(arr[arr.length - 1])
//
// // apply
// console.log(Math.max.apply(null, arr));
//
// // es6
// // 扩展运算符(...)可以将一个数组变为参数序列
// console.log(Math.max(...arr))

