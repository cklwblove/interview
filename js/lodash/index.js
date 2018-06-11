/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/5/17 下午4:00
 * @version $ IIFE
 */

/* name module */

var _ = require('lodash');

// chunk
var chunkArray = _.chunk(['a', 'b', 'c', 'd'], 2);

console.log('_.chunk =>', chunkArray);

// compact
var compactArray = _.compact([0, false, null, undefined, 1, 2, 3, NaN, '0']);

console.log('_.compact=>', compactArray);

// concat
var concatArray = _.concat([1], 2, [3], [[4]]);

console.log('_.concat=>', concatArray);

// difference
var differenceArray = _.difference([2, 1], [2, 3]);

console.log('_.difference', differenceArray);

// differenceBy
var differenceByArray = _.differenceBy([2.1, 1.2], [2.3, 3.5], Math.floor);

console.log('_.differenceBy=>', differenceByArray);

// differenceWith
var differenceWithObjects = [{x: 1, y: 2}, {x: 2, y: 1}];
var differenceWithArray = _.differenceWith(differenceWithObjects, [{x: 1, y: 1}], _.isEqual);

console.log('_.differenceWith', differenceWithArray);

// drop
var dropArray = [1, 2, 3];

console.log('_.drop', _.drop(dropArray));
console.log('_.drop', _.drop(dropArray, 2));

// dropRight
var dropRightArray = [1, 2, 3];

console.log('_.dropRight', _.dropRight(dropRightArray));
console.log('_.dropRight', _.dropRight(dropRightArray, 2));

// dropRightWhile
var dropRightWhileUsers = [
  {'user': 'barney', 'active': true},
  {'user': 'fred', 'active': false},
  {'user': 'pebbles', 'active': false}
];

console.log('_.dropRightWhile=>', _.dropRightWhile(dropRightWhileUsers, function (o) {
  return !o.active;
}));

// dropWhile
var dropWhileArray = [
  {'user': 'barney', 'active': true},
  {'user': 'fred', 'active': false},
  {'user': 'pebbles', 'active': false}
];

console.log('_.dropWhile=>', _.drop(dropWhileArray, function (o) {
  return !o.active;
}));

// fill
var fillData = [1, 2, 3];

console.log('_.fill=>', _.fill(fillData, 'a'));

console.log(_.fill([4, 6, 8, 10], '*', 1, 3));

// findIndex
var findIndexData = [
  {'user': 'barney', 'active': false},
  {'user': 'fred', 'active': false},
  {'user': 'pebbles', 'active': true}
];

console.log('_.findIndex=>', _.findIndex(findIndexData, function (o) {
  return o.user == 'barney';
}));
console.log('_.findIndex=>', _.findIndex(findIndexData, ['active', false]));

// findLastIndex
var findLastIndexData = [
  {'user': 'barney', 'active': false},
  {'user': 'fred', 'active': false},
  {'user': 'pebbles', 'active': true}
];

console.log('_.findLastIndex', _.findLastIndex(findLastIndexData, ['active', false]));

// flatten
// 一维数组进行合并
var flattenData = [1, [2, [3, [4]], 5]];

console.log('_.flatten=>', _.flatten(flattenData));

// flattenDeep
// 多维数组进行合并
var flattenDeepData = [1, [2, [3, [4]], 5]];

console.log('_.flattenDeep=>', _.flattenDeep(flattenDeepData));

// flattenDepth
// 多维数组进行合并 depth
var flattenDepthData = [1, [2, [3, [4]], 5]];

console.log('_.flattenDepth=>', _.flattenDepth(flattenDepthData, 1));
console.log('_.flattenDepth=>', _.flattenDepth(flattenDepthData, 2));
console.log('_.flattenDepth=>', _.flattenDepth(flattenDepthData, 3));
console.log('_.flattenDepth=>', _.flattenDepth(flattenDepthData, 4));

// fromPairs(pairs)
// 返回key-value
var fromPairsData = [['a', 1], ['b', 2]];

console.log('_.fromPairs=>', _.fromPairs(fromPairsData));

// head
// 获取数组的第一项
var headData = [1, 2, 3];

console.log('_.head=>', _.head(headData));

// indexOf
var indexOfData = [1, 2, 3, 4];

console.log('_.indexOf=>', _.indexOf(indexOfData, 2));

// initial
// 返回全部的数组
var initialData = [1, 2, 3, 4];

console.log('_.initial=>', _.initial(initialData));

// intersection
// 交集
console.log('_.intersection=>', _.intersection([2, 1], [2, 3]));

// intersectionBy
console.log('_.intersectionBy=>', _.intersectionBy([{x: 1}], [{x: 2}, {x: 1}], 'x'));

// intersectionWith
var objects = [{'x': 1, 'y': 2}, {'x': 2, 'y': 1}];
var others = [{'x': 1, 'y': 1}, {'x': 1, 'y': 2}];

console.log('_.intersectionWith=>', _.intersectionWith(objects, others, _.isEqual));

