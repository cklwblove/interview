/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/6/5 下午6:53
 * @version $ IIFE
 */

/* name module */

// 构造函数创建对象

function Person() {}
Person.prototype.name = 'person';

var person = new Person();
person.name = 'Kevin';

var person1 = new Person();
person1.name = 'Billy';

console.log(person);
console.log(person1);
