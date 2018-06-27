/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/6/22 上午10:42
 * @description jQuery 版本的 extend
 * $.extend(boolean, obj1, obj2, ...)
 *
 * 处理的数据类型主要是数组（[]）及对象（{}）
 */

/* name module */

// function extend() {
//   var name = '';
//   var options = {};
//   var copy = null;
//   var length = arguments.length;
//   var i = 1;
//   var target = arguments[0];
//
//   for(; i < length; i++) {
//     options = arguments[i];
//     if (options != null) {
//       for (name in options) {
//         copy = options[name];
//         if (copy !== undefined) {
//           target[name] = copy;
//         }
//       }
//     }
//   }
//
//   return target;
// }

// 实现是否进行深拷贝
// function extend() {
//   console.log(1)
//   var deep = false;
//   var name = '';
//   var options = {};
//   var src = {};
//   var copy = {};
//   var length = arguments.length;
//   var i = 1;
//   // 默认是第一个参数，若不传 boolean 的情况下
//   var target = arguments[0] || {};
//   // 第一个参数是否为 boolean
//   if (typeof target === 'boolean') {
//     deep = target;
//     target = arguments[i] || {};
//     i++;
//   }
//   // 若 target 不是对象的化，是实现不了复制的
//   if (typeof target !== 'object') {
//     target = {};
//   }
//
//   for (; i < length; i++) {
//     options = arguments[i];
//     // 不能为空 避免extend(a,,b)这种情况
//     if (options !== null) {
//       for (name in options) {
//         src = options[name];
//         copy = options[name];
//
//         if (deep && copy && typeof copy === 'object') {
//           target[name] = extend(deep, src, target);
//         } else if (copy !== undefined) {
//           target[name] = copy;
//         }
//       }
//     }
//   }
//   return target;
// }

var class2type = {};
var toString = class2type.toString;
var hasOwn = class2type.hasOwnProperty;

function isPlainObject(obj) {
  var proto, Ctor;
  if (!obj || toString.call(obj) !== "[object Object]") {
    return false;
  }
  proto = Object.getPrototypeOf(obj);
  if (!proto) {
    return true;
  }
  Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
  return typeof Ctor === "function" && hasOwn.toString.call(Ctor) === hasOwn.toString.call(Object);
}

// 更为严谨些的代码
// 判断目标属性值跟要复制的对象的属性值类型是否一致:
// 如果待复制对象属性值类型为数组，目标属性值类型不为数组的话，目标属性值就设为 []
// 如果待复制对象属性值类型为对象，目标属性值类型不为对象的话，目标属性值就设为 {}
function extend() {
  // 默认不进行深拷贝
  var deep = false;
  var name, options, src, copy, clone, copyIsArray;
  var length = arguments.length;
  // 记录要复制的对象的下标
  var i = 1;
  // 第一个参数不传布尔值的情况下，target 默认是第一个参数
  var target = arguments[0] || {};
  // 如果第一个参数是布尔值，第二个参数是 target
  if (typeof target == 'boolean') {
    deep = target;
    target = arguments[i] || {};
    i++;
  }
  // 如果target不是对象，我们是无法进行复制的，所以设为 {}
  if (typeof target !== "object" && !isFunction(target)) {
    target = {};
  }

  // 循环遍历要复制的对象们
  for (; i < length; i++) {
    // 获取当前对象
    options = arguments[i];
    // 要求不能为空 避免 extend(a,,b) 这种情况
    if (options != null) {
      for (name in options) {
        // 目标属性值
        src = target[name];
        // 要复制的对象的属性值
        copy = options[name];

        // 解决循环引用
        if (target === copy) {
          continue;
        }

        // 要递归的对象必须是 plainObject 或者数组
        if (deep && copy && (isPlainObject(copy) ||
            (copyIsArray = Array.isArray(copy)))) {
          // 要复制的对象属性值类型需要与目标属性值相同
          if (copyIsArray) {
            copyIsArray = false;
            clone = src && Array.isArray(src) ? src : [];

          } else {
            clone = src && isPlainObject(src) ? src : {};
          }

          target[name] = extend(deep, clone, copy);

        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }

  return target;
};

var obj1 = {
  a: 1,
  b: { b1: 1, b2: 2 }
};

var obj2 = {
  b: { b1: 3, b3: 4 },
  c: 3
};

var obj3 = {
  d: 4
}

console.log(extend(true, obj1, obj2, obj3));

var a = extend(true, [4, 5, 6, 7, 8, 9], [1, 2, 3]);
console.log(a) // ???

var obj4 = {
  value: {
    3: 1
  }
}

var obj5 = {
  value: [5, 6, 7],

}

var b = extend(true, obj4, obj5) // ???
var c = extend(true, obj5, obj4) // ???

console.log(b, c);

