import { Loader, Plugin } from 'esbuild';
import { BARE_IMPORT_RE } from '../constants';
import { init, parse } from 'es-module-lexer';
import path from 'path';
import resolve from 'resolve';
import fs from 'fs-extra';
import createDebug from 'debug';

const debug = createDebug('dev');

export function preBundlePlugin(deps: Set<string>): Plugin {
  return {
    name: 'esbuild:pre-bundle',
    setup(build) {
      build.onResolve({
          filter: BARE_IMPORT_RE
        },
        (resolveInfo) => {
          const { path: id, importer } = resolveInfo;
          const isEntry = !importer;
          if (deps.has(id)) {
            return isEntry ? {
                path: id,
                namespace: 'dep'
              }
              : {
                path: resolve.sync(id, { basedir: process.cwd() })
              };
          }
        }
      );

      // 拿到标记后依赖，构造代理模块，交给 esbuild 打包
      build.onLoad(
        {
          filter: /.*/,
          namespace: 'dep'
        },
        async (loadInfo) => {
          await init;
          const id = loadInfo.path;
          const root = process.cwd();
          const entryPath = resolve.sync(id, { basedir: root });
          const code = await fs.readFile(entryPath, 'utf-8');
          const [imports, exports] = await parse(code);
          let proxyModule = [];
          // cjs
          if (!imports.length && !exports.length) {
            // 构造代理模块
            // 下面的代码后面会解释
            const res = require(entryPath);
            const specifiers = Object.keys(res);
            proxyModule.push(
              `export { ${specifiers.join(',')} } from "${entryPath}"`,
              `export default require("${entryPath}")`
            );
          } else {
            // esm 格式比较好处理，export * 或者 export default 即可
            if (exports.includes('default')) {
              proxyModule.push(`import d from "${entryPath}";export default d`);
            }
            proxyModule.push(`export * from "${entryPath}"`);
          }
          debug('代理模块内容: %o', proxyModule.join('\n'));
          const loader = path.extname(entryPath).slice(1);
          return {
            loader: loader as Loader,
            contents: proxyModule.join('\n'),
            resolveDir: root
          };
        }
      );
    }
  };
}
