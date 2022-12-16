/**
 * babel插件
 * 主要还是@babel/core中的transform、parse 对于ast的处理
 * 以及babel/types 中各种转化规则
 *
 * Ast是一种深度优先遍历
 * 内部使用访问者(visitor)模式
 *
 * babel主要也是做的AST的转化
 *
 * 1. 词法分析 tokens : var a  = 1 ["var","a","=","1"]
 * 2. 语法分析 将tokens按照固定规则生成AST语法树
 * 3. 语法树转化 在旧的语法树基础上进行增删改查 生成新的语法书
 * 4. 生成代码 根据新的Tree生成新的代码
 */

// babel核心转化库 包含core -》 AST -》 code的转化实现
/*
 babel/core 其实就可以相当于 esprima+Estraverse+Escodegen
 它会将原本的sourceCode转化为AST语法树
 遍历老的语法树
 遍历老的语法树时候 会检查传入的插件/或者第三个参数中传入的`visitor`
 修改对应匹配的节点
 生成新的语法树
 之后生成新的代码地址
 */

const babelTypes = require('@babel/types');

function ArrowFunctionExpression(path) {
  const node = path.node;
  hoistFunctionEnvironment(path);
  node.type = 'FunctionDeclaration';
}

function hoistFunctionEnvironment(nodePath) {
  // 往上查找 直到找到最近顶部非箭头函数的this p.isFunction() && !p.isArrowFunctionExpression()
  // 或者找到跟节点 p.isProgram()
  const thisEnvFn = nodePath.findParent((p) => {
    return (p.isFunction() && !p.isArrowFunctionExpression()) || p.isProgram();
  });
  // 接下来查找当前作用域中那些地方用到了this的节点路径
  const thisPaths = getScopeInfoInformation(thisEnvFn);
  const thisBindingsName = generateBindName(thisEnvFn);
  // thisEnvFn中添加一个变量 变量名为 thisBindingsName 变量值为 this
  // 相当于 const _this = this
  thisEnvFn.scope.push({
    // 调用babelTypes中生成对应节点
    // 详细你可以在这里查阅到 https://babeljs.io/docs/en/babel-types
    id: babelTypes.Identifier(thisBindingsName),
    init: babelTypes.thisExpression(),
  });
  thisPaths.forEach((thisPath) => {
    // 将this替换称为_this
    const replaceNode = babelTypes.Identifier(thisBindingsName);
    thisPath.replaceWith(replaceNode);
  });
}

/**
 *
 * 查找当前作用域内this使用的地方
 * @param {*} nodePath 节点路径
 */
function getScopeInfoInformation(nodePath) {
  const thisPaths = [];
  // 调用nodePath中的traverse方法进行便利
  // 你可以在这里查阅到  https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md
  nodePath.traverse({
    // 深度遍历节点路径 找到内部this语句
    ThisExpression(thisPath) {
      thisPaths.push(thisPath);
    },
  });
  return thisPaths;
}

/**
 * 判断之前是否存在 _this 这里简单处理下
 * 直接返回固定的值
 * @param {*} path 节点路径
 * @returns
 */
function generateBindName(path, name = '_this', n = '') {
  if (path.scope.hasBinding(name)) {
    generateBindName(path, '_this' + n, parseInt(n) + 1);
  }
  return name;
}

const arrowFunctionPlugin = {
  visitor: {
    ArrowFunctionExpression
  }
}

module.exports = {
  hoistFunctionEnvironment,
  arrowFunctionPlugin
}



