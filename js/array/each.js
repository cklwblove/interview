/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/6/25 下午4:28
 * @description 模仿 $.each
 * 数组就用 for
 * 对象就用 for...in
 * 可以中止循环
 */

/* name module */
var class2type = {};

// 生成class2type映射
"Boolean Number String Function Array Date RegExp Object Error".split(" ").map(function(item, index) {
  class2type["[object " + item + "]"] = item.toLowerCase();
})

function type(obj) {
  // 一箭双雕
  if (obj == null) {
    return obj + "";
  }
  return typeof obj === "object" || typeof obj === "function" ?
    class2type[Object.prototype.toString.call(obj)] || "object" :
    typeof obj;
}

function isWindow( obj ) {
  return obj != null && obj === obj.window;
}

function isArrayLike(obj) {

  // obj 必须有 length属性
  var length = !!obj && "length" in obj && obj.length;
  var typeRes = type(obj);

  // 排除掉函数和 Window 对象
  if (typeRes === "function" || isWindow(obj)) {
    return false;
  }

  return typeRes === "array" || length === 0 ||
    typeof length === "number" && length > 0 && (length - 1) in obj;
}



function each(obj, callback) {
  var len = 0;
  var i = 0;

  if (isArrayLike(obj)) {
    len = obj.length;
    for (; i < len; i++) {
      if (callback.call(obj[i], i, obj[i])  === false) {
        break;
      }
    }
  } else {
    for (i in obj) {
      if (callback.call(obj[i], i, obj[i])  === false) {
        break;
      }
    }
  }
  return obj;
}

// 我们在性能上比较下 for 循环和 each 函数：

var arr = Array.from({length: 1000000}, (v, i) => i);

console.time('for')
var i = 0;
for (; i < arr.length; i++) {
  i += arr[i];
}
console.timeEnd('for')


console.time('each')
var j = 0;
each(arr, function(index, item){
  j += item;
})
console.timeEnd('each')
