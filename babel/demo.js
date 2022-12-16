const babel = require('@babel/core');
const babelTypes = require('@babel/types');
const { arrowFunctionPlugin } = require('./plugin-transform-arrow-functions');


const sourceCode = `const arrowFunc = () => {
	console.log(this)
}`;

const targetCode = babel.transform(sourceCode, {
  plugins: [arrowFunctionPlugin],
});
// 打印编译后代码
console.log(targetCode.code)
