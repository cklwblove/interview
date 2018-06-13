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

// 工厂模式
// 缺点：对象无法识别，所有的是实例都指向一个原型。

function createPerson(name) {
  var o = new Object();
  o.name = name;
  o.getName = function () {
    console.log(this.name);
  }

  return o;
}

var personFac1 = createPerson('liwb');
var personFac2 = createPerson('chen');
console.log(personFac1);
console.log(personFac2);
console.log(personFac1.prototype === personFac2.prototype);

// 构造函数模式
// 优点：实例可以识别为一个特定的类型
// 缺点：每次创建实例时，每个方法都要被创建一次
function Person(name) {
  this.name = name;
  this.getName = function () {
    console.log(this.name);
  }
}

var person2 = new Person('liwb');
console.log(person2);

// 原型模式
// 优点：方法不会重新创建
// 缺点：1，所有的属性和方法都是共享
//      2，不能初始化参数
function PersonByPrototype() {
}

PersonByPrototype.prototype.name = 'liwb';
PersonByPrototype.prototype.getName = function () {
  console.log(this.name);
}

var person3 = new PersonByPrototype();

console.log(person3);

// 原型模式优化
// 缺点：重写了原型，丢失了constructor属性
function PersonByPrototype1() {

}

PersonByPrototype1.prototype = {
  name: 'liwb',
  getName: function () {
    console.log(this.name);
  }
}

var person4 = new PersonByPrototype1();

console.log(person4);


// 组合模式，构造函数和原型模式结合
// 优点：该共享的共享，该私有的私有，使用最广泛的方式
function PersonCombine(name) {
  this.name = name;
}

PersonCombine.prototype = {
  constructor: PersonCombine,
  getName: function () {
    console.log(this.name);
  }
}

var person5 = new PersonCombine('liwb');

console.log(person5);


// 动态原型模式

function PersonDynamic(name) {
  this.name = name;
  if (typeof this.getName !== 'function') {
    Person.prototype.getName = function () {
      console.log(this.name);
    }
  }
}

var person6 = new Person('liwb');
console.log(person6);


// 寄生器构造函数模式
function Person(name) {
  var o = new Object();
  o.name = name;
  o.getName = function () {
    console.log(this.name);
  }

  return o;
}

var person7 = new Person('kevin');
console.log(person7 instanceof Person) // false
console.log(person7 instanceof Object)  // true

// 稳妥构造函数模式
// 稳妥对象，指的是没有公共属性，而且方法也不引用 this 的对象
// 与寄生构造函数模式有两点不同：
//
// 新创建的实例方法不引用 this
// 不使用 new 操作符调用构造函数
// 稳妥对象最适合在一些安全的环境中。
function PersonCommon(name) {
  var o = new Object();
  o.name = name;
  o.setName = function () {
    console.log(name);
  }

  return o;
}

var person8 = PersonCommon('kevin');

person8.sayName(); // kevin

person8.name = "daisy";

person8.sayName(); // kevin

console.log(person8.name); // daisy
