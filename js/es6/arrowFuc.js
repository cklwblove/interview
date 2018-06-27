/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/6/27 下午1:53
 * @description 箭头函数
 *
 * 箭头函数表达式的语法比函数表达式更短，并且不绑定自己的this，arguments，super或 new.target。这些函数表达式最适合用于非方法函数(non-method functions)，并且它们不能用作构造函数。
 *
 * 箭头函数和普通函数的区别
 * 1 没有 this
 * 箭头函数没有 this，所以需要通过查找作用域链来确定 this 的值。
   这就意味着如果箭头函数被非箭头函数包含，this 绑定的就是最近一层非箭头函数的 this。
 * 因为箭头函数没有 this，所以也不能用 call()、apply()、bind() 这些方法改变 this 的指向
 *
 * 2 没有 arguments
 * 若需要访问 arguments的化，可以用命名参数或者 rest 参数的形式访问参数
 * let nums = (...nums) => nums;
 *
 * 3 不能通过 new 关键字调用
 *
 * JavaScript 函数有两个内部方法：[[Call]] 和 [[Construct]]。

   当通过 new 调用函数时，执行 [[Construct]] 方法，创建一个实例对象，然后再执行函数体，将 this 绑定到实例上。

   当直接调用的时候，执行 [[Call]] 方法，直接执行函数体。

   箭头函数并没有 [[Construct]] 方法，不能被用作构造函数，如果通过 new 的方式调用，会报错。

   var Foo = () => {};
   var foo = new Foo(); // TypeError: Foo is not a constructor

 * 4 没有原型
 * 由于不能使用 new 调用箭头函数，所以也没有构建原型的需求，于是箭头函数也不存在 prototype 这个属性。
 *
 * 5 没有 super
 * 连原型都没有，自然也不能通过 super 来访问原型的属性，所以箭头函数也是没有 super 的，不过跟 this、arguments、new.target 一样，这些值由外围最近一层非箭头函数决定。
 *
 * 6 没有 new.target
 */

/* name module */

