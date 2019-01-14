/**
 *
 * @authors liwb (you@example.org)
 * @date    2019-01-14 10:47
 * @description 删除数组中的元素
 * 删除数组中的元素，直到传递的函数返回 true 。 返回数组中的其余元素。
 * 循环访问数组，使用 Array.slice() 在数组中从第一个元素开始删除，直到函数的返回值为 true。 返回其余的元素。
 */

const dropElements = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

dropElements([1, 2, 3, 4], n => n >= 3);
// [3,4]
