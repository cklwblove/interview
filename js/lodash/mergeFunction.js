/**
 *
 * @authors liwb (lwbhtml@163.com)
 * @date    2020/7/20 22:52
 * @description
 * @version 1.0.0
 */

var _ = require('lodash');

function data() {
  var checkAge = (rule, value, callback) => {
    if (!value) {
      return callback(new Error('年龄不能为空'));
    }
    setTimeout(() => {
      if (!Number.isInteger(value)) {
        callback(new Error('请输入数字值'));
      } else {
        if (value < 18) {
          callback(new Error('必须年满18岁'));
        } else {
          callback();
        }
      }
    }, 1000);
  };
  var validatePass = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('请输入密码'));
    } else {
      if (this.ruleForm.checkPass !== '') {
        this.$refs.ruleForm.validateField('checkPass');
      }
      callback();
    }
  };
  var validatePass2 = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('请再次输入密码'));
    } else if (value !== this.ruleForm.pass) {
      callback(new Error('两次输入密码不一致!'));
    } else {
      callback();
    }
  };
  return {
    ruleForm: {
      pass: '',
      checkPass: '',
      age: ''
    },
    rules: {
      pass: [
        {validator: validatePass, trigger: 'blur'}
      ],
      checkPass: [
        {validator: validatePass2, trigger: 'blur'}
      ],
      age: [
        {validator: checkAge, trigger: 'blur'}
      ]
    }
  }
}

function data1() {
  return {
    ruleForm: {
      pass: '',
      checkPass: '',
      age: ''
    },
    rules: {

    }
  }
}

console.log(JSON.stringify(_.merge({}, data1(), data()), null, 2));
console.log(JSON.stringify(_.deepClone({}, data1(), data()), null, 2));
