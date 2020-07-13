/**
 *
 * @authors liwb (lwbhtml@163.com)
 * @date    2020/7/13 16:43
 * @description
 * @version 1.0.0
 */
var _ = require('lodash');
const generateUUID = () => {
  let d = new Date().getTime();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16);
  });
};

var inputMeta = {
  type: 'input',
  icon: 'icon-input',
  options: {
    width: '100%',
    customClass: 'cloud-form-input',
    defaultValue: '',
    required: false,
    requiredMessage: '',
    dataType: 'string',
    dataTypeCheck: false,
    dataTypeMessage: '',
    pattern: '',
    patternCheck: false,
    patternMessage: '',
    placeholder: '',
    disabled: false,
    readonly: false,
    isShowLabel: false,
    showPassword: false
  }
};
var selectMeta = {
  type: 'select',
  icon: 'icon-select',
  options: {
    defaultValue: 'select 覆盖',
    multiple: false,
    disabled: false,
    clearable: false,
    placeholder: '',
    required: false,
    requiredMessage: '',
    showLabel: false,
    width: '',
    options: [
      {
        value: '选项一'
      },
      {
        value: '选项二'
      }, {
        value: '选项三'
      }
    ],
    // 是否需要远程
    // dict
    remote: false,
    // option
    // func
    remoteType: 'option',
    filterable: false,
    remoteOption: '',
    remoteOptions: [],
    props: {
      value: 'value',
      label: 'label'
    },
    customClass: 'form-select',
    isShowText: true,
  },
  // 远程数据或者数据字典
  remoteAPI: {
    url: '',
    requestMethod: 'get'
  }
};

