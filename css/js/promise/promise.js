/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/5/8 下午2:52
 * @version $
 *
 * Promise 实例化时传入的函数会立即执行，then(...) 中的回调需要异步延迟调用。
 * then 回调 onFulfilled onRejected
 * 实践中要确保 onFulfilled 和 onRejected 方法异步执行，且应该在 then 方法被调用的那一轮事件循环之后的新执行栈中执行。这个事件队列可以采用宏任务 macro-task机制或微任务 micro-task机制来实现。

 * 注意这里 macrotask microtask 分别表示异步任务的两种分类。在挂起任务时，JS 引擎会将所有任务按照类别分到两个队列中，首先在 macrotask 的队列（也叫 task queue）中取出第一个任务，执行完毕后取出 microtask 队列中的所有任务顺序执行；之后再取 macrotask 任务，周而复始，直至两个队列的任务都取完。
 *
 * Promise 状态
  Promise 必须为以下三种状态之一：等待态（Pending）、执行态（Fulfilled）和拒绝态（Rejected）。一旦Promise被resolve或reject，不能再迁移至其他任何状态（即状态 immutable）。

 * catch
 */

/* name module */

var asyncFunc = function () {
  if(typeof process === 'object' && process !== 'null' && typeof process.nextTick === 'function') {
    return process.nextTick;
  } else if(typeof setImmediate === 'function') {
    return setImmediate;
  } else {
    return setTimeout;
  }
}();


function Promise(fn) {
  // promise 状态变量
  // 0 - pending
  // 1 - resolved
  // 2 - rejected
  this._state = 0;

  // promise 执行结果
  this._value = null;

  this._deferreds = [];

  // 立即执行fn
  try {
    fn(value => {
      resolve(this, value);
    }, reason => {
      reject(this, reason);
    })
  } catch(err) {
    // 处理执行fn异常情况
    reject(this, err);
  }
}


Promise.resolve().then(function promise1 () {
  console.log('promise1');
})
setTimeout(function setTimeout1 (){
  console.log('setTimeout1')
  Promise.resolve().then(function  promise2 () {
    console.log('promise2');
  })
}, 0)

setTimeout(function setTimeout2 (){
  console.log('setTimeout2')
}, 0)
