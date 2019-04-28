/**
 *
 * @authors liwb (lwbhtml@163.com)
 * @date    2019-04-28 18:28
 * @description
 * @version 1.0.0
 */

// import '@babel/polyfill';

const array = [1, 2, 3];
const isES6 = () => console.log(...array);
isES6();

const arr = [new Promise(() => {
}), new Promise(() => {
})];

arr.map(item => {
  console.log(item);
});
