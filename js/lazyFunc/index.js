/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/6/26 下午5:47
 * @description 惰性函数
 * 惰性函数就是解决每次都要进行判断的这个问题，解决原理很简单，重写函数。
 * 当我们每次都需要进行条件判断，其实只需要判断一次，接下来的使用方式都不会发生改变的时候，想想是否可以考虑使用惰性函数。
 */

/* name module */

// 写一个 foo 函数，这个函数返回首次调用时的 Date 对象，注意是首次。
// var foo = function() {
//   var t = new Date();
//   foo = function() {
//     return t;
//   };
//   return foo();
// };

// 闭包形式
var foo = (function () {
  var t = new Date();
  // 只执行一次
  console.log(123);
  return function () {
     return t;
  }
})();
console.log(foo());
console.log(foo());
