/**
 *
 * @authors liwb (you@example.org)
 * @date    2019-01-14 10:47
 * @description 过滤掉数组中的非唯一值
 * 使用 Array.filter() 滤除掉非唯一值，使数组仅包含唯一值。
 */

const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

filterNonUnique([1, 2, 2, 3, 4, 4, 5]);
// [1,3,5]
