/**
插件式设计
所谓插件（Plug-in / Plugin），是一种可以把某些能力或特性添加到某个已有主体程序的程序，它通常遵循一定的编写规范，并只能运行在特定的主体程序中。

插件的设计能带来许多好处，例如

它可以极大地提升软件的可扩展性。很多工程工具都提供了插件能力给开发者，借助社区力量基于插件扩展各种原本不具备的能力，从而极大地提升了生命力；
它可以让主体程序和插件代码解耦，保持主体程序的稳定。可以想象如果 webpack 不是通过插件来扩展能力，那当我们需要某个当前版本不具备的能力时，只能不断地升级 webpack，而这种升级则很容易引入不稳定因素。
它可以帮助我们控制主体程序复杂度。借助插件，我们可以很好地把能力分而治之，化整为零，从而有效地控制系统整体的复杂度。
它可以帮助我们控制程序体积，做到按需引用。由于插件是可以独立地动态加载，我们可以针对性地选择我们需要的插件能力。我们也可以设想，VsCode 如果是把各种能力都由自己完成，其软件大小会是怎样的规模（其实也不会是现在的形态了，比如针对各个编程领域提供一个应用包）。
虽然上面提到的软件都有支持插件，但也各有特点。

从插件的深入程度上来说

一些程序插件就是其核心机制，其程序主体相对精简，大部分能力都是依赖插件来扩充的。例如 webpack 、babel 等大部分代码都是插件，主体主要是软件生命周期调配，状态流转等，以及少量核心能力的实现。再比如 https://github.com/DevExpress/devextreme-reactive 中提供的几个复杂 React 组件也基本上是一个一个插件来完成的。
  相比之下，另一些程序的插件更多是对其能力上的一个补充，其插件能完成的工作相对有限（主体程序暴露的给插件的能力较少），但能很好地完成某些场景的扩展。
而从插件面向的开发者来说，也有几种方式

对主体程序开发和第三方开发者一视同仁，都以相同的插件机制来扩展能力。这类程序通常也具备上面提到的插件作为核心机制的特征，例如 webpack 就是典范。个人认为这种机制可以提供能力强大的插件机制，但同时也模糊了两类开发者的界限，使得上手开发插件的门槛相对较高，甚至很多时候需要了解原本系统提供的插件实现。
插件机制是为了方便主体程序开发者，不对第三方开发者暴露。https://github.com/DevExpress/devextreme-reactive 的 PivotGrid 底层是基于插件化的框架，但是暴露给 PivotGrid 开发者的属性则基本没有插件的痕迹，已经做了封装。
  插件是为了第三方开发者扩展系统能力。这类主体程序通常不依赖插件机制来实现特定功能，插件机制只是为了提供扩展能力，通常这类插件机制提供的能力也相对特化。

 当我们设计一个插件系统时，我们要考虑几个问题：

 程序中哪些是易变的，哪些是相对稳定的。易变的部分应暴露出相应的能力由插件来完成。
 插件如何影响程序。通常会以扩展行为，修改状态，变更展示的方式体现。
 **/

// 计算器

// 初版

class Calculator {
  constructor (initial) {
    this.num = initial;
  }
  add(num) {
    this.num = this.num + num;
    return this;
  }
  subtract(num) {
    this.num = this.num - num;
    return this;
  }
  result() {
    return this.num;
  }
}

const myCalculator = new Calculator(5);
myCalculator.add(5).subtract(2).result();

// 计算器的主要抽象是运算，即当前值和一个新值的运算过程，这部分是稳定的，而支持的运算逻辑是可扩展的，适合做成插件

// 改造

// 程序主体，定义程序核心逻辑是增加计算器运算能力
class Calculator1 {
  plugins = []

  constructor (initial) {
   this.num = initial;
  }
  use(plugin) {
    this.plugins.push(plugin);
    this[plugin.name] = plugin.calculate.bind(this);
  }
  result() {
    return this.num;
  }

  help() {
    return `support ${this.plugins.map(plugin => plugin.name).join(',')}`;
  }
}

// interface Plugin {
//   name: string;
//   calculate(num: number) => this;
// }

// 插件实现
class AddPlugin {
  name = 'add'
  calculate (num) {
    this.num = this.num + num;
    return this;
  }
}

class SubtractPlugin {
  name = 'subtract'
  calculate (num) {
    this.num = this.num - num;
    return this;
  }
}

const myCalculator1 = new Calculator1(5);
// 插件安装
myCalculator1.use(new AddPlugin());
myCalculator1.use(new SubtractPlugin());

// console.log(myCalculator1.add(5).subtract(2).result()); // 8
console.log(myCalculator1.help())
