/**
 *
 * @authors liwb (lwbhtml@163.com)
 * @date    2019-01-14 11:47
 * @description 将数组的值映射到对象
 * 使用一个函数将数组的值映射到对象，其键值对中，原始值作为键，映射值作为值。
 * 使用一个匿名的内部函数作用域来声明一个 undefined 的内存空间，使用闭包来存储返回值。 使用一个新的 Array 来存储带有函数映射的数组和一个逗号运算符来返回第二个步骤，而不需要从一个上下文移动到另一个上下文（由于闭包和操作顺序）。
 * @link https://www.css88.com/30-seconds-of-code/
 * @version 1.0.0
 */

const mapObject = (arr, fn) =>
  (a => (
    (a = [arr, arr.map(fn)]), a[0].reduce((acc, val, ind) => ((acc[val] = a[1][ind]), acc), {})
  ))();

const squareIt = arr => mapObject(arr, a => a * a);
squareIt([1, 2, 3]); // { 1: 1, 2: 4, 3: 9 }

 
