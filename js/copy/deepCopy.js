/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/6/20 下午3:16
 * @description 深拷贝
 * 深拷贝就是指完全的拷贝一个对象，即使嵌套了对象，两者也互相分离，修改一个对象的属性，另外一个对象也不会受影响
 */

/* name module */
// 不能拷贝函数
var arr = ['old', 1, true, ['old1', 'old2'], {old: 1}]

var newArr = JSON.parse( JSON.stringify(arr) );

console.log(newArr);

var arr1 = [
  function aa() {}, { b: function bbb() {} }
];

var newArr1 = JSON.parse( JSON.stringify(arr1) );

console.log(newArr1);
// [ null, {} ]

// 深拷贝
// 尽管使用深拷贝会完全的克隆一个新对象，不会产生副作用，但是深拷贝因为使用递归，性能会不如浅拷贝，在开发中，还是要根据实际情况进行选择。
// 问题所在：
// null => {}
function deepCopy(obj) {
  if (typeof obj !== 'object') return;
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj) : obj[key];
    }
  }
  return newObj;
}

// 或
function deepCopy1(obj) {
  if (Array.isArray(obj)) {
    return obj.map(deepCopy1);
  }
  if (obj && typeof obj === 'object') {
    var cloned = {};
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      cloned[key] = deepCopy1(obj[key]);
    }
    return cloned;
  } else { // null的情况
    return obj;
  }
}

console.log(deepCopy(null));
console.log(deepCopy1(null));


