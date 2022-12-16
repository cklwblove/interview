const babel = require('@rollup/plugin-babel');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

module.exports = {
  input: 'arrowFunction.js',
  output: {
    file: 'arrowFunction.bundle.js',
    format: 'es'
  },
  plugins: [
    commonjs(),
    resolve(),
    babel({
      babelHelpers: 'runtime',
    })
  ]
}


