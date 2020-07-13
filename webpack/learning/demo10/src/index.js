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
import './base.css';

// 判断该浏览器支不支持 serviceWorker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('service-worker registed');
      })
      .catch(error => {
        console.log('service-worker registed error');
      });
  });
}

document.addEventListener('click', () => {
  import(/* webpackPrefetch: true */ './click.js').then(({default: func}) => {
    func();
  });
});
