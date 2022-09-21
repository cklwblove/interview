import path from 'path';

export const BARE_IMPORT_RE = /^[\w@][^:]/;
export const EXTERNAL_TYPES = [
  'css',
  'less',
  'sass',
  'scss',
  'styl',
  'stylus',
  'pcss',
  'postcss',
  'vue',
  'svelte',
  'marko',
  'astro',
  'png',
  'jpe?g',
  'gif',
  'svg',
  'ico',
  'webp',
  'avif'
];

// 预构建产物默认存放在 node_modules 中的 .m-vite 目录中
export const PRE_BUNDLE_DIR = path.join("node_modules", ".m-vite");
