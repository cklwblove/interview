// JSON 转类型定义
// 遍历 JSON
// 对于原始类型元素，直接使用 typeof （注意，是 JavaScript 中的 typeof，不是类型查询操作符）的值作为类型，调用 interfaceDeclaration.addProperty 方法新增属性
// 对于对象类型，遍历此对象类型，将此对象类型生成的接口也调用 source.addInterface 方法添加到源码中，并将其名称调用 interfaceDeclaration.addProperty 添加到顶层的对象中
// 对于数组类型，如果其中是原始类型，提取所有原始类型值的类型，合并为联合类型，如果其中是对象类型，则遍历其中的对象类型，类似上一步。

import path from 'path';
import fs from 'fs-extra';
import { Project } from 'ts-morph';
import { capitalize, uniq } from 'lodash';

import json from './source.json';

const p = new Project();

const filePath = path.resolve(__dirname, './source.ts');

fs.rmSync(filePath);
fs.ensureFileSync(filePath);

const source = p.addSourceFileAtPath(filePath);

function objectToInterfaceStruct(
  identifier: string,
  input: Record<string, unknown>
) {
  const interfaceDeclaration = source.addInterface({
    name: identifier,
    isExported: true,
  });

  for (const [key, value] of Object.entries(input)) {
    // 最简单的情况，直接添加属性
    if (['string', 'number', 'boolean'].includes(typeof value)) {
      interfaceDeclaration.addProperty({
        name: key,
        type: typeof value,
      });
    }

    // 简单起见，不处理混合或者更复杂的情况
    if (Array.isArray(value)) {
      // 对象类型元素
      const objectElement = value.filter((v) => typeof v === 'object');
      // 原始类型元素
      const primitiveElement = value.filter((v) =>
        ['string', 'number', 'boolean'].includes(typeof v)
      );

      const primitiveElementTypes = uniq(primitiveElement.map((v) => typeof v));

      // 对对象类型元素，只取第一个来提取类型
      if (objectElement.length > 0) {
        // 再次遍历此方法
        const objectType = objectToInterfaceStruct(
          `${identifier}${capitalize(key)}`,
          objectElement[0]
        );
        interfaceDeclaration.addProperty({
          name: key,
          type: `${objectType.getName()}[]`,
        });
      } else {
        interfaceDeclaration.addProperty({
          name: key,
          // 使用联合类型 + 数组作为此属性的类型
          type: `(${primitiveElementTypes.join(' | ')})[]`,
        });
      }

      continue;
    }

    // 对于对象类型，再次遍历
    if (typeof value === 'object') {
      const nestedStruct = objectToInterfaceStruct(
        `${capitalize(key)}`,
        value as Record<string, unknown>
      );

      interfaceDeclaration.addProperty({
        name: key,
        // 使用从接口结构得到的接口名称
        type: nestedStruct.getName(),
      });
    }
  }

  return interfaceDeclaration;
}

objectToInterfaceStruct('IStruct', json);

source.saveSync();

// console.log(source.getText());
