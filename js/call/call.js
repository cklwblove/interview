/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/6/11 下午1:39
 * @description 模拟实现call
 * 原生call
 * 改变this的指向，当参数为 null 的时候，指向 window
 */

/* name module */

Function.prototype.call2 = function (context) {
  context = context || window;
  context.fn = this;

  var args = [];
  for (var i = 0, len = args.length; i < len; i++) {
    args.push('arguments[' + i + ']');
  }

  var result = eval('context.fn(' + args + ')');

  delete context.fn;
  return result;
}

// 测试一下
var value = 2;

var obj = {
  value: 1
}

function bar(name, age) {
  console.log(this.value);
  return {
    value: this.value,
    name: name,
    age: age
  }
}

bar.call2(null); // 2

console.log(bar.call2(obj, 'kevin', 18));
// 1
// Object {
//    value: 1,
//    name: 'kevin',
//    age: 18
// }

// es6版本
Function.prototype.call2 = function(context, ...args) {
  context = context || window;
  let fn = Symbol()
  context[fn] = this;
  var result =  context[fn](...args)
  Reflect.deleteProperty(context, fn)
  return result;
}

Function.prototype.call2 = function (context, ...args) {
  context = context || window
  context.__fn__ = this
  let result = context.__fn__(...args)
  delete context.__fn__
  return result
}


