/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/5/17 下午4:00
 * @version $ IIFE
 */

/* name module */

var _ = require('lodash');

// chunk


// map
var ownerArr = [
  {
    "owner": "Colin",
    "pets": [{"name": "dog1"}, {"name": "dog2"}]
  },
  {
    "owner": "John",
    "pets": [{"name": "dog3"}, {"name": "dog4"}]
  }
];

console.log(_.map(ownerArr, 'pets[0].name'));
console.log(_.map(ownerArr, 'pets'));
