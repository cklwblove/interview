/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/6/6 上午11:21
 * @version $ IIFE
 */

/* name module */

// Object.create(null) 无任何属性（__proto__）
var object1 = Object.create(null);

console.log(object1);
// {}

// 对象字面量
var object2 = {id: 42, name: 'John'};

console.log(object2);
// {id: 42, name: "John", __proto__: Object}
