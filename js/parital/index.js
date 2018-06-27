/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/6/26 下午5:28
 * @description 偏函数
 * 在计算机科学中，局部应用是指固定一个函数的一些参数，然后产生另一个更小元的函数。

 什么是元？元是指函数参数的个数，比如一个带有两个参数的函数被称为二元函数。
 */

/* name module */

function partial(fn) {
  var args = [].slice.call(arguments, 1);
  return function() {
    var newArgs = args.concat([].slice.call(arguments));
    return fn.apply(this, newArgs);
  };
};
