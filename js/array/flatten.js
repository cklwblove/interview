/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/5/16 下午8:10
 * @version $ 复合数组的合并
 */

var array = [[1, 2], [3, 4], [5, 6], 7]; // => [1,2,3,4,5,6,7]

// 初版
function flattenSimple(array) {
  return Array.prototype.concat.apply([], array);
}

// 或
function flattenSimple1(array) {
  return [].concat.apply([], array);
}

// 或 es6
function flattenSimpleByEs6(array) {
  return [].concat(...array);
}

console.log(flattenSimple(array));

// 较为健壮的
function flatten(array) {
  array = Array.prototype.concat.apply([], array);

  return array.some(Array.isArray) ? flatten(array) : array;
}

// 或
function flatten1(array) {
  var isArray = Object.property.toString().call(array) === '[object Array]';

  if (isArray && array.length) {
    var head = array[0];
    var tail = array.slice(1);
    return flatten1(head).concat(flatten1(tail));
  } else {
    return [].concat(array);
  }
}

// 或 reduce
function flattenByReduce(array) {
  return array.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flattenByReduce(toFlatten) : toFlatten);
  }, array);
}

console.log(flattenByReduce([[1, 2], [3, 4, 5], [6, 7, 8, 9]]));
console.log(flattenByReduce([[1, 2], [3, 4, 5], [6, 7, 8, 9, [10]]]));

function deepFlatten(arr) {
  return flatten( // return shalowly flattened array
    arr.map(x => // with each x in array
      Array.isArray(x) // is x an array?
        ? deepFlatten(x) // if yes, return deeply flattened x
        : x // if no, return just x
    )
  )
}

// 并去重
function flattenAndUnique(arr) {
  var newArr = arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
  var result;
  result = newArr.filter(function (ele, i, arr) {
    return newArr.indexOf(ele) === i;
  });
  return result;
}

flattenAndUnique([[1, 2], [3, 4, 5], [6, 7, 8, 9, [10, [12]]], 11]);
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11]
flattenAndUnique([[1, 2],[3, 4, 5,[1,2,3,4,5]], [6, 7, 8, 9,[10,[12]]],11]);
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11]
