/**
 *
 * @authors liwb (lwbhtml@163.com)
 * @date    2019-01-14 11:40
 * @description 返回指定元素的所有索引
 * 返回数组中所有 val 的索引。 如果 val 从不出现，则返回 [] 。
 * 使用 Array.forEach() 循环元素和 Array.push() 来存储匹配元素的索引。 返回索引数组。
 * @version 1.0.0
 */

const indexOfAll = (arr, val) => {
  const indices = [];
  arr.forEach((el, i) => el === val && indices.push(i));
  return indices;
};

indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
indexOfAll([1, 2, 3], 4); // []