var data = {
  'list': [
    {
      'type': 'grid',
      'icon': 'icon-grid',
      'columns': [
        {
          'span': 12,
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
                'placeholder': '',
                'disabled': false,
                'readonly': false,
                'isShowLabel': false,
                'showPassword': false,
                'labelWidth': 100,
                'isSupportLabelWidth': false,
                'remoteFunc': 'func_1582690223570',
                'hidden': false,
                'dataBind': true,
                'remoteOption': 'option_1582690223570'
              },
              'name': '类名',
              'key': '1582690223570',
              'model': 'className',
              'rules': [
                {
                  'type': 'string',
                  'message': '类名格式不正确'
                }
              ],
              'id': '32016a01'
            }
          ]
        },
        {
          'span': 12,
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
                'placeholder': '',
                'disabled': false,
                'readonly': false,
                'isShowLabel': false,
                'showPassword': false,
                'labelWidth': 100,
                'isSupportLabelWidth': false,
                'remoteFunc': 'func_1582690348983',
                'hidden': false,
                'dataBind': true,
                'remoteOption': 'option_1582690348983'
              },
              'name': '包路径',
              'key': '1582690348983',
              'model': 'packageName',
              'rules': [
                {
                  'type': 'string',
                  'message': '包路径格式不正确'
                }
              ],
              'id': 'db167d49'
            }
          ]
        },
        {
          'span': 12,
          'list': []
        }
      ],
      'options': {
        'gutter': 0,
        'justify': 'start',
        'align': 'top',
        'hidden': false,
        'customClass': 'form-grid',
        'remoteFunc': 'func_1582690213694',
        'remoteOption': 'option_1582690213694',
        'isSupportLabelWidth': false,
        'labelWidth': 100
      },
      'name': '栅格布局',
      'key': '1582690213694',
      'model': 'grid_1582690213694',
      'rules': [],
      'id': '4f843dd8',
      'auth': []
    },
    {
      'type': 'input',
      'icon': 'icon-input',
      'options': {
        'width': '100%',
        'customClass': 'cloud-form-input',
        'defaultValue': '你好',
        'required': false,
        'dataType': 'string',
        'pattern': '',
        'placeholder': '',
        'disabled': false,
        'readonly': false,
        'isShowLabel': false,
        'showPassword': false,
        'labelWidth': 100,
        'isSupportLabelWidth': false,
        'remoteFunc': 'func_1582690498183',
        'hidden': false,
        'dataBind': true,
        'remoteOption': 'option_1582690498183'
      },
      'name': '描述',
      'key': '1582690498183',
      'model': 'classComment',
      'rules': [
        {
          'type': 'string',
          'message': '描述格式不正确'
        }
      ],
      'id': '9d470c95'
    },
    {
      'type': 'tabs',
      'icon': 'icon-tabs',
      'tabs': [
        {
          'label': '模型',
          'name': 'tab_1',
          'list': [
            {
              'type': 'table',
              'icon': 'icon-table',
              'options': {
                'defaultValue': [],
                'customClass': 'form-table',
                'disabled': false,
                'isShowLabel': false,
                'labelWidth': 100,
                'isSupportLabelWidth': false,
                'remoteFunc': 'func_1582653979060',
                'hidden': false,
                'dataBind': true,
                'remoteOption': 'option_1582653979060'
              },
              'tableColumns': [
                {
                  'type': 'input',
                  'icon': 'icon-input',
                  'options': {
                    'width': '100px',
                    'customClass': 'cloud-form-input',
                    'defaultValue': '',
                    'required': true,
                    'dataType': 'string',
                    'pattern': '',
                    'placeholder': '',
                    'disabled': false,
                    'readonly': false,
                    'isShowLabel': false,
                    'showPassword': false,
                    'labelWidth': 100,
                    'isSupportLabelWidth': false,
                    'remoteFunc': 'func_1582653981608',
                    'hidden': false,
                    'dataBind': true,
                    'remoteOption': 'option_1582653981608',
                    'tableColumn': true
                  },
                  'name': '名',
                  'novalid': {},
                  'key': '1582653981608',
                  'model': 'fieldName',
                  'rules': [
                    {
                      'type': 'string',
                      'message': '名格式不正确'
                    },
                    {
                      'required': true,
                      'message': '名必须填写'
                    }
                  ],
                  'id': '9298a916'
                },
                {
                  'type': 'select',
                  'icon': 'icon-select',
                  'options': {
                    'defaultValue': '',
                    'multiple': false,
                    'disabled': false,
                    'clearable': false,
                    'placeholder': '',
                    'required': false,
                    'showLabel': false,
                    'width': '100px',
                    'options': [
                      {
                        'value': 'String'
                      },
                      {
                        'value': 'Integer'
                      },
                      {
                        'value': 'Double'
                      },
                      {
                        'value': 'Date'
                      },
                      {
                        'value': 'BigDecimal'
                      },
                      {
                        'value': 'Text'
                      },
                      {
                        'value': 'Blob'
                      }
                    ],
                    'remote': false,
                    'remoteType': 'option',
                    'filterable': false,
                    'remoteOption': 'option_1582654015085',
                    'remoteOptions': [],
                    'props': {
                      'value': 'value',
                      'label': 'label'
                    },
                    'customClass': 'form-select',
                    'isShowLabel': false,
                    'labelWidth': 100,
                    'isSupportLabelWidth': false,
                    'remoteFunc': 'func_1582654015085',
                    'hidden': false,
                    'dataBind': true,
                    'tableColumn': true
                  },
                  'remoteAPI': {
                    'url': '',
                    'requestMethod': 'get'
                  },
                  'name': '类型',
                  'novalid': {},
                  'key': '1582654015085',
                  'model': 'fieldClass',
                  'rules': []
                },
                {
                  'type': 'number',
                  'icon': 'icon-number',
                  'options': {
                    'width': '100px',
                    'required': false,
                    'defaultValue': 0,
                    'min': 0,
                    'max': 0,
                    'step': 1,
                    'disabled': false,
                    'controlsPosition': '',
                    'customClass': 'form-input-number',
                    'isShowLabel': false,
                    'labelWidth': 100,
                    'isSupportLabelWidth': false,
                    'remoteFunc': 'func_1582655260941',
                    'hidden': false,
                    'dataBind': true,
                    'remoteOption': 'option_1582655260941',
                    'tableColumn': true
                  },
                  'name': '长度',
                  'novalid': {},
                  'key': '1582655260941',
                  'model': 'length',
                  'rules': []
                },
                {
                  'type': 'number',
                  'icon': 'icon-number',
                  'options': {
                    'width': '100px',
                    'required': false,
                    'defaultValue': 0,
                    'min': 0,
                    'max': 0,
                    'step': 1,
                    'disabled': false,
                    'controlsPosition': '',
                    'customClass': 'form-input-number',
                    'isShowLabel': false,
                    'labelWidth': 100,
                    'isSupportLabelWidth': false,
                    'remoteFunc': 'func_1582655312006',
                    'hidden': false,
                    'dataBind': true,
                    'remoteOption': 'option_1582655312006',
                    'tableColumn': true
                  },
                  'name': '小数位',
                  'novalid': {},
                  'key': '1582655312006',
                  'model': 'decimalLength',
                  'rules': []
                },
                {
                  'type': 'select',
                  'icon': 'icon-select',
                  'options': {
                    'defaultValue': [],
                    'multiple': true,
                    'disabled': false,
                    'clearable': false,
                    'placeholder': '',
                    'required': false,
                    'showLabel': false,
                    'width': '100px',
                    'options': [
                      {
                        'value': 'NotNull',
                        'label': 'a'
                      },
                      {
                        'value': 'NotEmpty'
                      },
                      {
                        'value': 'NotBlank'
                      },
                      {
                        'value': 'Email',
                        'label': 'b'
                      },
                      {
                        'value': 'Phone',
                        'label': 'c'
                      }
                    ],
                    'remote': false,
                    'remoteType': 'option',
                    'filterable': true,
                    'remoteOption': 'option_1593859363863',
                    'remoteOptions': [],
                    'props': {
                      'value': 'value',
                      'label': 'label'
                    },
                    'customClass': 'form-select',
                    'isShowLabel': false,
                    'labelWidth': 100,
                    'isSupportLabelWidth': false,
                    'remoteFunc': 'func_1593859363863',
                    'hidden': false,
                    'dataBind': true,
                    'tableColumn': true
                  },
                  'remoteAPI': {
                    'url': '',
                    'requestMethod': 'get'
                  },
                  'name': '检验规则',
                  'novalid': {},
                  'key': '1593859363863',
                  'model': 'validation',
                  'rules': []
                },
                {
                  'type': 'input',
                  'icon': 'icon-input',
                  'options': {
                    'width': '100px',
                    'customClass': 'cloud-form-input',
                    'defaultValue': '',
                    'required': false,
                    'dataType': 'string',
                    'pattern': '',
                    'placeholder': '',
                    'disabled': false,
                    'readonly': false,
                    'isShowLabel': false,
                    'showPassword': false,
                    'labelWidth': 100,
                    'isSupportLabelWidth': false,
                    'remoteFunc': 'func_1593860002399',
                    'hidden': false,
                    'dataBind': true,
                    'remoteOption': 'option_1593860002399',
                    'tableColumn': true
                  },
                  'name': '正则规则',
                  'novalid': {},
                  'key': '1593860002399',
                  'model': 'input_1593860002399',
                  'rules': [
                    {
                      'type': 'string',
                      'message': '正则规则格式不正确'
                    }
                  ]
                },
                {
                  'type': 'input',
                  'icon': 'icon-input',
                  'options': {
                    'width': '100px',
                    'customClass': 'cloud-form-input',
                    'defaultValue': '',
                    'required': false,
                    'dataType': 'string',
                    'pattern': '',
                    'placeholder': '',
                    'disabled': false,
                    'readonly': false,
                    'isShowLabel': false,
                    'showPassword': false,
                    'labelWidth': 100,
                    'isSupportLabelWidth': false,
                    'remoteFunc': 'func_1582655191469',
                    'hidden': false,
                    'dataBind': true,
                    'remoteOption': 'option_1582655191469',
                    'tableColumn': true
                  },
                  'name': '默认值',
                  'novalid': {},
                  'key': '1582655191469',
                  'model': 'default',
                  'rules': [
                    {
                      'type': 'string',
                      'message': '默认值格式不正确'
                    }
                  ]
                },
                {
                  'type': 'input',
                  'icon': 'icon-input',
                  'options': {
                    'width': '250px',
                    'customClass': 'cloud-form-input',
                    'defaultValue': '',
                    'required': false,
                    'dataType': 'string',
                    'pattern': '',
                    'placeholder': '',
                    'disabled': false,
                    'readonly': false,
                    'isShowLabel': false,
                    'showPassword': false,
                    'labelWidth': 100,
                    'isSupportLabelWidth': false,
                    'remoteFunc': 'func_1582655819942',
                    'hidden': false,
                    'dataBind': true,
                    'remoteOption': 'option_1582655819942',
                    'tableColumn': true
                  },
                  'name': '描述',
                  'novalid': {},
                  'key': '1582655819942',
                  'model': 'fieldComment',
                  'rules': [
                    {
                      'type': 'string',
                      'message': '描述格式不正确'
                    }
                  ]
                }
              ],
              'name': '字段',
              'key': '1582653979060',
              'model': 'fieldList',
              'rules': []
            }
          ]
        },
        {
          'label': '索引',
          'name': 'tab_1582655394265',
          'list': [
            {
              'type': 'table',
              'icon': 'icon-table',
              'options': {
                'defaultValue': [],
                'customClass': 'form-table',
                'disabled': false,
                'isShowLabel': false,
                'labelWidth': 100,
                'isSupportLabelWidth': false,
                'remoteFunc': 'func_1582655485586',
                'hidden': false,
                'dataBind': true,
                'remoteOption': 'option_1582655485586'
              },
              'tableColumns': [
                {
                  'type': 'input',
                  'icon': 'icon-input',
                  'options': {
                    'width': '200px',
                    'customClass': 'cloud-form-input',
                    'defaultValue': '',
                    'required': false,
                    'dataType': 'string',
                    'pattern': '',
                    'placeholder': '',
                    'disabled': false,
                    'readonly': false,
                    'isShowLabel': false,
                    'showPassword': false,
                    'labelWidth': 100,
                    'isSupportLabelWidth': false,
                    'remoteFunc': 'func_1582656259825',
                    'hidden': false,
                    'dataBind': true,
                    'remoteOption': 'option_1582656259825',
                    'tableColumn': true
                  },
                  'name': '索引名称',
                  'novalid': {},
                  'key': '1582656259825',
                  'model': 'indexName',
                  'rules': [
                    {
                      'type': 'string',
                      'message': '索引名称格式不正确'
                    }
                  ]
                },
                {
                  'type': 'input',
                  'icon': 'icon-input',
                  'options': {
                    'width': '200px',
                    'customClass': 'cloud-form-input',
                    'defaultValue': '',
                    'required': false,
                    'dataType': 'string',
                    'pattern': '',
                    'placeholder': '',
                    'disabled': false,
                    'readonly': false,
                    'isShowLabel': false,
                    'showPassword': false,
                    'labelWidth': 100,
                    'isSupportLabelWidth': false,
                    'remoteFunc': 'func_1582656262196',
                    'hidden': false,
                    'dataBind': true,
                    'remoteOption': 'option_1582656262196',
                    'tableColumn': true
                  },
                  'name': '字段名称',
                  'novalid': {},
                  'key': '1582656262196',
                  'model': 'fieldName',
                  'rules': [
                    {
                      'type': 'string',
                      'message': '字段名称格式不正确'
                    }
                  ]
                },
                {
                  'type': 'select',
                  'icon': 'icon-select',
                  'options': {
                    'defaultValue': '',
                    'multiple': false,
                    'disabled': false,
                    'clearable': false,
                    'placeholder': '',
                    'required': false,
                    'showLabel': false,
                    'width': '200px',
                    'options': [
                      {
                        'value': 'normal'
                      },
                      {
                        'value': 'unipue'
                      }
                    ],
                    'remote': false,
                    'remoteType': 'option',
                    'filterable': false,
                    'remoteOption': 'option_1582656430524',
                    'remoteOptions': [],
                    'props': {
                      'value': 'value',
                      'label': 'label'
                    },
                    'customClass': 'form-select',
                    'isShowLabel': false,
                    'labelWidth': 100,
                    'isSupportLabelWidth': false,
                    'remoteFunc': 'func_1582656430524',
                    'hidden': false,
                    'dataBind': true,
                    'tableColumn': true
                  },
                  'remoteAPI': {
                    'url': '',
                    'requestMethod': 'get'
                  },
                  'name': '索引类型',
                  'novalid': {},
                  'key': '1582656430524',
                  'model': 'indexType',
                  'rules': []
                }
              ],
              'name': '索引表',
              'key': '1582655485586',
              'model': 'indexList',
              'rules': []
            }
          ]
        },
        {
          'label': '依赖关系',
          'name': 'tab_1585022111120',
          'list': [
            {
              'type': 'table',
              'icon': 'icon-table',
              'options': {
                'defaultValue': [],
                'customClass': 'form-table',
                'disabled': false,
                'isShowLabel': false,
                'labelWidth': 100,
                'isSupportLabelWidth': false,
                'remoteFunc': 'func_1585022187427',
                'hidden': false,
                'dataBind': true,
                'remoteOption': 'option_1585022187427'
              },
              'tableColumns': [
                {
                  'type': 'select',
                  'icon': 'icon-select',
                  'options': {
                    'defaultValue': '',
                    'multiple': false,
                    'disabled': false,
                    'clearable': false,
                    'placeholder': '',
                    'required': false,
                    'showLabel': false,
                    'width': '200px',
                    'options': [
                      {
                        'value': '选项一'
                      },
                      {
                        'value': '选项二'
                      },
                      {
                        'value': '选项三'
                      }
                    ],
                    'remote': 'dict',
                    'remoteType': 'option',
                    'filterable': false,
                    'remoteOption': 'option_1585022239587',
                    'remoteOptions': [],
                    'props': {
                      'value': 'value',
                      'label': 'label'
                    },
                    'customClass': 'form-select',
                    'isShowLabel': false,
                    'labelWidth': 100,
                    'isSupportLabelWidth': false,
                    'remoteFunc': 'func_1585022239587',
                    'hidden': false,
                    'dataBind': true,
                    'tableColumn': true,
                    'dictCode': 'domain:list'
                  },
                  'remoteAPI': {
                    'url': 'http://geekstorm.picp.vip/builder/api/v1/engine/model/getPageList?modelType=domainmodel&page=1&size=99999',
                    'requestMethod': 'GET'
                  },
                  'name': '关联模型',
                  'novalid': {},
                  'key': '1585022244971',
                  'model': 'domainModelId',
                  'rules': [],
                  'keyValue': {
                    'keyField': 'name',
                    'valueField': 'id'
                  },
                  'dictOptions': [
                    {
                      'id': 1,
                      'name': '测试',
                      'category': '5f248150161c426ebcbaf85f7b2a8b88',
                      'code': '1d9fc31d50b74a089e9577f00ed95189',
                      'version': null,
                      'metaInfo': null,
                      'deploymentId': 103,
                      'datasourceId': 2,
                      'isGenerateTable': {
                        'value': 1,
                        'display': '是'
                      },
                      'bytearray': {
                        'id': 21,
                        'name': null,
                        'bytes': {
                          'classComment': '类描述信息',
                          'className': 'testTable',
                          'indexList': [],
                          'packageName': 'com.geekstorm.entity',
                          'fieldList': [
                            {
                              'name': 'name',
                              'type': 'String',
                              'length': 50,
                              'decimalLength': 0,
                              'default': '',
                              'describe': '姓名',
                              'fieldComment': '姓名',
                              'columnName': 'name',
                              'fieldClass': 'String',
                              'fieldName': 'name'
                            },
                            {
                              'name': 'age',
                              'type': 'Integer',
                              'length': 10,
                              'decimalLength': 0,
                              'default': '',
                              'describe': '年龄',
                              'fieldComment': '年龄',
                              'columnName': 'age',
                              'fieldClass': 'Integer',
                              'fieldName': 'age'
                            }
                          ]
                        },
                        'createUserId': '1',
                        'createTime': '2020-03-03 22:46:58',
                        'updateUserId': '1',
                        'updateTime': '2020-03-03 22:46:58',
                        'ownOrganCode': null,
                        'ownUserId': null,
                        'isDelete': 1,
                        'remark': null
                      },
                      'createUserId': '1',
                      'createTime': '2020-02-26 03:48:07',
                      'updateUserId': '1',
                      'updateTime': '2020-03-18 00:56:11',
                      'ownOrganCode': '1',
                      'ownUserId': '1',
                      'isDelete': 1,
                      'remark': null
                    },
                    {
                      'id': 6,
                      'name': 'TestTable2',
                      'category': '5f248150161c426ebcbaf85f7b2a8b88',
                      'code': '651f8177927a46cd9caeaaf92e24f9e6',
                      'version': null,
                      'metaInfo': null,
                      'deploymentId': 103,
                      'datasourceId': 2,
                      'isGenerateTable': {
                        'value': 1,
                        'display': '是'
                      },
                      'bytearray': {
                        'id': 20,
                        'name': null,
                        'bytes': {
                          'classComment': '测试表2',
                          'className': 'TestTable2',
                          'indexList': [],
                          'packageName': 'com.geekstorm.entity',
                          'fieldList': [
                            {
                              'fieldName': 'name',
                              'fieldClass': 'String',
                              'length': 0,
                              'decimalLength': 0,
                              'default': '',
                              'fieldComment': '姓名'
                            },
                            {
                              'fieldName': 'sex',
                              'fieldClass': 'Integer',
                              'length': 0,
                              'decimalLength': 0,
                              'default': '',
                              'fieldComment': '性别'
                            }
                          ]
                        },
                        'createUserId': '1',
                        'createTime': '2020-03-03 10:30:42',
                        'updateUserId': '1',
                        'updateTime': '2020-03-03 10:30:42',
                        'ownOrganCode': null,
                        'ownUserId': null,
                        'isDelete': 1,
                        'remark': null
                      },
                      'createUserId': '1',
                      'createTime': '2020-03-03 01:10:38',
                      'updateUserId': '1',
                      'updateTime': '2020-03-18 00:56:11',
                      'ownOrganCode': '1',
                      'ownUserId': '1',
                      'isDelete': 1,
                      'remark': null
                    },
                    {
                      'id': 7,
                      'name': 'testabcd',
                      'category': '5f248150161c426ebcbaf85f7b2a8b88',
                      'code': '678936affa7944fa8b17953fff2e0c83',
                      'version': null,
                      'metaInfo': null,
                      'deploymentId': 103,
                      'datasourceId': 2,
                      'isGenerateTable': {
                        'value': 1,
                        'display': '是'
                      },
                      'bytearray': {
                        'id': 188,
                        'name': null,
                        'bytes': {
                          'classComment': '测试类',
                          'className': 'testabcd',
                          'indexList': [],
                          'packageName': 'com.geekstorm.entity',
                          'fieldList': [
                            {
                              'fieldName': 'a',
                              'fieldClass': 'String',
                              'length': 50,
                              'decimalLength': 0,
                              'default': '',
                              'fieldComment': 'a'
                            },
                            {
                              'fieldName': 'b',
                              'fieldClass': 'String',
                              'length': 50,
                              'decimalLength': 0,
                              'default': '',
                              'fieldComment': 'b'
                            },
                            {
                              'fieldName': 'c',
                              'fieldClass': 'Integer',
                              'length': 0,
                              'decimalLength': 0,
                              'default': '',
                              'fieldComment': 'c'
                            }
                          ]
                        },
                        'createUserId': '1',
                        'createTime': '2020-03-14 15:22:31',
                        'updateUserId': '1',
                        'updateTime': '2020-03-14 15:22:31',
                        'ownOrganCode': null,
                        'ownUserId': null,
                        'isDelete': 1,
                        'remark': null
                      },
                      'createUserId': '1',
                      'createTime': '2020-03-03 01:21:08',
                      'updateUserId': '1',
                      'updateTime': '2020-03-18 00:56:11',
                      'ownOrganCode': '1',
                      'ownUserId': '1',
                      'isDelete': 1,
                      'remark': null
                    },
                    {
                      'id': 11,
                      'name': '订单模型',
                      'category': '5f248150161c426ebcbaf85f7b2a8b88',
                      'code': 'c5ac6c58d3e442b988d2c1e9a404db50',
                      'version': null,
                      'metaInfo': null,
                      'deploymentId': 103,
                      'datasourceId': 2,
                      'isGenerateTable': {
                        'value': 1,
                        'display': '是'
                      },
                      'bytearray': {
                        'id': 253,
                        'name': null,
                        'bytes': {
                          'classComment': '订单领域模型',
                          'className': 'test_order',
                          'indexList': [],
                          'packageName': 'com.geekstorm.entity',
                          'fieldList': [
                            {
                              'fieldName': 'order_no',
                              'fieldClass': 'String',
                              'length': 0,
                              'decimalLength': 0,
                              'default': '',
                              'fieldComment': '订单编号'
                            },
                            {
                              'fieldName': 'amount',
                              'fieldClass': 'Integer',
                              'length': 0,
                              'decimalLength': 0,
                              'default': '',
                              'fieldComment': '订单数据'
                            },
                            {
                              'fieldName': 'total_price',
                              'fieldClass': 'Integer',
                              'length': 0,
                              'decimalLength': 0,
                              'default': '',
                              'fieldComment': '订单金额'
                            }
                          ]
                        },
                        'createUserId': '1',
                        'createTime': '2020-03-16 18:45:06',
                        'updateUserId': '1',
                        'updateTime': '2020-03-16 18:45:06',
                        'ownOrganCode': null,
                        'ownUserId': null,
                        'isDelete': 1,
                        'remark': null
                      },
                      'createUserId': '1',
                      'createTime': '2020-03-16 18:34:45',
                      'updateUserId': '1',
                      'updateTime': '2020-03-18 00:56:11',
                      'ownOrganCode': '1',
                      'ownUserId': '1',
                      'isDelete': 1,
                      'remark': null
                    },
                    {
                      'id': 12,
                      'name': '积分模型',
                      'category': '5f248150161c426ebcbaf85f7b2a8b88',
                      'code': '134b4e4c91174ce98c2d150b1f6cf6a2',
                      'version': null,
                      'metaInfo': null,
                      'deploymentId': 103,
                      'datasourceId': 2,
                      'isGenerateTable': {
                        'value': 1,
                        'display': '是'
                      },
                      'bytearray': {
                        'id': 268,
                        'name': null,
                        'bytes': {
                          'classComment': '积分模型',
                          'className': 'test_integral',
                          'indexList': [],
                          'packageName': 'com.geekstorm.entity',
                          'fieldList': [
                            {
                              'fieldName': 'points',
                              'fieldClass': 'Integer',
                              'length': 0,
                              'decimalLength': 0,
                              'default': '',
                              'fieldComment': '积分'
                            },
                            {
                              'fieldName': 'userid',
                              'fieldClass': 'Integer',
                              'length': 0,
                              'decimalLength': 0,
                              'default': '',
                              'fieldComment': '用户ID'
                            },
                            {
                              'fieldName': 'description',
                              'fieldClass': 'String',
                              'length': 0,
                              'decimalLength': 0,
                              'default': '',
                              'fieldComment': '描述'
                            }
                          ]
                        },
                        'createUserId': '1',
                        'createTime': '2020-03-16 19:26:29',
                        'updateUserId': '1',
                        'updateTime': '2020-03-16 19:26:29',
                        'ownOrganCode': null,
                        'ownUserId': null,
                        'isDelete': 1,
                        'remark': null
                      },
                      'createUserId': '1',
                      'createTime': '2020-03-16 19:23:48',
                      'updateUserId': '1',
                      'updateTime': '2020-03-18 00:56:11',
                      'ownOrganCode': '1',
                      'ownUserId': '1',
                      'isDelete': 1,
                      'remark': null
                    },
                    {
                      'id': 13,
                      'name': '余额模型',
                      'category': '5f248150161c426ebcbaf85f7b2a8b88',
                      'code': 'a131a5b38ae74d7e9c74e8ae3eac80f4',
                      'version': null,
                      'metaInfo': null,
                      'deploymentId': 103,
                      'datasourceId': 2,
                      'isGenerateTable': {
                        'value': 1,
                        'display': '是'
                      },
                      'bytearray': {
                        'id': 274,
                        'name': null,
                        'bytes': {
                          'classComment': '余额模型',
                          'className': 'test_yue',
                          'indexList': [],
                          'packageName': 'com.geekstorm.entity',
                          'fieldList': [
                            {
                              'fieldName': 'balance',
                              'fieldClass': 'Integer',
                              'length': 0,
                              'decimalLength': 0,
                              'default': '',
                              'fieldComment': '钱'
                            },
                            {
                              'fieldName': 'userid',
                              'fieldClass': 'Integer',
                              'length': 0,
                              'decimalLength': 0,
                              'default': '',
                              'fieldComment': '用户ID'
                            }
                          ]
                        },
                        'createUserId': '1',
                        'createTime': '2020-03-16 19:36:02',
                        'updateUserId': '1',
                        'updateTime': '2020-03-16 19:36:02',
                        'ownOrganCode': null,
                        'ownUserId': null,
                        'isDelete': 1,
                        'remark': null
                      },
                      'createUserId': '1',
                      'createTime': '2020-03-16 19:34:00',
                      'updateUserId': '1',
                      'updateTime': '2020-03-18 00:56:11',
                      'ownOrganCode': '1',
                      'ownUserId': '1',
                      'isDelete': 1,
                      'remark': null
                    },
                    {
                      'id': 14,
                      'name': '订单模型',
                      'category': 'cac92ae2636742d98839db5fbeb091ab',
                      'code': 'f2b39e1bbc654cb88b1b1b2da91acb4a',
                      'version': null,
                      'metaInfo': null,
                      'deploymentId': 107,
                      'datasourceId': 2,
                      'isGenerateTable': {
                        'value': 1,
                        'display': '是'
                      },
                      'bytearray': {
                        'id': 285,
                        'name': null,
                        'bytes': {
                          'classComment': '电销平台订单领域模型',
                          'className': 'ecommerce_order',
                          'indexList': [],
                          'packageName': 'com.geekstorm.entity',
                          'fieldList': [
                            {
                              'fieldName': 'order_num',
                              'fieldClass': 'String',
                              'length': 0,
                              'decimalLength': 0,
                              'default': '',
                              'fieldComment': '订单编号'
                            },
                            {
                              'fieldName': 'total_amount',
                              'fieldClass': 'Integer',
                              'length': 0,
                              'decimalLength': 0,
                              'default': '',
                              'fieldComment': '订单总商品数量'
                            },
                            {
                              'fieldName': 'total_price',
                              'fieldClass': 'Integer',
                              'length': 0,
                              'decimalLength': 0,
                              'default': '',
                              'fieldComment': '订单总金额'
                            }
                          ]
                        },
                        'createUserId': '1',
                        'createTime': '2020-03-18 03:39:37',
                        'updateUserId': '1',
                        'updateTime': '2020-03-18 03:39:37',
                        'ownOrganCode': null,
                        'ownUserId': null,
                        'isDelete': 1,
                        'remark': null
                      },
                      'createUserId': '1',
                      'createTime': '2020-03-18 02:40:02',
                      'updateUserId': '1',
                      'updateTime': '2020-03-18 05:26:01',
                      'ownOrganCode': '1',
                      'ownUserId': '1',
                      'isDelete': 1,
                      'remark': null
                    }
                  ]
                },
                {
                  'type': 'select',
                  'icon': 'icon-select',
                  'options': {
                    'defaultValue': '',
                    'multiple': false,
                    'disabled': false,
                    'clearable': false,
                    'placeholder': '',
                    'required': false,
                    'showLabel': false,
                    'width': '200px',
                    'options': [
                      {
                        'value': 'one'
                      },
                      {
                        'value': 'many'
                      }
                    ],
                    'remote': false,
                    'remoteType': 'option',
                    'filterable': false,
                    'remoteOption': 'option_1585022252699',
                    'remoteOptions': [],
                    'props': {
                      'value': 'value',
                      'label': 'label'
                    },
                    'customClass': 'form-select',
                    'isShowLabel': false,
                    'labelWidth': 100,
                    'isSupportLabelWidth': false,
                    'remoteFunc': 'func_1585022252699',
                    'hidden': false,
                    'dataBind': true,
                    'tableColumn': true
                  },
                  'remoteAPI': {
                    'url': '',
                    'requestMethod': 'get'
                  },
                  'name': '关联类型',
                  'novalid': {},
                  'key': '1585022252699',
                  'model': 'type',
                  'rules': []
                }
              ],
              'name': '依赖关系',
              'key': '1585022187427',
              'model': 'relationList',
              'rules': []
            }
          ]
        },
        {
          'label': '方法',
          'name': 'tab_1593859287821',
          'list': [
            {
              'type': 'table',
              'icon': 'icon-table',
              'options': {
                'defaultValue': [],
                'customClass': 'form-table',
                'disabled': false,
                'isShowLabel': false,
                'labelWidth': 100,
                'isSupportLabelWidth': false,
                'remoteFunc': 'func_1593859301071',
                'hidden': false,
                'dataBind': true,
                'remoteOption': 'option_1593859301071'
              },
              'tableColumns': [
                {
                  'type': 'select',
                  'icon': 'icon-select',
                  'options': {
                    'defaultValue': '',
                    'multiple': false,
                    'disabled': false,
                    'clearable': false,
                    'placeholder': '',
                    'required': false,
                    'showLabel': false,
                    'width': '200px',
                    'options': [
                      {
                        'value': '选项一'
                      },
                      {
                        'value': '选项二'
                      },
                      {
                        'value': '选项三'
                      }
                    ],
                    'remote': false,
                    'remoteType': 'option',
                    'filterable': false,
                    'remoteOption': 'option_1593859305372',
                    'remoteOptions': [],
                    'props': {
                      'value': 'value',
                      'label': 'label'
                    },
                    'customClass': 'form-select',
                    'isShowLabel': false,
                    'labelWidth': 100,
                    'isSupportLabelWidth': false,
                    'remoteFunc': 'func_1593859305372',
                    'hidden': false,
                    'dataBind': true,
                    'tableColumn': true
                  },
                  'remoteAPI': {
                    'url': '',
                    'requestMethod': 'get'
                  },
                  'name': '默认方法',
                  'novalid': {},
                  'key': '1593859305372',
                  'model': 'select_1593859305372',
                  'rules': []
                },
                {
                  'type': 'textarea',
                  'icon': 'icon-textarea',
                  'options': {
                    'width': '700px',
                    'defaultValue': '',
                    'required': false,
                    'disabled': false,
                    'pattern': '',
                    'placeholder': '该属',
                    'readonly': false,
                    'customClass': 'cloud-form-textarea',
                    'isShowLabel': false,
                    'labelWidth': 100,
                    'isSupportLabelWidth': false,
                    'remoteFunc': 'func_1593860077352',
                    'hidden': false,
                    'dataBind': true,
                    'remoteOption': 'option_1593860077352',
                    'tableColumn': true
                  },
                  'name': '方法规则',
                  'novalid': {},
                  'key': '1593860077352',
                  'model': 'textarea_1593860077352',
                  'rules': []
                }
              ],
              'name': '子表单',
              'key': '1593859301071',
              'model': 'table_1593859301071',
              'rules': []
            }
          ]
        }
      ],
      'options': {
        'type': '',
        'tabPosition': 'top',
        'customClass': 'form-tabs',
        'editable': false,
        'tabLabel': '标签页',
        'hidden': false,
        'remoteFunc': 'func_1582653937889',
        'remoteOption': 'option_1582653937889',
        'isSupportLabelWidth': false,
        'labelWidth': 100
      },
      'name': '标签页',
      'key': '1582653937889',
      'model': 'tabs_model',
      'rules': []
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
var data1 = [{
  'type': 'input',
  'icon': 'icon-input',
  'options': {
    'width': '100%',
    'customClass': 'cloud-form-input',
    'defaultValue': '你好',
    'required': false,
    'dataType': 'string',
    'pattern': '',
    'placeholder': '',
    'disabled': false,
    'readonly': false,
    'isShowLabel': false,
    'showPassword': false,
    'labelWidth': 100,
    'isSupportLabelWidth': false,
    'remoteFunc': 'func_1582690498183',
    'hidden': false,
    'dataBind': true,
    'remoteOption': 'option_1582690498183'
  },
  'name': '描述',
  'key': '1582690498183',
  'model': 'classComment',
  'rules': [
    {
      'type': 'string',
      'message': '描述格式不正确'
    }
  ],
  'id': '9d470c95'
}];

const newList = [];

function mergeComponentConfig(list) {
  list.forEach((item, index) => {
    if (item.type === 'input') {
      item.id = generateUUID().substring(0, 8);
      list[index] = _.merge({}, inputMeta, item);
    } else if (item.type === 'select') {
      item.id = generateUUID().substring(0, 8);
      list[index] = _.merge({}, selectMeta, item);
    } else {
      if (item.type === 'grid') {
        item.columns.forEach((column) => {
          mergeComponentConfig(column.list);
        });
      }
      if (item.type === 'table') {
        mergeComponentConfig(item.tableColumns);
      }
      if (item.type === 'tabs') {
        item.tabs.forEach((tab) => {
          mergeComponentConfig(tab.list);
        });
      }
    }
  });
}

console.log(mergeComponentConfig(data.list));


console.log(JSON.stringify(data, null, 2));
