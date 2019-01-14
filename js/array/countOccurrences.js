/**
 *
 * @authors liwb (you@example.org)
 * @date    2019-01-14 10:24
 * @description 计数数组中某个值的出现次数
 * 每次遇到数组中的某个特定值时，使用 Array.reduce() 来递增计数器。
 */

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a + 0), 0);

countOccurrences([1, 1, 2, 1, 2, 3], 1);
// 3
