/**
 *
 * @authors liwb (you@example.org)
 * https://github.com/mqyqingfeng/Blog/issues/49
 * @date    2018/6/25 下午5:12
 * @description 递归
 * 程序调用自身的编程技巧称为递归
 * 构成递归需具备边界条件、递归前进段和递归返回段，当边界条件不满足时，递归前进，当边界条件满足时，递归返回。阶乘中的 n == 1 和 斐波那契数列中的 n < 2 都是边界条件。

 总结一下递归的特点：

 子问题须与原始问题为同样的事，且更为简单；
 不能无限制地调用本身，须有个出口，化简为非递归状况处理。
 */

/* name module */

// 当执行一个函数的时候，就会创建一个执行上下文，并且压入执行上下文栈，当函数执行完毕的时候，就会将函数的执行上下文从栈中弹出。
// 尾调用
// 尾调用，是指函数内部的最后一个动作是函数调用。该调用的返回值，直接返回给函数。

// 斐波拉契函数
function fibonacci(n) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)) // 1 1 2 3 5
