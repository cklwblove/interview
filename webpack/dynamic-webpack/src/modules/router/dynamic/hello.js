/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/5/21 18:09
 * @version $ IIFE
 */

/* name module */

export default [
  {
    path: '/hello',
    name: 'hello',
    component(resolve) {
      require(['@views/hello'], resolve);
    }
  }
]
