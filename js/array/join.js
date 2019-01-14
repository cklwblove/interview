/**
 *
 * @authors liwb (lwbhtml@163.com)
 * @date    2019-01-14 11:46
 * @description 将数组的所有元素拼接成一个字符串
 * 将数组的所有元素拼接成一个字符串并返回此字符串。 使用分隔符和结束分隔符。
 * 使用 Array.reduce() 将元素拼接成一个字符串。 省略第二个参数 separator ，则默认使用分隔符','。 省略第三个参数 end ，默认使用与separator相同的值。
 * @link https://www.css88.com/30-seconds-of-code/
 * @version 1.0.0
 */

const join = (arr, separator = ',', end = separator) =>
  arr.reduce(
    (acc, val, i) =>
      i == arr.length - 2
        ? acc + val + end
        : i == arr.length - 1 ? acc + val : acc + val + separator,
    ''
  );

join(['pen', 'pineapple', 'apple', 'pen'], ',', '&'); // "pen,pineapple,apple&pen"
join(['pen', 'pineapple', 'apple', 'pen'], ','); // "pen,pineapple,apple,pen"
join(['pen', 'pineapple', 'apple', 'pen']); // "pen,pineapple,apple,pen"
