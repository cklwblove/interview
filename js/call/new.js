/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/6/13 上午10:12
 * @version $ IIFE
 */

/* name module */
function objectFactory() {
  var obj = new Object();
  Constructor = [].shift().call(arguments);

  var F = function () {};
  F.prototype = Constructor.prototype;
  obj = new F();

  var ret = Constructor.apply(obj, arguments);

  return typeof ret === 'object' ? (ret || obj) : obj;
}
