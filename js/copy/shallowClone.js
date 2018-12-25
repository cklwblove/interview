// 浅拷贝
function shallowClone(source) {
  var target = {};
  for(var i in source) {
    if (source.hasOwnProperty(i)) {
      target[i] = source[i];
    }
  }

  return target;
}
