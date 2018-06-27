/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/6/19 下午4:29
 * @version $ IIFE
 */

/* name module */

// 4 种方法来判断数据类型
// typeof
// constructor
// instanceof
// Object.prototype.toString
// 附加一种 Array.isArray

// js的对象居然还能用===来判断的？然后去测试了下，很震惊的发现，诸如window、location、history这样的浏览器相关的对象，Object.prototype.toString.call方法都是单独识别出来。。。这还是头一次发现orz而且它们全都能通过===来和自身相等，当然这一点应该是因为内存中这些浏览器相关对象都只有一份。
// 由此也学到了一个知识点：js中的===并非对所有引用类型的数据进行判断时都为false，对于那些接近“单例”形式的对象，是可以和自身全等的。（知识点get）
var obj = {};

console.log(obj === obj);
// true

// typeof 是一元操作符，放在其单个操作数的前面，操作数可以是任意类型。返回值为表示操作数类型的一个字符串。
var str = 'hello world';
console.log(typeof str);
// 'string'

// 6 数据类型, es6 新增 Symbol
// Undefined、Null、Number、String、Boolean、Object、Symbol

// Object 可以细分为很多类型，如 Function, Date, RegExp, Error, Array
// Object.prototype.toString 可以识别出更为精细的数据类型

// 当 toString 方法被调用的时候，下面的步骤会被执行：
//
// 如果 this 值是 undefined，就返回 [object Undefined]
// 如果 this 的值是 null，就返回 [object Null]
// 让 O 成为 ToObject(this) 的结果
// 让 class 成为 O 的内部属性 [[Class]] 的值
// 最后返回由 "[object " 和 class 和 "]" 三个部分组成的字符串
// 通过规范，我们至少知道了调用 Object.prototype.toString 会返回一个由 "[object " 和 class 和 "]" 组成的字符串，而 class 是要判断的对象的内部属性。

// 可以识别 14 种

console.log(Object.prototype.toString.call(undefined))
// [object Undefined]
console.log(Object.prototype.toString.call(null))
// [object Null]
console.log(Object.prototype.toString.call(new Date()))
// [object Date]
console.log(Object.prototype.toString.call(1));
// [object Number]
console.log(Object.prototype.toString.call('hello world'));
// [object String]
console.log(Object.prototype.toString.call(true))
// [object Boolean]
console.log(Object.prototype.toString.call([]))
// [object Array]
console.log(Object.prototype.toString.call({}))
// [object Object]
console.log(Object.prototype.toString.call(new Error()))
// [object Error]
console.log(Object.prototype.toString.call(/a/g))
// [object RegExp]
console.log(Object.prototype.toString.call(function a() {}))
// [object Function]
// 实际情况几乎不会判断以下两种类型 Math, JSON
console.log(Object.prototype.toString.call(Math));
// [object Math]
console.log(Object.prototype.toString.call(JSON));
// [object JSON]
function a () {
  console.log(Object.prototype.toString.call(arguments));
}
a()
// [object Arguments]
Object.prototype.toString.call(location)
// "[object Location]"
Object.prototype.toString.call(history)
// "[object History]"

var class2type = {};

// 生成class2type映射
"Boolean Number String Function Array Date RegExp Object Error".split(" ").map(function(item, index) {
  class2type["[object " + item + "]"] = item.toLowerCase();
})

// 返回的数据类型都是小写，如 date, array, error 等
function type(obj) {
  // IE6 中， null, undefined 会识别成 [object Object]
  if (obj == null) {
    return obj + "";
  }
  return typeof obj === "object" || typeof obj === "function" ?
    class2type[Object.prototype.toString.call(obj)] || "object" :
    typeof obj;
}

function isFunction(cb) {
  return type(cb) === 'function';
}
