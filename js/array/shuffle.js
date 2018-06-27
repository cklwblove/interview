/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/6/27 上午10:53
 * @description 乱序
 * Fisher–Yates 算法
 */

function shuffle(a) {
  var j, x, i;
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
  return a;
}

// es6

// function shuffle(a) {
//   for (let i = a.length; i; i--) {
//     let j = Math.floor(Math.random() * i);
//     [a[i - 1], a[j]] = [a[j], a[i - 1]];
//   }
//   return a;
// }

console.log(shuffle([1,2,3]));


