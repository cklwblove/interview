import _includesInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/includes';

// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

var arrowFunction = function arrowFunction() {
  console.log('箭头函数');
};
arrowFunction();
var arr = [1];
var result = _includesInstanceProperty(arr).call(arr, 2);
console.log(result, 'result');
