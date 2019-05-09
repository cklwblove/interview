// 迭代所有父类的属性（存储到 baseCtors 数组中），然后将他们的实现复制到子类中（derivedCtor）
function applyMixins(derivedCtor: any, baseCtors: any) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      if (name !== 'constructor') {
        derivedCtor.prototype[name] = derivedCtor;
      }
    })
  })
}
