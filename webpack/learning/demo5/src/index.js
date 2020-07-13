/**
 *
 * @authors liwb (lwbhtml@163.com)
 * @date    2019-04-28 18:28
 * @description
 * @version 1.0.0
 */

// import '@babel/polyfill';

// import _ from 'lodash';
//
// console.log(_.join(['a', 'b', 'c']));

// 异步代码
import(/* webpackChunkName: 'a'*/ './a').then(function (a) {
  console.log(a);
});

import(/* webpackChunkName: 'b'*/ './b').then(function (b) {
  console.log(b);
});

import(/* webpackChunkName: 'use-lodash'*/ 'lodash').then(function (_) {
  console.log(_.join(['1', '2']));
});


