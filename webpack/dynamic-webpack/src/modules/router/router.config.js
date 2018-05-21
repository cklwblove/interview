/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/5/21 18:09
 * @version $ IIFE
 */

/* name module */

export default [
  {
    path: '/home',
    name: 'home',
    component(resolve) {
      require(['@views/home'], resolve);
    }
  }
]
