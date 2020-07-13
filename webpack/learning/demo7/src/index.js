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

// document.addEventListener('click', function () {
//   import(/* webpackChunkName: 'use-lodash'*/ 'lodash').then(function (_) {
//     console.log(_.join(['3', '4']));
//   });
// });

document.addEventListener('click', () => {
  import(/* webpackPrefetch: true */ './click.js').then(({default: func}) => {
    func();
  });
});
