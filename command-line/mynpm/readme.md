### 需求：
仿照npm命令，实现我们自己的命令行程序**mynpm**，包括mynpm -V ,mynpm init ，mynpm install这几个命令

### 简单需求分析：
mynpm -V

打印版本

mynpm init

1.仿照npm init提示用户输入各种信息

2.所有用户输入信息保存到mypackage.json的文件中

mynpm install

调用npm install命令，根据-save ，--save-dev, -g这几个参数的不同使用不同的处理方法

--salve：模块安装成功之后，把模块名称写入mypackage.json文件的dependencies字段中

--save-dev:模块安装成功之后，把模块名称写入mypackage.json文件的devDependencies字段中

-g:全局安装模块