// join
console.log('_.join=>', _.join(['a', 'b', 'c'], '~'));

// last
console.log('_.last=>', _.last(['1', '2', '3']));

// lastIndexOf
console.log('_.lastIndexOf=>', _.lastIndexOf([1, 2, 1, 2], 2));

// nth
console.log('_.nth=>', _.nth(['a', 'b', 'c', 'd'], 1));
console.log('_.nth=>', _.nth(['a', 'b', 'c', 'd'], -1));

// pull
var pullData = ['a', 'b', 'c', 'd'];
console.log('_.pull=>', _.pull(pullData, 'a', 'c'));
console.log('_.pull=>', pullData);

// pullAll
var pullAllArray = ['a', 'b', 'c', 'a', 'b', 'c'];

console.log('_.pullAll=>', _.pullAll(pullAllArray, ['a', 'c']));

// pullAllBy
var pullAllByData = [{'x': 1}, {'x': 2}, {'x': 3}, {'x': 1}];

console.log('_.pullAllBy=>', _.pullAllBy(pullAllByData, [{'x': 1}, {'x': 3}], 'x'));

// pullAllWith
var pullAllWithData = [{'x': 1, 'y': 2}, {'x': 3, 'y': 4}, {'x': 5, 'y': 6}];

console.log('_.pullAllWith=>', _.pullAllWith(pullAllWithData, [{'x': 3, 'y': 4}], _.isEqual));

// pullAt
var pullAtData = ['a', 'b', 'c', 'd'];

console.log('_.pullAt=>', _.pullAt(pullAtData, [1, 3]), pullAtData);

// remove
var removeData = [1, 2, 3, 4];

console.log('_.remove=>', _.remove(removeData, function (n) {
  return n % 2 === 0;
}), removeData);

// reverse
var reverseData = [1,2,3];

console.log('_.reverse', _.reverse(reverseData), reverseData);

// slice
var sliceData = [1,2,3];

console.log('_.slice', _.slice(sliceData), sliceData);

// sortedIndex
console.log('_.sortedIndex', _.sortedIndex([10, 30, 50], 40));
console.log('_.sortedIndex', _.sortedIndex([30, 50], 10));

// sortedIndexBy
var objects = [{ 'x': 4 }, { 'x': 5 }];

console.log('_.sortedIndexBy', _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; }));
// => 0

// The `_.property` iteratee shorthand.
console.log('_.sortedIndexBy', _.sortedIndexBy(objects, { 'x': 4 }, 'x'));
// => 0

// sortedIndexOf
console.log('_.sortedIndexOf', _.sortedIndexOf([1, 1, 2, 2], 2));

// sortedLastIndex
console.log('_.sortedLastIndex', _.sortedLastIndex([4, 5], 4));

// sortedLastIndexBy
console.log('_.sortedLastIndexBy', _.sortedLastIndexBy([{x: 4}, {x: 5}], {x: 4}, 'x'));

// sortedLastIndexOf
console.log('_.sortedLastIndexOf', _.sortedLastIndexOf([1,1,1,2,2], 2));

// sortedUniq
console.log('_.sortedUniq', _.sortedUniq([2,3,1,1,6,2]));

// sortedUniqBy
console.log('_.sortedUniqBy', _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor));

// tail
console.log('_.tail', _.tail([2,1,4]));

// take
console.log('_.take', _.take([1,2,3]));
console.log('_.take', _.take([1,2,3], 2));
console.log('_.take', _.take([1,2,3], 0));

// takeRight
console.log('_.takeRight', _.takeRight([1,2,3]));
console.log('_.takeRight', _.takeRight([1,2,3], 2));
console.log('_.takeRight', _.takeRight([1,2,3], 3));

// takeRightWhile
var takeRightWhileData = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];
console.log('_.takeRightWhile', _.takeRightWhile(takeRightWhileData, function (o) {
  return !o.active;
}));
console.log('_.takeRightWhile', _.takeRightWhile(takeRightWhileData, { 'user': 'pebbles', 'active': false }));
console.log('_.takeRightWhile', _.takeRightWhile(takeRightWhileData, ['active', false]));

// takeWhile
var takeWhile = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
console.log('_.takeWhile', _.takeWhile(takeWhile, function (o) {
  return !o.active;
}));
console.log('_.takeWhile', _.takeWhile(takeWhile, { 'user': 'pebbles', 'active': true }));
console.log('_.takeWhile', _.takeWhile(takeWhile, ['active', false]));
console.log('_.takeWhile', _.takeWhile(takeWhile, 'active'));

// union
// map
var ownerArr = [
  {
    "owner": "Colin",
    "pets": [{"name": "dog1"}, {"name": "dog2"}]
  },
  {
    "owner": "John",
    "pets": [{"name": "dog3"}, {"name": "dog4"}]
  }
];

console.log(_.map(ownerArr, 'pets[0].name'));
console.log(_.map(ownerArr, 'pets'));
