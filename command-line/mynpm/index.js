#!/usr/bin/env node

//模块引用
var path = require('path');
var co = require('co');
var prompt = require('co-prompt');
var program = require('commander');
var fs = require('fs-extra');
var shell = require('shelljs');
//格式化输出JSON对象
var jsonFormat = require('json-format');

//定义版本号,由本模块package.json的version决定，使用-V或者--version打印
program
  .version(require('./package.json').version)
  .usage('[command] [options]')
  .option('-d, --description', 'Description of the module.'); //参数定义

program
  .command('init')
  .description('general package.json')
  .option('-y,--yes', 'general package.json without prompt')
  .action(init); // init命令触发时，调用init()方法

program
  .command('install [optional...]')
  .description('install modules')
  .option('-S,--save', 'save modules as dependencies')
  .option('-D,--save-dev', 'save modules as dependencies')
  .option('-g,--global', 'save modules as global')
  .action(install);//install命令触发时，调用install()方法

program.parse(process.argv);

/**
 * 处理init命令
 * @param pOptions - init命令的参数
 */
function init(pOptions) {
  co(function* () {
    var mypackage = {};
    var isPromptMode = pOptions.yes ? false : true;
    //默认名称为当前文件夹名称的小写
    var _defaultName = path.basename(process.cwd()).toLowerCase();
    //默认入口文件为index.js
    var _defaultEntryPoint = 'index.js';
    // var jsArr = shell.ls('*.js');没有js文件时，有额外输出
    var jsArr = shell.ls();
    //当前工作目录下，如果存在js文件，将找到的第一个js文件作为默认值
    for (var i = 0; i < jsArr.length; i++) {
      if (path.extname(jsArr[i]) === '.js') {
        _defaultEntryPoint = jsArr[i];
        break;
      }
    }

    var _testCommand = 'echo \"Error: no test specified\" && exit 1';
    //拼接将生成的package.json文件的绝对路径
    var mypackagePath = path.resolve(process.cwd(), 'package.json');

    var _inputName = '',
      _inputVersion = '',
      _inputDesc = '',
      _inputEntryPoint = '',
      _inputTestCommand = '',
      _gitRepository = '',
      _keywords = '',
      _author = '',
      _license = '',
      _confirm = '';

    if (isPromptMode) {
      console.log('This utility will walk you through creating a package.json file.It only covers the most common items, and tries to guess sensible defaults.\n\n' + 'Press ^C at any time to quit.');
      _inputName = yield prompt('name: (' + _defaultName + ') ');
      _inputVersion = yield prompt('version: (1.0.0) ');
      _inputDesc = yield prompt.multiline('description: ');
      _inputEntryPoint = yield prompt('entry point: (' + _defaultEntryPoint + ') ');
      _inputTestCommand = yield prompt('test command: ');
      _gitRepository = yield prompt('git repository: ');
      _keywords = yield prompt('keywords: ');
      _author = yield prompt('author: ');
      _license = yield prompt('license: (ISC) ');
    }

    //处理将生成的package.json信息
    mypackage.name = _inputName || _defaultName;
    mypackage.version = _inputVersion || '1.0.0';
    mypackage.description = _inputDesc || '';
    mypackage.main = _inputEntryPoint || _defaultEntryPoint;
    mypackage.scripts = {};
    mypackage.scripts.test = _inputTestCommand || _testCommand;
    if (_gitRepository) {
      mypackage.repository = {};
      mypackage.repository.type = 'git';
      mypackage.repository.url = _gitRepository;
    }

    mypackage.keywords = _keywords.split(' ') || [];
    mypackage.author = _author || '';
    mypackage.license = _license || 'ISC';

    if (isPromptMode) {
      console.log('About to write to ' + mypackagePath + '\n');
      console.log(jsonFormat(mypackage) + '\n');
      _confirm = yield prompt.confirm('Is this ok?(y|n)');
      if (!_confirm) {
        console.log('Aborted');
        process.exit();
      }
    } else {
      console.log('Wrote to ' + mypackagePath + '\n');
      console.log(jsonFormat(mypackage) + '\n');
    }

    //将信息写入package.json文件
    fs.outputJsonSync(mypackagePath, mypackage);
    /*确保入口文件存在——优化npm init方法，懒得每次都创建入口文件（比如index.js）*/
    fs.ensureFileSync(mypackage.main);
    process.exit();
  });
}

/**
 * 处理install命令
 * @param  {Array} pOptional  - 安装的模块名称
 * @param  {Object} pOptions - install命令后面带的参数
 */
function install(pOptional, pOptions) {
  var _command = ['npm', 'install'];
  _command = _command.concat(pOptional);
  if (pOptions.global)
    _command.push('-g')
  else if (pOptions.save) {
    ensurePackageJsonExist();
    _command.push('--save')
  } else if (pOptions.saveDev) {
    ensurePackageJsonExist();
    _command.push('--save-dev')
  }
  // console.log(_command.join(' '))

  shell.exec(_command.join(' '), { async: true });
}

/**
 *  package.json不存在，显示帮助信息
 */
function ensurePackageJsonExist() {
  if (!fs.existsSync(path.join(process.cwd(), 'package.json'))) {
    console.log('在当前文件夹下找不到\"package.json\“文件，建议先init')
    program.help();
  }
}
