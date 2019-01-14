/**
 *
 * @authors liwb (you@example.org)
 * @date    2019-01-14 10:21
 * @description 过滤掉数组中所有假值元素
 * 从数组中移除 falsey 值元素。
 * 使用 Array.filter() 过滤掉数组中所有 假值元素(false, null, 0, "", undefined, 和 NaN)。
 */

const compact = arr => arr.filter(Boolean);

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]);
// [ 1, 2, 3, 'a', 's', 34 ]

