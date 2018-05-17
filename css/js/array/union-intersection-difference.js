/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/5/8 上午9:51
 * @version $ 并集与交集，差集
 */

/* name module */

var arr1 = [1,2,3];
var arr2 = [3,5,2];

// 并集
var union = arr1.concat(arr2);
console.log(union);

// 交集
var intersection = arr1.filter(function (t) { return arr2.indexOf(t) > -1 });
console.log(intersection);

// 差集
var difference = arr1.filter(function(v){ return !(arr2.indexOf(v) > -1) }).concat(arr2.filter(function(v){ return !(arr1.indexOf(v) > -1)}));
console.log(difference);


var arr3 = [{name:"haha1"},{name:"haha2"}];
var a = {name: "haha1"};

arr3.forEach(function (t) {
  if(JSON.stringify(t) === JSON.stringify(a)) {
    console.log(JSON.stringify(a));
  }
})
