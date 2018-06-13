/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/6/13 下午1:45
 * @description 继承
 */

/* name module */
// 原型链继承
// 问题在于：
// 1，引用类型的属性被所有实例共享
// 2，在创建 Child 的实例时，不能向Parent传参
function Parent () {
  this.name = 'kevin';
}

Parent.prototype.getName = function () {
  console.log(this.name);
}

function Child () {}

Child.prototype = new Parent();

var child1 = new Child();

console.log(child1.getName()) // kevin

// 引用类型的属性被所有实例共享
function Parent1 () {
  this.names = ['kevin', 'daisy'];
}

function Child1 () {}

Child1.prototype = new Parent1();

var child2 = new Child1();

child2.names.push('yayu');

console.log(child2.names); // ["kevin", "daisy", "yayu"]

var child3 = new Child1();

console.log(child3.names); // ["kevin", "daisy", "yayu"]


// 借用构造函数(经典继承)
// 优点：避免了引用类型的属性被所有实例共享，可以再 Child 中向 Parent 传参
// 缺点：方法都在构造函数中定义，每次创建实例都会创建一遍方法。
function Parent2() {
  this.names = ['kevin', 'daisy'];
}

function Child2() {
  Parent2.call(this);
}

var child4 = new Child2();

child4.names.push('yayu');

console.log(child4.names); // ["kevin", "daisy", "yayu"]

var child5 = new Child();

console.log(child5.names); // ["kevin", "daisy"]

// Child 向 Parent 传参
function Parent3(name) {
  this.names = name;
}

function Child3(name) {
  Parent3.call(this, name);
}

var child5 = new Child3('kevin');

console.log(child5.name); // kevin

var child6 = new Child('daisy');

console.log(child6.name); // daisy


// 组合继承（原型链和经典继承合并）
// 优点：融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式。
// 组合继承最大的缺点是会调用两次父构造函数。
function Parent4(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

Parent4.prototype.getName = function () {
  console.log(this.name);
}

function Child4(name, age) {
  Parent4.call(this, name);
}

Child4.prototype = new Parent4(); // 1次
Child4.prototype.constructor = Child4;

var child7 = new Child4('kevin', '18');  // 2次

child7.colors.push('black');

console.log(child7.name); // kevin
console.log(child7.age); // 18
console.log(child7.colors); // ["red", "blue", "green", "black"]

var child8 = new Child4('daisy', '20');

console.log(child8.name); // daisy
console.log(child8.age); // 20
console.log(child8.colors); // ["red", "blue", "green"]


// 原型式继承
// 就是 ES5 Object.create 的模拟实现，将传入的对象作为创建的对象的原型。
// 缺点：包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样。
function createObj(o) {
  function F() {};
  F.prototype = o;
  return new F();
}

var person = {
  name: 'kevin',
  friends: ['daisy', 'kelly']
}

var person1 = createObj(person);
var person2 = createObj(person);

person1.name = 'person1';
console.log(person2.name); // kevin

person1.friends.push('taylor');
console.log(person2.friends); // ["daisy", "kelly", "taylor"]


// 寄生式继承
// 创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象。
// 缺点：跟借用构造函数模式一样，每次创建对象都会创建一遍方法。
function createObjByParasitic(o) {
  var clone = Object.create(o);
  clone.sayName = function () {
    console.log('hi');
  }
  return clone;
}


// 寄生组合式继承
// 主要是针对会调用两次父构造函数
function Parent5 (name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

Parent5.prototype.getName = function () {
  console.log(this.name)
}

function Child5 (name, age) {
  Parent5.call(this, name);
  this.age = age;
}

// 关键的三步
var F = function () {};

F.prototype = Parent5.prototype;

Child5.prototype = new F();


var child9 = new Child5('kevin', '18');

console.log(child9);

// 封装下此方法
// 这种方式的高效率体现它只调用了一次 Parent 构造函数，并且因此避免了在 Parent.prototype 上面创建不必要的、多余的属性。与此同时，原型链还能保持不变；因此，还能够正常使用 instanceof 和 isPrototypeOf。开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式。
function packageObject(o) {
  function F () {};
  F.prototype = o;
  return new F();
}

function packagePrototype(child, parent) {
  var prototype = packageObject(parent.prototype);
  prototype.constructor = child;
  child.prototype = prototype;
}

// 当我们使用的时候：
// packagePrototype(Child, Parent);

function Parent6(name) {
  this.name = name;
}

function Child6(name, age) {
  Parent6.call(this, name);
  this.age = age;
}

packagePrototype(Child6, Parent6);

var child10 = new Child6('liwb');
console.log('child10', child10.name);
