/**
 *
 * @authors liwb (lwbhtml@163.com)
 * @date    2019-04-28 18:28
 * @description
 * @version 1.0.0
 */

import sum from './vendor/sum';

console.log('sum(1, 2) = ', sum(1, 2));

// CommonJs
var minus = require('./vendor/minus');
console.log('minus(1, 2) = ', minus(1, 2));

// AMD
require(['./vendor/multi'], function (multi) {
  console.log('multi(1, 2) = ', multi(1, 2));
});
