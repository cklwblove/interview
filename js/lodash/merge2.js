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
  "list": [
    {
      "type": "divider",
      "icon": "icon-divider",
      "options": {
        "customClass": "cloud-divider",
        "hidden": false,
        "contentPosition": "left",
        "direction": "horizontal",
        "name": "分割线",
        "remoteFunc": "func_1579260753143",
        "remoteOption": "option_1579260753143",
        "isSupportLabelWidth": false,
        "labelWidth": 100
      },
      "name": "单据概要",
      "key": "1579260753143",
      "model": "divider_1579260753143",
      "rules": [],
      "id": "823a647a",
      "auth": []
    },
    {
      "type": "grid",
      "icon": "icon-grid",
      "columns": [
        {
          "span": 12,
          "list": [
            {
              "type": "input",
              "icon": "icon-input",
              "options": {
                "width": "88%",
                "customClass": "cloud-form-input",
                "defaultValue": "",
                "required": false,
                "dataType": "string",
                "pattern": "",
                "placeholder": "",
                "disabled": false,
                "readonly": false,
                "isShowLabel": false,
                "showPassword": false,
                "labelWidth": 100,
                "isSupportLabelWidth": false,
                "remoteFunc": "func_1579260867235",
                "hidden": false,
                "dataBind": true,
                "remoteOption": "option_1579260867235"
              },
              "name": "制单人",
              "key": "1579260867235",
              "model": "input_1579260867235",
              "rules": [
                {
                  "type": "string",
                  "message": "制单人格式不正确"
                }
              ]
            }
          ]
        },
        {
          "span": 12,
          "list": [
            {
              "type": "select",
              "icon": "icon-select",
              "options": {
                "defaultValue": [],
                "multiple": true,
                "disabled": false,
                "clearable": false,
                "placeholder": "",
                "required": false,
                "showLabel": false,
                "width": "88%",
                "options": [
                  {
                    "value": "选项一"
                  },
                  {
                    "value": "选项二"
                  },
                  {
                    "value": "选项三"
                  }
                ],
                "remote": false,
                "remoteType": "option",
                "filterable": true,
                "remoteOption": "option_1579260896750",
                "remoteOptions": [],
                "props": {
                  "value": "value",
                  "label": "label"
                },
                "customClass": "form-select",
                "isShowLabel": false,
                "labelWidth": 100,
                "isSupportLabelWidth": false,
                "remoteFunc": "func_1579260896750",
                "hidden": false,
                "dataBind": true
              },
              "name": "制单人部门",
              "key": "1579260896750",
              "model": "select_1579260896750",
              "rules": []
            }
          ]
        },
        {
          "span": 12,
          "list": [
            {
              "type": "input",
              "icon": "icon-input",
              "options": {
                "width": "88%",
                "customClass": "cloud-form-input",
                "defaultValue": "",
                "required": false,
                "dataType": "string",
                "pattern": "",
                "placeholder": "",
                "disabled": false,
                "readonly": false,
                "isShowLabel": false,
                "showPassword": false,
                "labelWidth": 100,
                "isSupportLabelWidth": false,
                "remoteFunc": "func_1579260915805",
                "hidden": false,
                "dataBind": true,
                "remoteOption": "option_1579260915805"
              },
              "name": "制单人公司",
              "key": "1579260915805",
              "model": "input_1579260915805",
              "rules": [
                {
                  "type": "string",
                  "message": "制单人公司格式不正确"
                }
              ]
            }
          ]
        }
      ],
      "options": {
        "gutter": "",
        "justify": "start",
        "align": "top",
        "hidden": false,
        "customClass": "form-grid",
        "remoteFunc": "func_1579260855099",
        "remoteOption": "option_1579260855099",
        "isSupportLabelWidth": true,
        "labelWidth": 100
      },
      "name": "栅格布局",
      "key": "1579260855099",
      "model": "grid_1579260855099",
      "rules": [],
      "id": "2a0c3bd3"
    },
    {
      "type": "grid",
      "icon": "icon-grid",
      "columns": [
        {
          "span": 12,
          "list": [
            {
              "type": "select",
              "icon": "icon-select",
              "options": {
                "defaultValue": "",
                "multiple": false,
                "disabled": false,
                "clearable": false,
                "placeholder": "",
                "required": false,
                "showLabel": false,
                "width": "88%",
                "options": [
                  {
                    "value": "选项一"
                  },
                  {
                    "value": "选项二"
                  },
                  {
                    "value": "选项三"
                  }
                ],
                "remote": false,
                "remoteType": "option",
                "filterable": false,
                "remoteOption": "option_1579261652625",
                "remoteOptions": [],
                "props": {
                  "value": "value",
                  "label": "label"
                },
                "customClass": "form-select",
                "isShowLabel": false,
                "labelWidth": 100,
                "isSupportLabelWidth": false,
                "remoteFunc": "func_1579261652625",
                "hidden": false,
                "dataBind": true
              },
              "name": "费用类型",
              "key": "1579261652625",
              "model": "select_1579261652625",
              "rules": []
            }
          ]
        },
        {
          "span": 12,
          "list": [
            {
              "type": "select",
              "icon": "icon-select",
              "options": {
                "defaultValue": "",
                "multiple": false,
                "disabled": false,
                "clearable": false,
                "placeholder": "",
                "required": false,
                "showLabel": false,
                "width": "88%",
                "options": [
                  {
                    "value": "选项一"
                  },
                  {
                    "value": "选项二"
                  },
                  {
                    "value": "选项三"
                  }
                ],
                "remote": false,
                "remoteType": "option",
                "filterable": false,
                "remoteOption": "option_1579261655107",
                "remoteOptions": [],
                "props": {
                  "value": "value",
                  "label": "label"
                },
                "customClass": "form-select",
                "isShowLabel": false,
                "labelWidth": 100,
                "isSupportLabelWidth": false,
                "remoteFunc": "func_1579261655107",
                "hidden": false,
                "dataBind": true
              },
              "name": "费用归属部门",
              "key": "1579261655107",
              "model": "select_1579261655107",
              "rules": []
            }
          ]
        },
        {
          "span": 12,
          "list": [
            {
              "type": "select",
              "icon": "icon-select",
              "options": {
                "defaultValue": "",
                "multiple": false,
                "disabled": false,
                "clearable": false,
                "placeholder": "",
                "required": false,
                "showLabel": false,
                "width": "88%",
                "options": [
                  {
                    "value": "选项一"
                  },
                  {
                    "value": "选项二"
                  },
                  {
                    "value": "选项三"
                  }
                ],
                "remote": false,
                "remoteType": "option",
                "filterable": false,
                "remoteOption": "option_1579261657921",
                "remoteOptions": [],
                "props": {
                  "value": "value",
                  "label": "label"
                },
                "customClass": "form-select",
                "isShowLabel": false,
                "labelWidth": 100,
                "isSupportLabelWidth": false,
                "remoteFunc": "func_1579261657921",
                "hidden": false,
                "dataBind": true
              },
              "name": "费用归属公司",
              "key": "1579261657921",
              "model": "select_1579261657921",
              "rules": []
            }
          ]
        }
      ],
      "options": {
        "gutter": 0,
        "justify": "start",
        "align": "top",
        "hidden": false,
        "customClass": "form-grid",
        "remoteFunc": "func_1579261267678",
        "remoteOption": "option_1579261267678",
        "isSupportLabelWidth": false,
        "labelWidth": 100
      },
      "name": "栅格布局",
      "key": "1579261267678",
      "model": "grid_1579261267678",
      "rules": [],
      "id": "7b5c56c5"
    },
    {
      "type": "grid",
      "icon": "icon-grid",
      "columns": [
        {
          "span": 12,
          "list": [
            {
              "type": "select",
              "icon": "icon-select",
              "options": {
                "defaultValue": "",
                "multiple": false,
                "disabled": false,
                "clearable": false,
                "placeholder": "",
                "required": false,
                "showLabel": false,
                "width": "88%",
                "options": [
                  {
                    "value": "选项一"
                  },
                  {
                    "value": "选项二"
                  },
                  {
                    "value": "选项三"
                  }
                ],
                "remote": false,
                "remoteType": "option",
                "filterable": false,
                "remoteOption": "option_1579261397218",
                "remoteOptions": [],
                "props": {
                  "value": "value",
                  "label": "label"
                },
                "customClass": "form-select",
                "isShowLabel": false,
                "labelWidth": 100,
                "isSupportLabelWidth": false,
                "remoteFunc": "func_1579261397218",
                "hidden": false,
                "dataBind": true
              },
              "name": "对应成本中心",
              "key": "1579261397218",
              "model": "select_1579261397218",
              "rules": []
            }
          ]
        },
        {
          "span": 12,
          "list": [
            {
              "type": "input",
              "icon": "icon-input",
              "options": {
                "width": "88%",
                "customClass": "cloud-form-input",
                "defaultValue": "",
                "required": false,
                "dataType": "string",
                "pattern": "",
                "placeholder": "",
                "disabled": false,
                "readonly": false,
                "isShowLabel": false,
                "showPassword": false,
                "labelWidth": 100,
                "isSupportLabelWidth": false,
                "remoteFunc": "func_1579261411377",
                "hidden": false,
                "dataBind": true,
                "remoteOption": "option_1579261411377"
              },
              "name": "制单日期",
              "key": "1579261411377",
              "model": "input_1579261411377",
              "rules": [
                {
                  "type": "string",
                  "message": "制单日期格式不正确"
                }
              ]
            }
          ]
        },
        {
          "span": 12,
          "list": [
            {
              "type": "select",
              "icon": "icon-select",
              "options": {
                "defaultValue": "",
                "multiple": false,
                "disabled": false,
                "clearable": false,
                "placeholder": "",
                "required": false,
                "showLabel": false,
                "width": "88%",
                "options": [
                  {
                    "value": "选项一"
                  },
                  {
                    "value": "选项二"
                  },
                  {
                    "value": "选项三"
                  }
                ],
                "remote": false,
                "remoteType": "option",
                "filterable": false,
                "remoteOption": "option_1579261429525",
                "remoteOptions": [],
                "props": {
                  "value": "value",
                  "label": "label"
                },
                "customClass": "form-select",
                "isShowLabel": false,
                "labelWidth": 100,
                "isSupportLabelWidth": false,
                "remoteFunc": "func_1579261429525",
                "hidden": false,
                "dataBind": true
              },
              "name": "币种",
              "key": "1579261429525",
              "model": "select_1579261429525",
              "rules": []
            }
          ]
        }
      ],
      "options": {
        "gutter": 0,
        "justify": "start",
        "align": "top",
        "hidden": false,
        "customClass": "form-grid",
        "remoteFunc": "func_1579261344175",
        "remoteOption": "option_1579261344175",
        "isSupportLabelWidth": false,
        "labelWidth": 100
      },
      "name": "栅格布局",
      "key": "1579261344175",
      "model": "grid_1579261344175",
      "rules": [],
      "id": "ccbdd8db"
    },
    {
      "type": "grid",
      "icon": "icon-grid",
      "columns": [
        {
          "span": 12,
          "list": [
            {
              "type": "select",
              "icon": "icon-select",
              "options": {
                "defaultValue": "",
                "multiple": false,
                "disabled": false,
                "clearable": false,
                "placeholder": "",
                "required": false,
                "showLabel": false,
                "width": "88%",
                "options": [
                  {
                    "value": "选项一"
                  },
                  {
                    "value": "选项二"
                  },
                  {
                    "value": "选项三"
                  }
                ],
                "remote": false,
                "remoteType": "option",
                "filterable": false,
                "remoteOption": "option_1579261462711",
                "remoteOptions": [],
                "props": {
                  "value": "value",
                  "label": "label"
                },
                "customClass": "form-select",
                "isShowLabel": false,
                "labelWidth": 100,
                "isSupportLabelWidth": false,
                "remoteFunc": "func_1579261462711",
                "hidden": false,
                "dataBind": true
              },
              "name": "关联申请单",
              "key": "1579261462711",
              "model": "select_1579261462711",
              "rules": []
            }
          ]
        },
        {
          "span": 12,
          "list": [
            {
              "type": "select",
              "icon": "icon-select",
              "options": {
                "defaultValue": "",
                "multiple": false,
                "disabled": false,
                "clearable": false,
                "placeholder": "",
                "required": false,
                "showLabel": false,
                "width": "88%",
                "options": [
                  {
                    "value": "选项一"
                  },
                  {
                    "value": "选项二"
                  },
                  {
                    "value": "选项三"
                  }
                ],
                "remote": false,
                "remoteType": "option",
                "filterable": false,
                "remoteOption": "option_1579261471812",
                "remoteOptions": [],
                "props": {
                  "value": "value",
                  "label": "label"
                },
                "customClass": "form-select",
                "isShowLabel": false,
                "labelWidth": 100,
                "isSupportLabelWidth": false,
                "remoteFunc": "func_1579261471812",
                "hidden": false,
                "dataBind": true
              },
              "name": "项目",
              "key": "1579261471812",
              "model": "select_1579261471812",
              "rules": []
            }
          ]
        },
        {
          "span": 12,
          "list": [
            {
              "type": "select",
              "icon": "icon-select",
              "options": {
                "defaultValue": "",
                "multiple": false,
                "disabled": false,
                "clearable": false,
                "placeholder": "",
                "required": false,
                "showLabel": false,
                "width": "88%",
                "options": [
                  {
                    "value": "选项一"
                  },
                  {
                    "value": "选项二"
                  },
                  {
                    "value": "选项三"
                  }
                ],
                "remote": false,
                "remoteType": "option",
                "filterable": false,
                "remoteOption": "option_1579261484657",
                "remoteOptions": [],
                "props": {
                  "value": "value",
                  "label": "label"
                },
                "customClass": "form-select",
                "isShowLabel": false,
                "labelWidth": 100,
                "isSupportLabelWidth": false,
                "remoteFunc": "func_1579261484657",
                "hidden": false,
                "dataBind": true
              },
              "name": "替他人报销",
              "key": "1579261484657",
              "model": "select_1579261484657",
              "rules": []
            }
          ]
        }
      ],
      "options": {
        "gutter": 0,
        "justify": "start",
        "align": "top",
        "hidden": false,
        "customClass": "form-grid",
        "remoteFunc": "func_1579261456083",
        "remoteOption": "option_1579261456083",
        "isSupportLabelWidth": false,
        "labelWidth": 100
      },
      "name": "栅格布局",
      "key": "1579261456083",
      "model": "grid_1579261456083",
      "rules": [],
      "id": "66690833"
    },
    {
      "type": "grid",
      "icon": "icon-grid",
      "columns": [
        {
          "span": 12,
          "list": [
            {
              "type": "select",
              "icon": "icon-select",
              "options": {
                "defaultValue": "",
                "multiple": false,
                "disabled": false,
                "clearable": false,
                "placeholder": "",
                "required": false,
                "showLabel": false,
                "width": "88%",
                "options": [
                  {
                    "value": "选项一"
                  },
                  {
                    "value": "选项二"
                  },
                  {
                    "value": "选项三"
                  }
                ],
                "remote": false,
                "remoteType": "option",
                "filterable": false,
                "remoteOption": "option_1579261569131",
                "remoteOptions": [],
                "props": {
                  "value": "value",
                  "label": "label"
                },
                "customClass": "form-select",
                "isShowLabel": false,
                "labelWidth": 100,
                "isSupportLabelWidth": false,
                "remoteFunc": "func_1579261569131",
                "hidden": false,
                "dataBind": true
              },
              "name": "业务性质",
              "key": "1579261569131",
              "model": "select_1579261569131",
              "rules": []
            }
          ]
        },
        {
          "span": 12,
          "list": [
            {
              "type": "number",
              "icon": "icon-number",
              "options": {
                "width": "88%",
                "required": false,
                "defaultValue": 0,
                "min": 0,
                "max": 0,
                "step": 1,
                "disabled": false,
                "controlsPosition": "",
                "customClass": "form-input-number",
                "isShowLabel": false,
                "labelWidth": 100,
                "isSupportLabelWidth": false,
                "remoteFunc": "func_1579261582292",
                "hidden": false,
                "dataBind": true,
                "remoteOption": "option_1579261582292"
              },
              "name": "粘帖页数",
              "key": "1579261601000_55831",
              "model": "number_1579261582292",
              "rules": []
            }
          ]
        },
        {
          "span": 12,
          "list": [
            {
              "type": "number",
              "icon": "icon-number",
              "options": {
                "width": "88%",
                "required": false,
                "defaultValue": 0,
                "min": 0,
                "max": 0,
                "step": 1,
                "disabled": false,
                "controlsPosition": "",
                "customClass": "form-input-number",
                "isShowLabel": false,
                "labelWidth": 100,
                "isSupportLabelWidth": false,
                "remoteFunc": "func_1579261662324",
                "hidden": false,
                "dataBind": true,
                "remoteOption": "option_1579261662324"
              },
              "name": "单据张数",
              "key": "1579261662324",
              "model": "number_1579261662324",
              "rules": []
            }
          ]
        }
      ],
      "options": {
        "gutter": 0,
        "justify": "start",
        "align": "top",
        "hidden": false,
        "customClass": "form-grid",
        "remoteFunc": "func_1579261516270",
        "remoteOption": "option_1579261516270",
        "isSupportLabelWidth": false,
        "labelWidth": 100
      },
      "name": "栅格布局",
      "key": "1579261516270",
      "model": "grid_1579261516270",
      "rules": [],
      "id": "f370affc"
    },
    {
      "type": "grid",
      "icon": "icon-grid",
      "columns": [
        {
          "span": 12,
          "list": [
            {
              "type": "input",
              "icon": "icon-input",
              "options": {
                "width": "88%",
                "customClass": "cloud-form-input",
                "defaultValue": "",
                "required": false,
                "dataType": "string",
                "pattern": "",
                "placeholder": "",
                "disabled": false,
                "readonly": false,
                "isShowLabel": false,
                "showPassword": false,
                "labelWidth": 100,
                "isSupportLabelWidth": false,
                "remoteFunc": "func_1579261679375",
                "hidden": false,
                "dataBind": true,
                "remoteOption": "option_1579261679375"
              },
              "name": "员工供应商",
              "key": "1579261679375",
              "model": "input_1579261679375",
              "rules": [
                {
                  "type": "string",
                  "message": "员工供应商格式不正确"
                }
              ]
            }
          ]
        },
        {
          "span": 12,
          "list": []
        },
        {
          "span": 12,
          "list": []
        }
      ],
      "options": {
        "gutter": 0,
        "justify": "start",
        "align": "top",
        "hidden": false,
        "customClass": "form-grid",
        "remoteFunc": "func_1579261673978",
        "remoteOption": "option_1579261673978",
        "isSupportLabelWidth": false,
        "labelWidth": 100
      },
      "name": "栅格布局",
      "key": "1579261673978",
      "model": "grid_1579261673978",
      "rules": [],
      "id": "50c4432b"
    },
    {
      "type": "grid",
      "icon": "icon-grid",
      "columns": [
        {
          "span": 24,
          "list": [
            {
              "type": "input",
              "icon": "icon-input",
              "options": {
                "width": "97%",
                "customClass": "cloud-form-input",
                "defaultValue": "",
                "required": false,
                "dataType": "string",
                "pattern": "",
                "placeholder": "",
                "disabled": false,
                "readonly": false,
                "isShowLabel": false,
                "showPassword": false,
                "labelWidth": 100,
                "isSupportLabelWidth": false,
                "remoteFunc": "func_1579261708896",
                "hidden": false,
                "dataBind": true,
                "remoteOption": "option_1579261708896"
              },
              "name": "报销事项说明",
              "key": "1579261708896",
              "model": "input_1579261708896",
              "rules": [
                {
                  "type": "string",
                  "message": "报销事项说明格式不正确"
                }
              ]
            }
          ]
        },
        {
          "span": 12,
          "list": []
        }
      ],
      "options": {
        "gutter": 0,
        "justify": "start",
        "align": "top",
        "hidden": false,
        "customClass": "form-grid",
        "remoteFunc": "func_1579261695896",
        "remoteOption": "option_1579261695896",
        "isSupportLabelWidth": false,
        "labelWidth": 100
      },
      "name": "栅格布局",
      "key": "1579261695896",
      "model": "grid_1579261695896",
      "rules": [],
      "id": "31c79552"
    },
    {
      "type": "divider",
      "icon": "icon-divider",
      "options": {
        "customClass": "cloud-divider",
        "hidden": false,
        "contentPosition": "left",
        "direction": "horizontal",
        "name": "分割线",
        "remoteFunc": "func_1579262003959",
        "remoteOption": "option_1579262003959",
        "isSupportLabelWidth": false,
        "labelWidth": 100
      },
      "name": "预算信息",
      "key": "1579262003959",
      "model": "divider_1579262003959",
      "rules": [],
      "id": "6166aabc"
    },
    {
      "type": "grid",
      "icon": "icon-grid",
      "columns": [
        {
          "span": 12,
          "list": [
            {
              "type": "input",
              "icon": "icon-input",
              "options": {
                "width": "88%",
                "customClass": "cloud-form-input",
                "defaultValue": "",
                "required": false,
                "dataType": "string",
                "pattern": "",
                "placeholder": "",
                "disabled": false,
                "readonly": false,
                "isShowLabel": false,
                "showPassword": false,
                "labelWidth": 100,
                "isSupportLabelWidth": false,
                "remoteFunc": "func_1579262034104",
                "hidden": false,
                "dataBind": true,
                "remoteOption": "option_1579262034104"
              },
              "name": "月度预算余额",
              "key": "1579262034104",
              "model": "input_1579262034104",
              "rules": [
                {
                  "type": "string",
                  "message": "月度预算余额格式不正确"
                }
              ]
            }
          ]
        },
        {
          "span": 12,
          "list": [
            {
              "type": "input",
              "icon": "icon-input",
              "options": {
                "width": "88%",
                "customClass": "cloud-form-input",
                "defaultValue": "",
                "required": false,
                "dataType": "string",
                "pattern": "",
                "placeholder": "",
                "disabled": false,
                "readonly": false,
                "isShowLabel": false,
                "showPassword": false,
                "labelWidth": 100,
                "isSupportLabelWidth": false,
                "remoteFunc": "func_1579262037164",
                "hidden": false,
                "dataBind": true,
                "remoteOption": "option_1579262037164"
              },
              "name": "年度预算余额",
              "key": "1579262037164",
              "model": "input_1579262037164",
              "rules": [
                {
                  "type": "string",
                  "message": "年度预算余额格式不正确"
                }
              ]
            }
          ]
        },
        {
          "span": 12,
          "list": []
        }
      ],
      "options": {
        "gutter": 0,
        "justify": "start",
        "align": "top",
        "hidden": false,
        "customClass": "form-grid",
        "remoteFunc": "func_1579262016209",
        "remoteOption": "option_1579262016209"
      },
      "name": "栅格布局",
      "key": "1579262016209",
      "model": "grid_1579262016209",
      "rules": [],
      "id": "b4ed88b0"
    },
    {
      "type": "divider",
      "icon": "icon-divider",
      "options": {
        "customClass": "cloud-divider",
        "hidden": false,
        "contentPosition": "left",
        "direction": "horizontal",
        "name": "分割线",
        "remoteFunc": "func_1579262090186",
        "remoteOption": "option_1579262090186",
        "isSupportLabelWidth": false,
        "labelWidth": 100
      },
      "name": "费用详情",
      "key": "1579262090186",
      "model": "divider_1579262090186",
      "rules": [],
      "id": "14912b10"
    },
    {
      "type": "tabs",
      "icon": "icon-tabs",
      "tabs": [
        {
          "label": "张三",
          "name": "tab_1",
          "list": [
            {
              "type": "table",
              "icon": "icon-table",
              "options": {
                "defaultValue": [],
                "customClass": "form-table",
                "disabled": false,
                "isShowLabel": false,
                "labelWidth": 100,
                "isSupportLabelWidth": false,
                "remoteFunc": "func_1579262131742",
                "hidden": false,
                "dataBind": true,
                "remoteOption": "option_1579262131742"
              },
              "tableColumns": [
                {
                  "type": "input",
                  "icon": "icon-input",
                  "options": {
                    "width": "300px",
                    "customClass": "cloud-form-input",
                    "defaultValue": "",
                    "required": false,
                    "dataType": "string",
                    "pattern": "",
                    "placeholder": "",
                    "disabled": false,
                    "readonly": false,
                    "isShowLabel": false,
                    "showPassword": false,
                    "labelWidth": 100,
                    "isSupportLabelWidth": false,
                    "remoteFunc": "func_1579262136893",
                    "hidden": false,
                    "dataBind": true,
                    "remoteOption": "option_1579262136893",
                    "tableColumn": true
                  },
                  "name": "备用2",
                  "novalid": {},
                  "key": "1579262136893",
                  "model": "input_1579262136893",
                  "rules": [
                    {
                      "type": "string",
                      "message": "备用2格式不正确"
                    }
                  ]
                },
                {
                  "type": "input",
                  "icon": "icon-input",
                  "options": {
                    "width": "300px",
                    "customClass": "cloud-form-input",
                    "defaultValue": "",
                    "required": false,
                    "dataType": "string",
                    "pattern": "",
                    "placeholder": "",
                    "disabled": false,
                    "readonly": false,
                    "isShowLabel": false,
                    "showPassword": false,
                    "labelWidth": 100,
                    "isSupportLabelWidth": false,
                    "remoteFunc": "func_1579262143408",
                    "hidden": false,
                    "dataBind": true,
                    "remoteOption": "option_1579262143408",
                    "tableColumn": true
                  },
                  "name": "金额",
                  "novalid": {},
                  "key": "1579262143408",
                  "model": "input_1579262143408",
                  "rules": [
                    {
                      "type": "string",
                      "message": "金额格式不正确"
                    }
                  ]
                }
              ],
              "name": "子表单",
              "key": "1579262131742",
              "model": "testTable1",
              "rules": []
            }
          ]
        }
      ],
      "options": {
        "type": "",
        "tabPosition": "top",
        "customClass": "form-tabs",
        "tabEditable": true,
        "tabLabel": "张三",
        "hidden": false,
        "remoteFunc": "func_1579262111074",
        "remoteOption": "option_1579262111074",
        "isSupportLabelWidth": false,
        "labelWidth": 100
      },
      "name": "标签页",
      "key": "1579262111074",
      "model": "tabs_1579262111074",
      "rules": [],
      "id": "d0230b4c"
    },
    {
      "type": "divider",
      "icon": "icon-divider",
      "options": {
        "customClass": "cloud-divider",
        "hidden": false,
        "contentPosition": "left",
        "direction": "horizontal",
        "name": "分割线",
        "remoteFunc": "func_1579262276761",
        "remoteOption": "option_1579262276761",
        "isSupportLabelWidth": false,
        "labelWidth": 100
      },
      "name": "支付信息",
      "key": "1579262276761",
      "model": "divider_1579262276761",
      "rules": [],
      "id": "5d5a4076"
    },
    {
      "type": "grid",
      "icon": "icon-grid",
      "columns": [
        {
          "span": 12,
          "list": [
            {
              "type": "input",
              "icon": "icon-input",
              "options": {
                "width": "88%",
                "customClass": "cloud-form-input",
                "defaultValue": "",
                "required": false,
                "dataType": "number",
                "pattern": "",
                "placeholder": "",
                "disabled": false,
                "readonly": true,
                "isShowLabel": false,
                "showPassword": false,
                "labelWidth": 100,
                "isSupportLabelWidth": false,
                "remoteFunc": "func_1579262306572",
                "hidden": false,
                "dataBind": true,
                "remoteOption": "option_1579262306572"
              },
              "name": "收款金额",
              "key": "1579262306572",
              "model": "input_1579262306572",
              "rules": [
                {
                  "type": "string",
                  "message": "收款金额格式不正确"
                }
              ]
            }
          ]
        },
        {
          "span": 12,
          "list": [
            {
              "type": "select",
              "icon": "icon-select",
              "options": {
                "defaultValue": "",
                "multiple": false,
                "disabled": false,
                "clearable": false,
                "placeholder": "",
                "required": false,
                "showLabel": false,
                "width": "88%",
                "options": [
                  {
                    "value": "选项一"
                  },
                  {
                    "value": "选项二"
                  },
                  {
                    "value": "选项三"
                  }
                ],
                "remote": false,
                "remoteType": "option",
                "filterable": false,
                "remoteOption": "option_1579262357362",
                "remoteOptions": [],
                "props": {
                  "value": "value",
                  "label": "label"
                },
                "customClass": "form-select",
                "isShowLabel": false,
                "labelWidth": 100,
                "isSupportLabelWidth": false,
                "remoteFunc": "func_1579262357362",
                "hidden": false,
                "dataBind": true
              },
              "name": "收款方式",
              "key": "1579262357362",
              "model": "select_1579262357362",
              "rules": []
            }
          ]
        },
        {
          "span": 12,
          "list": [
            {
              "type": "select",
              "icon": "icon-select",
              "options": {
                "defaultValue": "",
                "multiple": false,
                "disabled": false,
                "clearable": false,
                "placeholder": "",
                "required": false,
                "showLabel": false,
                "width": "88%",
                "options": [
                  {
                    "value": "选项一"
                  },
                  {
                    "value": "选项二"
                  },
                  {
                    "value": "选项三"
                  }
                ],
                "remote": false,
                "remoteType": "option",
                "filterable": false,
                "remoteOption": "option_1579262370420",
                "remoteOptions": [],
                "props": {
                  "value": "value",
                  "label": "label"
                },
                "customClass": "form-select",
                "isShowLabel": false,
                "labelWidth": 100,
                "isSupportLabelWidth": false,
                "remoteFunc": "func_1579262370420",
                "hidden": false,
                "dataBind": true
              },
              "name": "账户类型",
              "key": "1579262370420",
              "model": "select_1579262370420",
              "rules": []
            }
          ]
        }
      ],
      "options": {
        "gutter": 0,
        "justify": "start",
        "align": "top",
        "hidden": false,
        "customClass": "form-grid",
        "remoteFunc": "func_1579262289447",
        "remoteOption": "option_1579262289447"
      },
      "name": "栅格布局",
      "key": "1579262289447",
      "model": "grid_1579262289447",
      "rules": [],
      "id": "a2cad46a"
    },
    {
      "type": "grid",
      "icon": "icon-grid",
      "columns": [
        {
          "span": 12,
          "list": [
            {
              "type": "input",
              "icon": "icon-input",
              "options": {
                "width": "88%",
                "customClass": "cloud-form-input",
                "defaultValue": "",
                "required": false,
                "dataType": "string",
                "pattern": "",
                "placeholder": "",
                "disabled": false,
                "readonly": false,
                "isShowLabel": false,
                "showPassword": false,
                "labelWidth": 100,
                "isSupportLabelWidth": false,
                "remoteFunc": "func_1579262388440",
                "hidden": false,
                "dataBind": true,
                "remoteOption": "option_1579262388440"
              },
              "name": "账户名称",
              "key": "1579262388440",
              "model": "input_1579262388440",
              "rules": [
                {
                  "type": "string",
                  "message": "账户名称格式不正确"
                }
              ]
            }
          ]
        },
        {
          "span": 12,
          "list": [
            {
              "type": "input",
              "icon": "icon-input",
              "options": {
                "width": "88%",
                "customClass": "cloud-form-input",
                "defaultValue": "",
                "required": false,
                "dataType": "string",
                "pattern": "",
                "placeholder": "",
                "disabled": false,
                "readonly": false,
                "isShowLabel": false,
                "showPassword": false,
                "labelWidth": 100,
                "isSupportLabelWidth": false,
                "remoteFunc": "func_1579262400045",
                "hidden": false,
                "dataBind": true,
                "remoteOption": "option_1579262400045"
              },
              "name": "账号",
              "key": "1579262400045",
              "model": "input_1579262400045",
              "rules": [
                {
                  "type": "string",
                  "message": "账号格式不正确"
                }
              ]
            }
          ]
        },
        {
          "span": 12,
          "list": [
            {
              "type": "input",
              "icon": "icon-input",
              "options": {
                "width": "88%",
                "customClass": "cloud-form-input",
                "defaultValue": "",
                "required": false,
                "dataType": "string",
                "pattern": "",
                "placeholder": "",
                "disabled": false,
                "readonly": false,
                "isShowLabel": false,
                "showPassword": false,
                "labelWidth": 100,
                "isSupportLabelWidth": false,
                "remoteFunc": "func_1579262411762",
                "hidden": false,
                "dataBind": true,
                "remoteOption": "option_1579262411762"
              },
              "name": "开户行",
              "key": "1579262411762",
              "model": "input_1579262411762",
              "rules": [
                {
                  "type": "string",
                  "message": "开户行格式不正确"
                }
              ]
            }
          ]
        }
      ],
      "options": {
        "gutter": 0,
        "justify": "start",
        "align": "top",
        "hidden": false,
        "customClass": "form-grid",
        "remoteFunc": "func_1579262297096",
        "remoteOption": "option_1579262297096"
      },
      "name": "栅格布局",
      "key": "1579262297096",
      "model": "grid_1579262297096",
      "rules": [],
      "id": "5697500d"
    },
    {
      "type": "divider",
      "icon": "icon-divider",
      "options": {
        "customClass": "cloud-divider",
        "hidden": false,
        "contentPosition": "left",
        "direction": "horizontal",
        "name": "分割线",
        "remoteFunc": "func_1579262475785",
        "remoteOption": "option_1579262475785",
        "isSupportLabelWidth": false,
        "labelWidth": 100
      },
      "name": "分摊详情",
      "key": "1579262475785",
      "model": "divider_1579262475785",
      "rules": [],
      "id": "17a553f6"
    },
    {
      "type": "table",
      "icon": "icon-table",
      "options": {
        "defaultValue": [],
        "customClass": "form-table",
        "disabled": false,
        "isShowLabel": false,
        "labelWidth": 100,
        "isSupportLabelWidth": false,
        "remoteFunc": "func_1579262501078",
        "hidden": false,
        "dataBind": true,
        "remoteOption": "option_1579262501078"
      },
      "tableColumns": [
        {
          "type": "select",
          "icon": "icon-select",
          "options": {
            "defaultValue": "",
            "multiple": false,
            "disabled": false,
            "clearable": false,
            "placeholder": "",
            "required": false,
            "showLabel": false,
            "width": "150px",
            "options": [
              {
                "value": "选项一"
              },
              {
                "value": "选项二"
              },
              {
                "value": "选项三"
              }
            ],
            "remote": false,
            "remoteType": "option",
            "filterable": false,
            "remoteOption": "option_1579262529927",
            "remoteOptions": [],
            "props": {
              "value": "value",
              "label": "label"
            },
            "customClass": "form-select",
            "isShowLabel": false,
            "labelWidth": 100,
            "isSupportLabelWidth": false,
            "remoteFunc": "func_1579262529927",
            "hidden": false,
            "dataBind": true,
            "tableColumn": true
          },
          "name": "费用类型",
          "novalid": {},
          "key": "1579262529927",
          "model": "select_1579262529927",
          "rules": []
        },
        {
          "type": "select",
          "icon": "icon-select",
          "options": {
            "defaultValue": "",
            "multiple": false,
            "disabled": false,
            "clearable": false,
            "placeholder": "",
            "required": false,
            "showLabel": false,
            "width": "150px",
            "options": [
              {
                "value": "选项一"
              },
              {
                "value": "选项二"
              },
              {
                "value": "选项三"
              }
            ],
            "remote": false,
            "remoteType": "option",
            "filterable": false,
            "remoteOption": "option_1579262538217",
            "remoteOptions": [],
            "props": {
              "value": "value",
              "label": "label"
            },
            "customClass": "form-select",
            "isShowLabel": false,
            "labelWidth": 100,
            "isSupportLabelWidth": false,
            "remoteFunc": "func_1579262538217",
            "hidden": false,
            "dataBind": true,
            "tableColumn": true
          },
          "name": "费用承担部门",
          "novalid": {},
          "key": "1579262538217",
          "model": "select_1579262538217",
          "rules": []
        },
        {
          "type": "input",
          "icon": "icon-input",
          "options": {
            "width": "150px",
            "customClass": "cloud-form-input",
            "defaultValue": "",
            "required": false,
            "dataType": "string",
            "pattern": "",
            "placeholder": "",
            "disabled": false,
            "readonly": false,
            "isShowLabel": false,
            "showPassword": false,
            "labelWidth": 100,
            "isSupportLabelWidth": false,
            "remoteFunc": "func_1579262563165",
            "hidden": false,
            "dataBind": true,
            "remoteOption": "option_1579262563165",
            "tableColumn": true
          },
          "name": "分摊金额",
          "novalid": {},
          "key": "1579262563165",
          "model": "input_1579262563165",
          "rules": [
            {
              "type": "string",
              "message": "分摊金额格式不正确"
            }
          ]
        },
        {
          "type": "input",
          "icon": "icon-input",
          "options": {
            "width": "150px",
            "customClass": "cloud-form-input",
            "defaultValue": "",
            "required": false,
            "dataType": "string",
            "pattern": "",
            "placeholder": "",
            "disabled": false,
            "readonly": false,
            "isShowLabel": false,
            "showPassword": false,
            "labelWidth": 100,
            "isSupportLabelWidth": false,
            "remoteFunc": "func_1579262578104",
            "hidden": false,
            "dataBind": true,
            "remoteOption": "option_1579262578104",
            "tableColumn": true
          },
          "name": "成本中心",
          "novalid": {},
          "key": "1579262578104",
          "model": "input_1579262578104",
          "rules": [
            {
              "type": "string",
              "message": "成本中心格式不正确"
            }
          ]
        },
        {
          "type": "input",
          "icon": "icon-input",
          "options": {
            "width": "150px",
            "customClass": "cloud-form-input",
            "defaultValue": "",
            "required": false,
            "dataType": "string",
            "pattern": "",
            "placeholder": "",
            "disabled": false,
            "readonly": false,
            "isShowLabel": false,
            "showPassword": false,
            "labelWidth": 100,
            "isSupportLabelWidth": false,
            "remoteFunc": "func_1579262600054",
            "hidden": false,
            "dataBind": true,
            "remoteOption": "option_1579262600054",
            "tableColumn": true
          },
          "name": "月度预算信息",
          "novalid": {},
          "key": "1579262600054",
          "model": "input_1579262600054",
          "rules": [
            {
              "type": "string",
              "message": "月度预算信息格式不正确"
            }
          ]
        },
        {
          "type": "input",
          "icon": "icon-input",
          "options": {
            "width": "150px",
            "customClass": "cloud-form-input",
            "defaultValue": "",
            "required": false,
            "dataType": "string",
            "pattern": "",
            "placeholder": "",
            "disabled": false,
            "readonly": false,
            "isShowLabel": false,
            "showPassword": false,
            "labelWidth": 100,
            "isSupportLabelWidth": false,
            "remoteFunc": "func_1579262615134",
            "hidden": false,
            "dataBind": true,
            "remoteOption": "option_1579262615134",
            "tableColumn": true
          },
          "name": "年度预算信息",
          "novalid": {},
          "key": "1579262615134",
          "model": "input_1579262615134",
          "rules": [
            {
              "type": "string",
              "message": "年度预算信息格式不正确"
            }
          ]
        }
      ],
      "name": "子表单",
      "key": "1579262501078",
      "model": "table_1579262501078",
      "rules": [],
      "id": "61544301"
    },
    {
      "type": "divider",
      "icon": "icon-divider",
      "options": {
        "customClass": "cloud-divider",
        "hidden": false,
        "contentPosition": "left",
        "direction": "horizontal",
        "name": "分割线",
        "remoteFunc": "func_1579262728427",
        "remoteOption": "option_1579262728427",
        "isSupportLabelWidth": false,
        "labelWidth": 100
      },
      "name": "附加信息",
      "key": "1579262728427",
      "model": "divider_1579262728427",
      "rules": [],
      "id": "f6700a42"
    },
    {
      "type": "tabs",
      "icon": "icon-tabs",
      "tabs": [
        {
          "label": "附件",
          "name": "tab_1",
          "list": [
            {
              "type": "fileUpload",
              "icon": "icon-file-upload",
              "options": {
                "defaultValue": [],
                "tip": "",
                "buttonText": "点击上传文件",
                "customClass": "form-file",
                "disabled": false,
                "multiple": false,
                "limit": 9,
                "fileList": [],
                "drag": false,
                "action": "https://jsonplaceholder.typicode.com/photos/",
                "isShowLabel": false,
                "labelWidth": 100,
                "isSupportLabelWidth": false,
                "remoteFunc": "func_1579262820549",
                "hidden": false,
                "dataBind": true,
                "remoteOption": "option_1579262820549"
              },
              "name": "文件上传",
              "key": "1579262820549",
              "model": "fileUpload_1579262820549",
              "rules": []
            }
          ]
        },
        {
          "label": "税金及发票",
          "name": "tab_1579262762823",
          "list": [
            {
              "type": "table",
              "icon": "icon-table",
              "options": {
                "defaultValue": [],
                "customClass": "form-table",
                "disabled": false,
                "isShowLabel": false,
                "labelWidth": 100,
                "isSupportLabelWidth": false,
                "remoteFunc": "func_1579262861803",
                "hidden": false,
                "dataBind": true,
                "remoteOption": "option_1579262861803"
              },
              "tableColumns": [
                {
                  "type": "select",
                  "icon": "icon-select",
                  "options": {
                    "defaultValue": "",
                    "multiple": false,
                    "disabled": false,
                    "clearable": false,
                    "placeholder": "",
                    "required": false,
                    "showLabel": false,
                    "width": "150px",
                    "options": [
                      {
                        "value": "选项一"
                      },
                      {
                        "value": "选项二"
                      },
                      {
                        "value": "选项三"
                      }
                    ],
                    "remote": false,
                    "remoteType": "option",
                    "filterable": false,
                    "remoteOption": "option_1579262871753",
                    "remoteOptions": [],
                    "props": {
                      "value": "value",
                      "label": "label"
                    },
                    "customClass": "form-select",
                    "isShowLabel": false,
                    "labelWidth": 100,
                    "isSupportLabelWidth": false,
                    "remoteFunc": "func_1579262871753",
                    "hidden": false,
                    "dataBind": true,
                    "tableColumn": true
                  },
                  "name": "发票类型",
                  "novalid": {},
                  "key": "1579262871753",
                  "model": "select_1579262871753",
                  "rules": []
                },
                {
                  "type": "input",
                  "icon": "icon-input",
                  "options": {
                    "width": "150px",
                    "customClass": "cloud-form-input",
                    "defaultValue": "",
                    "required": false,
                    "dataType": "string",
                    "pattern": "",
                    "placeholder": "",
                    "disabled": false,
                    "readonly": false,
                    "isShowLabel": false,
                    "showPassword": false,
                    "labelWidth": 100,
                    "isSupportLabelWidth": false,
                    "remoteFunc": "func_1579262895125",
                    "hidden": false,
                    "dataBind": true,
                    "remoteOption": "option_1579262895125",
                    "tableColumn": true
                  },
                  "name": "发票号码",
                  "novalid": {},
                  "key": "1579262895125",
                  "model": "input_1579262895125",
                  "rules": [
                    {
                      "type": "string",
                      "message": "发票号码格式不正确"
                    }
                  ]
                },
                {
                  "type": "input",
                  "icon": "icon-input",
                  "options": {
                    "width": "100px",
                    "customClass": "cloud-form-input",
                    "defaultValue": "",
                    "required": false,
                    "dataType": "string",
                    "pattern": "",
                    "placeholder": "",
                    "disabled": false,
                    "readonly": false,
                    "isShowLabel": false,
                    "showPassword": false,
                    "labelWidth": 100,
                    "isSupportLabelWidth": false,
                    "remoteFunc": "func_1579262904968",
                    "hidden": false,
                    "dataBind": true,
                    "remoteOption": "option_1579262904968",
                    "tableColumn": true
                  },
                  "name": "发票代码",
                  "novalid": {},
                  "key": "1579262904968",
                  "model": "input_1579262904968",
                  "rules": [
                    {
                      "type": "string",
                      "message": "发票代码格式不正确"
                    }
                  ]
                },
                {
                  "type": "input",
                  "icon": "icon-input",
                  "options": {
                    "width": "150px",
                    "customClass": "cloud-form-input",
                    "defaultValue": "",
                    "required": false,
                    "dataType": "string",
                    "pattern": "",
                    "placeholder": "",
                    "disabled": false,
                    "readonly": false,
                    "isShowLabel": false,
                    "showPassword": false,
                    "labelWidth": 100,
                    "isSupportLabelWidth": false,
                    "remoteFunc": "func_1579262929263",
                    "hidden": false,
                    "dataBind": true,
                    "remoteOption": "option_1579262929263",
                    "tableColumn": true
                  },
                  "name": "销贷方名称",
                  "novalid": {},
                  "key": "1579262929263",
                  "model": "input_1579262929263",
                  "rules": [
                    {
                      "type": "string",
                      "message": "销贷方名称格式不正确"
                    }
                  ]
                },
                {
                  "type": "date",
                  "icon": "icon-date",
                  "options": {
                    "defaultValue": "",
                    "readonly": false,
                    "disabled": false,
                    "editable": true,
                    "clearable": true,
                    "placeholder": "",
                    "startPlaceholder": "",
                    "endPlaceholder": "",
                    "type": "date",
                    "format": "yyyy-MM-dd",
                    "timestamp": false,
                    "required": false,
                    "width": "150px",
                    "customClass": "form-date",
                    "isShowLabel": false,
                    "labelWidth": 100,
                    "isSupportLabelWidth": false,
                    "remoteFunc": "func_1579262964124",
                    "hidden": false,
                    "dataBind": true,
                    "remoteOption": "option_1579262964124",
                    "tableColumn": true
                  },
                  "name": "开票日期",
                  "novalid": {},
                  "key": "1579262964124",
                  "model": "date_1579262964124",
                  "rules": []
                },
                {
                  "type": "input",
                  "icon": "icon-input",
                  "options": {
                    "width": "100px",
                    "customClass": "cloud-form-input",
                    "defaultValue": "",
                    "required": false,
                    "dataType": "number",
                    "pattern": "",
                    "placeholder": "",
                    "disabled": false,
                    "readonly": false,
                    "isShowLabel": false,
                    "showPassword": false,
                    "labelWidth": 100,
                    "isSupportLabelWidth": false,
                    "remoteFunc": "func_1579262988145",
                    "hidden": false,
                    "dataBind": true,
                    "remoteOption": "option_1579262988145",
                    "tableColumn": true
                  },
                  "name": "含税金额",
                  "novalid": {},
                  "key": "1579262988145",
                  "model": "input_1579262988145",
                  "rules": [
                    {
                      "type": "number",
                      "message": "含税金额格式不正确"
                    }
                  ]
                },
                {
                  "type": "select",
                  "icon": "icon-select",
                  "options": {
                    "defaultValue": "",
                    "multiple": false,
                    "disabled": false,
                    "clearable": false,
                    "placeholder": "",
                    "required": false,
                    "showLabel": false,
                    "width": "100px",
                    "options": [
                      {
                        "value": "选项一"
                      },
                      {
                        "value": "选项二"
                      },
                      {
                        "value": "选项三"
                      }
                    ],
                    "remote": false,
                    "remoteType": "option",
                    "filterable": false,
                    "remoteOption": "option_1579263027545",
                    "remoteOptions": [],
                    "props": {
                      "value": "value",
                      "label": "label"
                    },
                    "customClass": "form-select",
                    "isShowLabel": false,
                    "labelWidth": 100,
                    "isSupportLabelWidth": false,
                    "remoteFunc": "func_1579263027545",
                    "hidden": false,
                    "dataBind": true,
                    "tableColumn": true
                  },
                  "name": "税率",
                  "novalid": {},
                  "key": "1579263027545",
                  "model": "select_1579263027545",
                  "rules": []
                },
                {
                  "type": "input",
                  "icon": "icon-input",
                  "options": {
                    "width": "100px",
                    "customClass": "cloud-form-input",
                    "defaultValue": "",
                    "required": false,
                    "dataType": "string",
                    "pattern": "",
                    "placeholder": "",
                    "disabled": false,
                    "readonly": false,
                    "isShowLabel": false,
                    "showPassword": false,
                    "labelWidth": 100,
                    "isSupportLabelWidth": false,
                    "remoteFunc": "func_1579263085548",
                    "hidden": false,
                    "dataBind": true,
                    "remoteOption": "option_1579263085548",
                    "tableColumn": true
                  },
                  "name": "金额（不含税）",
                  "novalid": {},
                  "key": "1579263085548",
                  "model": "input_1579263085548",
                  "rules": [
                    {
                      "type": "string",
                      "message": "金额（不含税）格式不正确"
                    }
                  ]
                }
              ],
              "name": "子表单",
              "key": "1579262861803",
              "model": "table_1579262861803",
              "rules": []
            }
          ]
        }
      ],
      "options": {
        "type": "",
        "tabPosition": "top",
        "customClass": "form-tabs",
        "tabEditable": false,
        "tabLabel": "标签页",
        "hidden": false,
        "remoteFunc": "func_1579262747065",
        "remoteOption": "option_1579262747065",
        "isSupportLabelWidth": false,
        "labelWidth": 100
      },
      "name": "标签页",
      "key": "1579262747065",
      "model": "tabs_1579262747065",
      "rules": [],
      "id": "b324a6ef"
    }
  ],
  "config": {
    "labelWidth": 100,
    "labelPosition": "right",
    "size": "small",
    "customClass": "form-",
    "labelSuffix": "",
    "requestConfig": {
      "url": "",
      "method": "post",
      "headers": {},
      "queryParams": {},
      "bodyParams": {}
    },
    "requestCurrentRoleConfig": {
      "url": "http://geekstorm.picp.vip/builder/open/role/current/",
      "method": "post"
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
console.log()
