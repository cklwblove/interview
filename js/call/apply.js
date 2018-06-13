/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/6/11 下午1:44
 * @version $ IIFE
 */

/* name module */

Function.prototype.apply2 = function (context, arr) {
  context = Object(context) || window;
  context.fn = this;

  var result;

  if (!arr) {
    result = context.fn();
  } else {
    var args = [];
    for (var i = 0, len = args.length; i < len; i++) {
      args.push('arguments[' + i + ']');
    }
    result = eval('context.fn(' + args + ')');
  }

  delete context.fn;

  return result;
}
