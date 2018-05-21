/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/5/7 下午5:25
 * @version $ 数组去重
 */
// https://github.com/mqyqingfeng/Blog/issues/27
/* name module */

var arr1 = [6, 7, 8, 9, 0, '6'];

function removeRepeatArr(array) {
  var newArray = [];
  var hash = {};

  array.forEach(function (item) {
    if (!hash[item]) {
      newArray.push(item);
      hash[item] = true;
    }
  });

  return newArray;
}

console.log(removeRepeatArr(arr1));

function removeRepeatByDoubleLoop(array) {
  var res = [];

  for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
    for (var j = 0, resLen = res.length; j < resLen; j++) {
      if (array[i] === res[j]) {
        break;
      }
    }
    if (j === resLen) {
      res.push(array[i]);
    }
  }
  return res;
}

console.log(removeRepeatByDoubleLoop(arr1));

function removeRepeatByIndexOf(array) {
  var res = [];

  for (var i = 0, len = array.length; i < len; i++) {
    var current = array[i];
    if (res.indexOf(current) === -1) {
      res.push(current);
    }
  }

  return res;
}

console.log(removeRepeatByIndexOf(arr1));

function removeRepeatBySort(array) {
  var res = [];
  var sortArray = array.concat().sort();
  var seen;
  for (var i = 0, len = sortArray.length; i < len; i++) {
    if(!i || seen !== sortArray[i]) {
      res.push(sortArray[i]);
    }
    seen = sortArray[i];
  }
  return res;
}
console.log(removeRepeatBySort(arr1));

function removeRepeatByFilter(array) {
  return array.filter(function (item, index) {
    // console.log(array.indexOf(item), index);
    return array.indexOf(item) === index;
  });
}

console.log(removeRepeatByFilter(arr1));

function removeRepeatByFilterAndSort(array) {
  return array.concat().sort().filter(function(item, index, array){
    return !index || item !== array[index - 1];
  })
}

console.log(removeRepeatByFilterAndSort(arr1));

function removeRepeatBySet(array) {
  return Array.from(new Set(array));
}

console.log(removeRepeatBySet(arr1));

function removeRepeatBySetSimple(array) {
  return [...new Set(array)];
}

console.log(removeRepeatBySetSimple(arr1));

function removeRepeatBySetAndMap(array) {
  const seen = new Map();
  return arr.filter((a) => !seen.has(a) && seen.set(a, 1));
}

var arrObject = [
  {
    name: 'liwb', from: 'hangzhou'
  },
  {name: 'liwb', from: 'hangzhou'},
  {name: 'zhangsan', from: 'beijing'},
  {name: 'wangwu', from: 'shanghai'}
];

function removeRepeatArrObj(arrObj) {
  var unique = {};

  arrObj.forEach(function (item) {
    // 重复的对象会被覆盖
    unique[JSON.stringify(item)] = item;
  });
  // 枚举对象的属性然后进行遍历
  arrObj = Object.keys(unique).map(function (t) {
    return JSON.parse(t);
  });

  return arrObj;
}

console.log(removeRepeatArrObj(arrObject));


