/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/7/2 上午10:16
 * @description diff 算法
 * 比较新旧 DomTree
 * 1，比较节点
 * 2，比较节点的属性
 */
// 既然我们已经通过 JS 来模拟实现了 DOM，那么接下来的难点就在于如何判断旧的对象和新的对象之间的差异。
// DOM 是多叉树的结构，如果需要完整的对比两颗树的差异，那么需要的时间复杂度会是 O(n ^ 3)，这个复杂度肯定是不能接受的。于是 React 团队优化了算法，实现了 O(n) 的复杂度来对比差异。
// 实现 O(n) 复杂度的关键就是只对比同层的节点，而不是跨层对比，这也是考虑到在实际业务中很少会去跨层的移动 DOM 元素。
// 所以判断差异的算法就分为了两步
//
// 首先从上至下，从左往右遍历对象，也就是树的深度遍历，这一步中会给每个节点添加索引，便于最后渲染差异
// 一旦节点有子元素，就去判断子元素是否有不同

// 首先我们来实现树的递归算法，在实现该算法前，先来考虑下两个节点对比会有几种情况
//
// 1，新的节点的 tagName 或者 key 和旧的不同，这种情况代表需要替换旧的节点，并且也不再需要遍历新旧节点的子元素了，因为整个旧节点都被删掉了
// 2，新的节点的 tagName 和 key（可能都没有）和旧的相同，开始遍历子树
// 3，没有新的节点，那么什么都不用做

import {StateEnums, move} from "./util";
import Element from './element';

export default function diff(oldDomTree, newDomTree) {
  // 用于记录差异
  let patches = {};
  // 一开始索引为 0
  dfs(oldDomTree, newDomTree, 0, patches);
  return patches;
}

function dfs(oldNode, newNode, index, patches) {
  // 用于保存子树的更改
  let curPatches = [];
  // 需要判断的三种情况
  // 1,没有新的节点，那什么都不用做
  // 2,新的节点 tagName 和 key 和旧的不同，就替换
  // 3,新的节点 tagName 和 key(可能都没有)和旧的相同，开始遍历子树
  if (!newNode) return;
  if (newNode.tag === oldNode.tag && newNode.key === oldNode.key) {
    // 判断属性是否变更
    let props = diffProps(oldNode.props, newNode.props);
    if (props.length) {
      curPatches.push({
        type: StateEnums.ChangeProps,
        props
      });
    }
    diffChildren(oldNode.children, newNode.children, index, patches);
  } else {
    // 节点不同，需要替换
    curPatches.push({
      type: StateEnums.Replace,
      node: newNode
    });
  }

  if (curPatches.length) {
    if (patches[index]) {
      patches[index] = patches[index].concat(curPatches)
    } else {
      patches[index] = curPatches
    }
  }
}


// 判断 Props 分以下三步骤
// 先遍历 oldProps 查看是否存在删除的属性
// 然后遍历 newProps 查看是否有属性值被修改
// 最后查看是否有属性新增
function diffProps(oldProps, newProps) {
  let change = [];
  for (const key in oldProps) {
    if (oldProps.hasOwnProperty(key) && !newProps[key]) {
      change.push({
        prop: key
      });
    }
  }

  for (const key in newProps) {
    if (newProps.hasOwnProperty(key)) {
      const prop = newProps[key];
      if (oldProps[key] && oldProps[key] !== prop) {
        change.push({
          prop: key,
          value: prop
        });
      } else if (!oldProps[key]) {
        change.push({
          prop: key,
          value: prop
        });
      }
    }
  }

  return change;
}


function diffChildren(oldChild, newChild, index, patches) {
  let {changes, list} = listDiff(oldChild, newChild, index, patches);
  if (changes.length) {
    if (patches[index]) {
      patches[index] = patches[index].concat(changes)
    } else {
      patches[index] = changes
    }
  }
  // 记录上一个遍历过的节点
  let last = null
  oldChild &&
  oldChild.forEach((item, i) => {
    let child = item && item.children
    if (child) {
      index =
        last && last.children ? index + last.children.length + 1 : index + 1
      let keyIndex = list.indexOf(item.key)
      let node = newChild[keyIndex]
      // 只遍历新旧中都存在的节点，其他新增或者删除的没必要遍历
      if (node) {
        dfs(item, node, index, patches)
      }
    } else index += 1
    last = item
  });
}

function listDiff(oldList, newList, index, patches) {
  let oldKeys = getKeys(oldList);
  let newKeys = getKeys(newList);
  let changes = [];

  // 用于保存变更后的节点数据
  // 使用该数组保存有以下好处
  // 1.可以正确获得被删除节点索引
  // 2.交换节点位置只需要操作一遍 DOM
  // 3.用于 `diffChildren` 函数中的判断，只需要遍历
  // 两个树中都存在的节点，而对于新增或者删除的节点来说，完全没必要
  // 再去判断一遍
  let list = [];
  oldList && oldList.forEach((item, i) => {
    let key = item.key;
    if (typeof key === 'string') {
      key = item;
    }
    // 寻找新的 children 中是否含有当前节点
    // 没有的话需要删除
    let index = newKeys.indexOf(key);
    if (index === -1) {
      list.push(null);
    } else {
      list.push(key);
    }
  });
  // 遍历变更后的数组
  let len = list.length;

  // 因为删除数组元素是会更改索引的
  // 所有从后往前删可以保证索引不变
  for (let i = len - 1; i >= 0; i--) {
    // 判断当前元素是否为空，为空表示需要删除
    if (!list[i]) {
      list.splice(i, 1);
      changes.push({
        type: StateEnums.Remove,
        index: i
      });
    }
  }

  // 遍历新的 list，判断是否有节点新增或移动
  // 同时也对 `list` 做节点新增和移动节点的操作
  newList && newList.forEach((item, i) => {
    let key = item.key;
    if (typeof key === 'string') {
      key = item;
    }
    // 寻找旧的 children 中是否含有当前节点
    // 没找到代表新节点，需要插入
    if (index === -1 || key == null) {
      changes.push({
        type: StateEnums.Insert,
        node: item,
        index: i
      })
      list.splice(i, 0, key)
    } else {
      // 找到了，需要判断是否需要移动
      console.log(key)
      if (index !== i) {
        changes.push({
          type: StateEnums.Move,
          from: index,
          to: i
        })
        move(list, index, i)
      }
    }
  });

  return {changes, list};
}

function getKeys(list) {
  let keys = [];
  list && list.forEach((item) => {
    let key;
    if (typeof item === 'string') {
      key = [item];
    } else if (item instanceof Element) {
      key = item.key;
    }
    key.push(key);
  });

  return keys;
}
