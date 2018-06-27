/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/6/20 上午9:28
 * @description 数组的浅拷贝
 * 如果数组元素是基本类型，就会拷贝一份，互不影响，而如果是对象或者数组，就会只拷贝对象和数组的引用，这样我们无论在新旧数组进行了修改，两者都会发生变化。

 我们把这种复制引用的拷贝方法称之为浅拷贝，与之对应的就是深拷贝，深拷贝就是指完全的拷贝一个对象，即使嵌套了对象，两者也相互分离，修改一个对象的属性，也不会影响另一个。

 所以我们可以看出使用 concat 和 slice 是一种浅拷贝。
 */

/* name module */

var arr = ['odd', 1, true, null, undefined];
var newArr = arr.concat();
// 或
// var newArr = arr.slice();

console.log(newArr);
newArr.push({});

console.log(newArr);
console.log(arr);

// 两者并不关联
// 但是如果里面的数据类型是引用类型，就会发现另外一个克隆的数组同时也改变了
var arr1 = [{'old': 'old'}, ['old']];
var newArr1 = arr.concat();

arr1[0].old = 'new';
arr1[1][0] = 'new';

console.log(arr1) // [{old: 'new'}, ['new']]
console.log(newArr1) // [{old: 'new'}, ['new']]

// 浅拷贝的实现
// 只拷贝对象
function shadowCopy(obj) {
  if (typeof obj !== 'object') return;
  // 是数组还是对象
  var newObj = obj instanceof Array ? [] : {};
  // 遍历obj，并且判断是obj的属性才拷贝
  for(var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

