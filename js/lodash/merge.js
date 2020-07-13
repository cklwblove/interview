/**
 *
 * @authors liwb (you@example.org)
 * @date    2018/5/17 下午4:00
 * @version $ IIFE
 */

/* name module */

var _ = require('lodash');

var sourceJson = {
  'list': [
    {
      'type': 'input',
      'icon': 'icon-input',
      'options': {
        'width': '100%',
        'customClass': 'cloud-form-input',
        'defaultValue': '',
        'required': false,
        'dataType': 'string',
        'pattern': '',
        'placeholder': '你好',
        'disabled': false,
        'readonly': true,
        'isShowLabel': false,
        'showPassword': false,
        'labelWidth': 100,
        'isSupportLabelWidth': false,
        'remoteFunc': '',
        'hidden': false,
        'dataBind': true,
        'remoteOption': 'option_1594388079318',
        'requiredMessage': '',
        'dataTypeCheck': false,
        'dataTypeMessage': '',
        'patternCheck': false,
        'patternMessage': '',
        'event': {
          'onInput': 'console.log(\'input 事件\', this.models)',
          'onFocus': 'console.log(\'focus 事件\', this.models)',
          'onBlur': 'console.log(\'blur 事件\', this.models)'
        }
      },
      'name': '单行文本',
      'key': '1594388079318',
      'model': 'input_1594388079318',
      'rules': [
        {
          'type': 'string',
          'message': '单行文本格式不正确'
        }
      ],
      'auth': [],
      'id': 'd7d4c698'
    },
    {
      'type': 'input',
      'icon': 'icon-input',
      'options': {
        'width': '100%',
        'customClass': 'cloud-form-input',
        'defaultValue': '',
        'required': false,
        'requiredMessage': '',
        'dataType': 'string',
        'dataTypeCheck': false,
        'dataTypeMessage': '',
        'pattern': '',
        'patternCheck': false,
        'patternMessage': '',
        'placeholder': '',
        'disabled': false,
        'readonly': false,
        'isShowLabel': false,
        'showPassword': false,
        'labelWidth': 100,
        'isSupportLabelWidth': false,
        'remoteFunc': '',
        'hidden': false,
        'dataBind': true,
        'event': {
          'onInput': 'console.log(\'input 事件\', this.models)',
          'onFocus': 'console.log(\'focus 事件\', this.models)',
          'onBlur': 'console.log(\'blur 事件\', this.models)'
        },
        'remoteOption': 'option_1594453142742'
      },
      'name': '单行文本',
      'id': 'd7d4c698',
      'key': '1594453142742',
      'model': 'input_1594453142742',
      'rules': [],
      'auth': ''
    }
  ],
  'config': {
    'labelWidth': 100,
    'labelPosition': 'right',
    'size': 'small',
    'customClass': 'form-',
    'labelSuffix': '',
    'requestConfig': {
      'url': '',
      'method': 'post',
      'headers': {},
      'queryParams': {},
      'bodyParams': {}
    },
    'requestCurrentRoleConfig': {
      'url': 'http://geekstorm.picp.vip/builder/open/role/current/',
      'method': 'post'
    }
  }
};
var targetJson = {
  'list': [],
  'config': {
    'labelWidth': 100,
    'labelPosition': 'right',
    'size': 'small',
    'customClass': 'form-',
    'labelSuffix': '',
    'requestConfig': {
      'url': '',
      'method': 'post',
      'headers': {},
      'queryParams': {},
      'bodyParams': {}
    },
    'requestCurrentRoleConfig': {
      'url': 'http://geekstorm.picp.vip/builder/open/role/current/',
      'method': 'post'
    }
  }
};


var users = {
  'data': [{'user': 'barney'}, {'age': '50'}]
};
var ages = {
  'data': [{'age': '36'}, {'age': ''}]
};
console.log(_.merge(users, ages));
console.log('ages', ages);


var assignJson = _.assign({}, sourceJson, targetJson);
var extendJson = _.extend({}, sourceJson, targetJson);
var mergeJson = _.merge({}, sourceJson, targetJson);

// console.log('assignJson', assignJson);
// console.log('extendJson', extendJson);
// console.log('mergeJson', JSON.stringify(mergeJson, null, 2));
// console.log(JSON.stringify(sourceJson, null, 2));

