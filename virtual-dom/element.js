/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/7/2 上午9:28
 * @description element
 * JS 对象模拟 DOM 对象的简单实现
 *
 * https://github.com/KieSun/My-wheels/tree/master/Virtual%20Dom?1530516479553
 *
 * 参考
 作者：夕阳
 链接：https://juejin.im/post/5b10dd36e51d4506e04cf802
 来源：掘金
 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

 */

export default class Element {
  constructor(tag, props, children, key) {
    this.tag = tag;
    this.props = props;
    if (Array.isArray(children)) {
      this.children = children;
    } else if (typeof children === 'string') {
      this.key = children;
      this.children = null;
    }
    if (key) this.key = key;
  }
  render () {
    let root = this._createElement(
      this.tag,
      this.props,
      this.children,
      this.key
    );
    document.body.appendChild(root);

    return root;
  }
  create() {
    return this._createElement(this.tag, this.props, this.children, this.key);
  }
  // 创建节点
  _createElement(tag, props, child, key) {
    // tag 创建节点
    let el = document.createElement(tag);
    // 设置节点属性
    for (const key in props) {
      if (props.hasOwnProperty(key)) {
        const value = props[key];
        el.setAttribute(key, value);
      }
    }
    if (key) {
      el.setAttribute('key', key);
    }
    // 递归添加子节点
    if (child) {
      child.forEach((element) => {
        let child;
        if (element instanceof Element) {
          child = this._createElement(
            element.tag,
            element.props,
            element.children,
            element.key
          )
        } else {
          child = document.createTextNode(element);
        }
        el.appendChild(child);
      })
    }
    return el;
  }
}

