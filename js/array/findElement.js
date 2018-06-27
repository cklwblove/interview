/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/6/25 上午11:08
 * @description 查找某一元素
 * 在数组中查找指定元素
 * findIndex, findLastIndex, indexOf, lastIndexOf
 */

/* name module */

// function findIndex(array, predicate, context) {
//   for (var i = 0; i < array.length; i++) {
//     if (predicate.call(context, array[i], i, array)) {
//       return i;
//     }
//   }
//   return -1;
// }
//
// function findLastIndex(array, predicate, context) {
//   for (var i = array.length; i >= 0; i--) {
//     if (predicate.call(context, array[i], i, array)) return i;
//   }
//   return -1;
// }

// 合并上述代码，通过入参不同实现
function createIndexFinder(dir) {
  return function (array, predicate, context) {
    var length = array.length;
    var index = dir > 0 ? 0 : length - 1;
    for (; index && index < length; index += dir) {
      if (predicate.call(context, array[index], index, array)) return index;
    }
    return -1;
  }
}

var findIndex = createIndexFinder(1);
var findLastIndex = createIndexFinder(-1);

// 在一个排好序的数组中找到 value 对应的位置，保证插入数组后，依然保持有序的状态
// 利用二分查找方法，折半查找要求线性表必须采用顺序存储结构，而且表中元素按关键字有序排列。
// 问题在于处理不了对象的情况
// function sortedIndex(array, obj) {
//   var low = 0;
//   var high = array.length;
//
//   while (low < high) {
//     var mid = Math.floor((low + high) / 2);
//     if (array[mid] < obj) {
//       low = mid + 1;
//     } else {
//       high = low;
//     }
//   }
//   return high;
// }
//
// console.log(sortedIndex([10, 20, 30, 40, 50], 35)) // 3
// stooges 配角 比如 三个臭皮匠 The Three Stooges
var stooges = [{name: 'stooge1', age: 10}, {name: 'stooge2', age: 30}];

// var result = sortedIndex(stooges, {name: 'stooge3', age: 20}, function(stooge){
//   return stooge.age
// });

// console.log(result) // 1

function cb(func, context) {
  if (context === void 0) return func;
  return function () {
    return func.apply(context, arguments);
  };
}

function sortedIndex1(array, obj, iteratee, context) {
  iteratee = cb(iteratee, context);
  var low = 0;
  var high = array.length;

  while (low < high) {
    var mid = Math.floor((low + high) / 2);
    if (iteratee(array[mid]) < iteratee(obj)) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return high;
}

var result1 = sortedIndex1(stooges, {name: 'stooge3', age: 20}, function (stooge) {
  return stooge.age
});

console.log(result1) // 1

// indexOf
/**
 *
 * @param dir 1 or -1
 * @returns {Function}
 */
function createIndexOfFinder(dir) {
  return function (array, item) {
    var length = array.length;
    var index = dir > 0 ? 0 : length - 1;

    for (; index >= 0 && index < length; index += dir) {
      if (array[index] === item) {
        return index;
      }
    }
    return -1;
  }
}

var indexOf = createIndexOfFinder(1);
var lastIndexOf = createIndexOfFinder(-1);

// indexOf 最终版
// 支持查找 NaN
// 当数组是有序的时候，采用二分查找算法
function createIndexOfFinderLastVersion(dir, predicate, sortedIndex) {
  return function (array, item, idx) {
    var len = array.length;
    var i = 0;

    if (typeof idx === 'number') {
      if (dir > 0) {
        i = idx >= 0 ? idx : Math.max(len + idex, 0);
      } else {
        len = idx >= 0 ? Math.min(idx + 1, len) : idx + len + 1;
      }
    } else if (sortedIndex && idx && len) {
      idx = sortedIndex(array, item);
      // 如果该插入的位置的值正好等于元素的值，说明是第一个符合要求的值
      return array[idx] === item ? idx : -1;
    }
    // 判断是否 NaN
    if (item !== item) {
      idx = predicate(array.slice(i, len), isNaN);
      return idx >= 0 ? idx + i: -1;
    }
    for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
      if (array[idx] === item) return idx;
    }
    return -1;
  }
}

var indexOf = createIndexOfFinder(1, findIndex, sortedIndex);
var lastIndexOf = createIndexOfFinder(-1, findLastIndex);


