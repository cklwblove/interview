/**
 *
 * @authors liwb (lwbhtml@163.com)
 * @date    2019-04-28 18:40
 * @description
 * @version 1.0.0
 */

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    publicPath: __dirname + '/dist/', // js 引用的路径或者 CDN 地址
    path: path.resolve(__dirname, 'dist'), // 打包文件的输出目录
    filename: '[name].bundle.js', // 打包后生产的 js 文件
    chunkFilename: '[name].js' // 代码拆分后的文件名
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        lodash: {
          name: 'lodash',
          test: /[\\/]node_modules[\\/]lodash[\\/]/,
          priority: 10
        },
        commons: {
          name: 'commons',
          minSize: 0, //表示在压缩前的最小模块大小,默认值是 30kb
          minChunks: 2, // 最小公用次数
          priority: 5, // 优先级
          reuseExistingChunk: true // 公共模块必开启
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
};
