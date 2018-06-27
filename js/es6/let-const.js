/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/6/27 下午1:15
 * @description
 *
 * 最佳实践：
 * 在我们开发的时候，可能认为应该默认使用 let 而不是 var ，这种情况下，对于需要写保护的变量要使用 const。然而另一种做法日益普及：默认使用 const，只有当确实需要改变变量的值的时候才使用 let。这是因为大部分的变量的值在初始化后不应再改变，而预料之外的变量之的改变是很多 bug 的源头。
 *
 */

/* name module */

// 涉及到的TDZ （Temporal Dead Zone） 临时死区
// JavaScript 引擎在扫描代码发现变量声明时，要么将它们提升到作用域顶部(遇到 var 声明)，要么将声明放在 TDZ 中(遇到 let 和 const 声明)。访问 TDZ 中的变量会触发运行时错误。只有执行过变量声明语句后，变量才会从 TDZ 中移出，然后方可访问。

// let 和 const 声明的变量不会被提升到作用域顶部，如果在声明之前访问这些变量，会导致报错：

// console.log(typeof value); // Uncaught ReferenceError: value is not defined
let value = 1;

(function() {
  for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
  }
}());
// abc
// abc
// abc

(function () {
  for (var i = 0; i < 3; i++) {
    var i = 'abc';
    console.log(i);
  }
}());
// abc

// 'abc' ++ --> NaN



