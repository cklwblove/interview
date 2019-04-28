/**
 *
 * @authors liwb (lwbhtml@163.com)
 * @date    2019-04-28 18:47
 * @description
 * @version 1.0.0
 */

module.exports = {
  'presets': [
    ['@babel/preset-env',
      {
        'useBuiltIns': 'usage'
      }
    ]
  ],
  'plugins': ['@babel/plugin-transform-runtime']
};

