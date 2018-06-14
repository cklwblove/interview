/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/6/14 下午3:12
 * @description 函数节流
 */

/* name module */

// 第一版
// 使用时间戳  有头无尾
// 当触发事件的时候，我们取出当前的时间戳，然后减去之前的时间戳(最一开始值设为 0 )，如果大于设置的时间周期，就执行函数，然后更新时间戳为当前的时间戳，如果小于，就不执行。
// function throttle(func, wait) {
//   var context = null;
//   var args = null;
//   var previous = 0;
//
//   return function () {
//     var now = +new Date();
//     context = this;
//     args = arguments;
//
//     if (now - previous > wait) {
//       func.apply(context, args);
//       previous = now;
//     }
//   }
// }

// 第二版
// 使用定时器 无头有尾
// 当触发事件的时候，我们设置一个定时器，再触发事件的时候，如果定时器存在，就不执行，直到定时器执行，然后执行函数，清空定时器，这样就可以设置下个定时器。
// function throttle(func, wait) {
//   var timeout = null;
//   var context = null;
//   var args = null;
//
//   return function () {
//     context = this;
//     args = arguments;
//     if (!timeout) {
//       timeout = setTimeout (function() {
//         timeout = null;
//         func.apply(context, args);
//       }, wait);
//     }
//   }
// }


// 所以比较以上两个方法：
//
// 第一种事件会立刻执行，第二种事件会在 n 秒后第一次执行
// 第一种事件停止触发后没有办法再执行事件，第二种事件停止触发后依然会再执行一次事件

// 两种写法合并到一起，有头有尾
// function throttle(func, wait) {
//   var timeout = null;
//   var context = null;
//   var args = null;
//   var previous = 0;
//
//   var later = function () {
//      previous = +new Date();
//      timeout = null;
//      func.apply(context, args);
//   }
//
//   var throttled = function () {
//     var now = +new Date();
//     // 下次触发 func 剩余的时间
//     var remaining = wait - (now - previous);
//     context = this;
//     args = arguments;
//     // 如果没有剩余的时间了或者你改了系统时间
//     if (remaining <= 0 || remaining > wait) {
//       if (timeout) {
//         clearTimeout(timeout);
//         timeout = null;
//       }
//       previous = now;
//       func.apply(context, args);
//     } else if (!timeout) {
//       timeout = setTimeout(later, remaining);
//     }
//   };
//
//   return throttled;
// }

// 优化，有头无尾，或有头有尾
// 那我们设置个 options 作为第三个参数，然后根据传的值判断到底哪种效果，我们约定:
//
// leading：false 表示禁用第一次执行
// trailing: false 表示禁用停止触发的回调
function throttle(func, wait, options) {
  var timeout = null;
  var result = null;
  var args = null;
  var context = null;
  var previous = 0;

  if (!options) options = {};

  var later = function () {
    previous = options.leading === false ? 0 : +new Date();
    timeout = null;
    func.apply(context, args);
    if (!timeout) {
      context = args = null;
    }
  };

  var throttled = function () {
    var now = +new Date();

    if (!previous && options.leading === false) {
       previous = now;
    }
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
  };

  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = null;
  };

  return throttled;
}

// 我们要注意 underscore 的实现中有这样一个问题：
//
// 那就是 leading：false 和 trailing: false 不能同时设置。
//
// 如果同时设置的话，比如当你将鼠标移出的时候，因为 trailing 设置为 false，停止触发的时候不会设置定时器，所以只要再过了设置的时间，再移入的话，就会立刻执行，就违反了 leading: false，bug 就出来了，所以，这个 throttle 只有三种用法：
//
// container.onmousemove = throttle(getUserAction, 1000);
// container.onmousemove = throttle(getUserAction, 1000, {
//   leading: false
// });
// container.onmousemove = throttle(getUserAction, 1000, {
//   trailing: false
// });

