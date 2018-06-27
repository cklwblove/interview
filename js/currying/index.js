/**
 *
 * @authors liwb (you@example.org)
 * https://github.com/mqyqingfeng/Blog/issues/42
 * @date    2018/6/26 下午1:23
 * @description 柯里化
 * 在数学和计算机科学中，柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
 * 参数复用，降低通用性，提高适用性
 * 简单理解：用闭包把参数保存起来，当参数的数量足够执行函数了，就开始执行函数，没有毛病
 */

/* name module */
// 第二版
// 用函数包裹原函数，然后给原函数传入之前的参数，当执行 fn0(...)(...) 的时候，执行包裹函数，返回原函数，然后再调用 sub_curry 再包裹原函数，然后将新的参数混合旧的参数再传入原函数，直到函数参数的数目达到要求为止。
//
function sub_curry(fn) {
  var args = [].slice.call(arguments, 1);
  return function() {
    return fn.apply(this, args.concat([].slice.call(arguments)));
  };
}

function curry(fn, length) {

  length = length || fn.length;

  var slice = Array.prototype.slice;

  return function() {
    if (arguments.length < length) {
      var combined = [fn].concat(slice.call(arguments));
      return curry(sub_curry.apply(this, combined), length - arguments.length);
    } else {
      return fn.apply(this, arguments);
    }
  };
}

var person = [
  {
    name: 'kevin'
  },
  {
    name: 'daisy'
  }
];

var prop = curry(function (key, obj) {
   return obj[key];
});

console.log();
var name = person.map(prop('name'));
//
console.log('name', name);

// 简单实现方式
function curry(fn, args) {
  var length = fn.length;

  args = args || [];

  return function() {

    var _args = args.slice(0),

      arg, i;

    for (i = 0; i < arguments.length; i++) {

      arg = arguments[i];

      _args.push(arg);

    }
    if (_args.length < length) {
      return curry.call(this, fn, _args);
    }
    else {
      return fn.apply(this, _args);
    }
  }
}


// es6 高颜值写法
var curry = fn =>
  judge = (...args) =>
    args.length === fn.length
      ? fn(...args)
      : (arg) => judge(...args, arg);



