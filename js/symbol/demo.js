/**
 *
 * @authors liwb (lwbhtml@163.com)
 * @date    2019-04-28 19:04
 * @description
 * @version 1.0.0
 */

let firstName = Symbol('first name');

let person = {};

person[firstName] = 'Nicholas';

console.log('first name' in person);
console.log(typeof firstName);
console.log(person[firstName]);
console.log(firstName);
