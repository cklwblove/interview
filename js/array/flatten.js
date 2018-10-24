/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/5/16 下午8:10
 * @description $ 数组的扁平化
 *  就是将一个嵌套多层的数组 array (嵌套可以是任何层数)转换为只有一层的数组。
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
// 只能扁平化一层 即 [1,2,3,[5,6]]
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
  }, []);
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

// 递归
function flattern(arr) {
  var result = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattern(arr[i]))
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}


/**
 * 数组扁平化
 * @param input 要处理的数组
 * @param shallow 是否只扁平一层
 * @param strict 是否严格处理元素，下面有解释
 * @param output 这是为了方便递归而传递的参数
 * @private
 */
function _flattern(input, shallow, strict, output) {
  // 递归使用的时候会用到output
  output = output || [];
  var idx = output.length;

  for (var i = 0, len = input.length; i < len; i++) {

    var value = input[i];
    // 如果是数组，就进行处理
    if (Array.isArray(value)) {
      // 如果是只扁平一层，遍历该数组，依此填入 output
      if (shallow) {
        var j = 0, length = value.length;
        while (j < length) output[idx++] = value[j++];
      }
      // 如果是全部扁平就递归，传入已经处理的 output，递归中接着处理 output
      else {
        flatten(value, shallow, strict, output);
        idx = output.length;
      }
    }
    // 不是数组，根据 strict 的值判断是跳过不处理还是放入 output
    else if (!strict){
      output[idx++] = value;
    }
  }

  return output;
}

// 一个多维数组彻底的降维
const flattenDeep = (arr) => Array.isArray(arr)
  ? arr.reduce( (a, b) => [...a, ...flattenDeep(b)] , [])
  : [arr];

flattenDeep([1, [[2], [3, [4]], 5]])
