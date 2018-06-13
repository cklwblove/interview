/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/6/11 下午1:56
 * @description bind() 方法会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。
 */

Function.prototype.bind2 = function (context) {
  if (typeof this !== 'function') {
    throw new Error('Function.prototype.bind - what is trying to be bound is not callable');
  }

  var self = this;
  var args = Array.prototype.slice().call(arguments, 1);

  var fNOP = function () {
  };
  var fBound = function () {
    var bindArgs = Array.prototype.slice().call(arguments);
    return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
  }
  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
}


