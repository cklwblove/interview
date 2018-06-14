/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/6/14 上午9:09
 * @description
 * 防抖，简单来说就是一定的时间内，只触发一次事件执行
 * 对一定的时间段内连续的函数调用只执行一次
 * 应用场景，比如监听滚动条scroll事件，窗口resize事件
 *
 */

/* name module */

// 基础版
// 不适用于匿名函数，会发现页面初始化会执行一次，滚动并不执行。如
// window.onscroll = debounce(function () {
//  console.log('hello world');
// });
// function debounce(method, context) {
//   clearTimeout(method.tId);
//   method.tId = setTimeout(function () {
//     console.log(context);
//     method.call(context);
//   }, 1000);
// }

// 改良过的，但是存在回调函数中，不能传参，即使传参了一样也是undefined
// 由于setTimeout并不是精准的延时，因此会导致延迟执行的时间有误差
// function debounce(method, context) {
//   var timer = null;
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(function () {
//        method.call(context);
//     }, 300);
//   }
// }
// 很完善，但是满足不了调用之后立马执行
// function debounce(func, await) {
//   var timeout = null;
//
//   return function() {
//     // 解决 this 指向问题
//     var context = this;
//     // 解决回调函数 event 对象问题
//     var args = arguments;
//     clearTimeout(timeout);
//     timeout = setTimeout(function () {
//       func.apply(context, args);
//     }, await);
//   }
// }

// 立即执行
// 返回值
// 此时注意一点，就是 getUserAction 函数可能是有返回值的，所以我们也要返回函数的执行结果，但是当 immediate 为 false 的时候，因为使用了 setTimeout ，我们将 func.apply(context, args) 的返回值赋给变量，最后再 return 的时候，值将会一直是 undefined，所以我们只在 immediate 为 true 的时候返回函数的执行结果。
// function debounce(func, await, immediate) {
//   var timeout = null;
//
//   return function() {
//     // 解决 this 指向问题
//     var context = this;
//     // 解决回调函数 event 对象问题
//     var args = arguments;
//
//     if (timeout) clearTimeout(timeout);
//
//     if (immediate) {
//       // 如果已经执行过，不再执行
//       var callNow = !timeout;
//       timeout = setTimeout(function () {
//         timeout = null;
//       }, await);
//       if (callNow) func.apply(context, args);
//     } else {
//       timeout = setTimeout(function(){
//         func.apply(context, args)
//       }, wait);
//     }
//   }
// }
// 第五版
// function debounce(func, await, immediate) {
//   var timeout = null;
//   var result = null;
//
//   return function() {
//     // 解决 this 指向问题
//     var context = this;
//     // 解决回调函数 event 对象问题
//     var args = arguments;
//
//     if (timeout) clearTimeout(timeout);
//
//     if (immediate) {
//       // 如果已经执行过，不再执行
//       var callNow = !timeout;
//       timeout = setTimeout(function () {
//         timeout = null;
//       }, await);
//       if (callNow) func.apply(context, args);
//     } else {
//       timeout = setTimeout(function(){
//         func.apply(context, args)
//       }, await);
//     }
//     return result;
//   }
// }

// 第六版，增加取消功能
function debounce(func, await, immediate) {
  var timeout = null;
  var result = null;

  var debounced = function() {
    // 解决 this 指向问题
    var context = this;
    // 解决回调函数 event 对象问题
    var args = arguments;

    if (timeout) clearTimeout(timeout);

    if (immediate) {
      // 如果已经执行过，不再执行
      var callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, await);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(function(){
        func.apply(context, args)
      }, await);
    }
    return result;
  }

  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
}
// underscore

function print() {
  console.log('hello world');
}

window.onscroll = debounce(function (e) {
  console.log('e', e);
 console.log('hello world');
}, 300, true);
