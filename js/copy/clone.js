// 深拷贝
function clone(source) {
  var target = {};
  for(var i in source) {
    if (source.hasOwnProperty(i)) {
      if (typeof source[i] === 'object') {
        target[i] = clone(source[i]); // 注意这里
      } else {
        target[i] = source[i];
      }
    }
  }

  return target;
}


// 作者：颜海镜
// 链接：https://juejin.im/post/5bc1ae9be51d450e8b140b0c
//   来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
