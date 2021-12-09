---
title: 29、npm脚本常见知识
order: 29
---
#### 1、命令行工具：commander/terminal-kit
+ https://juejin.cn/post/6956027274919411726
+ https://juejin.cn/post/6844903857324064782
+ https://juejin.cn/post/6959750919491682318
+ https://github.com/tj/commander.js/blob/master/Readme_zh-CN.md
+ https://juejin.cn/post/6844903480700698638


#### 2、命令行工具开发指南
+ package.json中添加：bin字段
+ index.js第一行添加：#!/usr/bin/env node
+ 本地调试：npm link/unlink
+ 调试时改权限：chmod -R 777 ./

#### 3、commander使用
###### 3.1、选项类型：boolean型选项/带参数选项
+ boolean：'-d, --debug'
+ 带参数：'-p, --pizza-type \<type\>'

###### 3.2、短选项简写
-a -b -p 80也可以写为-ab -p80，甚至进一步简化为-abp80

###### 3.3、parse函数
将字符串数组变成对象

###### 3.4、必填项
program.requiredOption()

```
const program = require('commander');
// program.option([选项定义],[选项简介],[默认值])
program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small <type>', 'small pizza size')
  .requiredOption('-p, --pizza-type <type>', 'flavour of pizza');
const argv = process.argv
program.parse(argv);
const options = program.opts();
console.log('编译结果:',argv,options)
--------------------------------------
luobin@luobindeMacBook-Pro rb-cli % node src/index.js -dsa -pa
编译结果: [
  '/usr/local/bin/node',
  '/Users/luobin/workspace/github/rb-cli/src/index.js',
  '-dsa',
  '-pa'
] { debug: true, small: 'a', pizzaType: 'a' }
```
###### 3.5、命令command
```
program.command('create <name> [destination]')
  .action((name, options) => {
    console.log('准备创建(create)工程：',name,options)
  })

// parse必须执行
 program.parse(process.argv);
 ---------------------------------
luobin@luobindeMacBook-Pro rb-cli % node src/index.js create my-app
准备创建(create)工程： my-app []
```
###### 3.6、两种常见使用模式
> 模式一：program.command().action().parse(process.argv)
```
program.command('create <name> [destination]')
  .action((name, desc) => {
    console.log('准备创建(create)工程：',name,desc)
  }).parse(process.argv)
-------------------------------------------------
luobin@luobindeMacBook-Pro rb-cli % node src/index.js create my-app
准备创建(create)工程： create my-app
```
> 模式二：program.option().option().action().parse(process.argv)
```
program.option('-a, --about','param 1')
 .option('-b, --beyond <type>','param 2')
 .action((options)=>{
     console.log('options:',options)
 }).parse(process.argv)
 ------------------------------------------------
 luobin@luobindeMacBook-Pro rb-cli % node src/index.js -a -b 100
options: { about: true, beyond: '100' }
```
#### 4、Inquirer.js
> 文本输入
```
inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: '请输入你的姓名：',
    default:'robin'
  }
]).then((answers) => {
  console.log('您的姓名为:',answers)
})
```
> boolean输入
```
inquirer.prompt([
  {
    type: 'confirm',
    name: 'isMan',
    message: '你是男生吗：',
    default: true
  }
]).then((answers) => {
  console.log('您的性别为:',answers)
})
```
> 单选
```
inquirer.prompt([
	  {
	    type: 'list',
	    name: 'lang',
	    message: '您擅长的语言:',
		choices:['react','vue','angular'],
	  }
	]).then((answers) => {
	  console.log('您擅长语言为:',answers)
	})
```
#### 5、实用工具
```
var inquirer = require("inquirer");
const program = require("commander");
const child_process = require("child_process");
const term = require("terminal-kit").terminal;

const getCmd = (noverify, type, msg) => {
  return `git add . && git commit -m "${msg ? msg : "auto save"}" ${
    noverify ? " --no-verify" : ""
  } && git push ${"pub" === type ? " && def p -d" : ""}\r\n`;
};

program
  .command("cmd <type>")
  .option("-n, --noverify", "no verify")
  .option("-d, --useDefault", "use default")
  .action((type, options) => {
    console.log("type:", type, options);
    if (["push", "pub"].includes(type)) {
      if (options.useDefault) {
        const cmd = getCmd(options.noverify, type);
        term.blue("[执行命令]  ", cmd);
        child_process.execSync(cmd);
        return;
      }
      inquirer
        .prompt([
          {
            type: "input",
            name: "msg",
            message: "请输入git提交信息：",
            default: "auto save",
          },
        ])
        .then((answers) => {
          const cmd = getCmd(options.noverify, type, answers.msg);
          term.blue("[执行命令]  ", cmd);
          child_process.execSync(cmd);
        });
    } else {
      term.red("命令错误\r\n");
    }
  })
  .parse(process.argv);

```
 