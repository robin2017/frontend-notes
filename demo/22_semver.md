---
title: 22、语义化版本
order: 22
---

### 1、相关资料
https://semver.org/lang/zh-CN/
https://juejin.cn/post/6844903591690534926
https://jubianchi.github.io/semver-check/#/~0.0.5/0.0.11


 ### 2、相关知识
 + github起草的semver闺房
 + react严格遵循规范

 ### 3、依赖地狱(背景)
 + 依赖链路很深，面临版本被锁死的风险

 ### 4、正式版本格式
 版本格式：主版本号.次版本号.修订号，版本号递增规则如下：
+ 主版本号(major)：当你做了不兼容的 API 修改，
+ 次版本号(minor)：当你做了向下兼容的功能性新增，可以理解为Feature版本，
+ 修订号(patch)：当你做了向下兼容的问题修正，可以理解为Bug fix版本。
比如:1.0.0,1.2.3

 ### 5、先行版本格式
+ alpha: 内部版本
+ beta: 公测版本
+ rc: 即Release candiate，正式版本的候选版本
比如:1.0.0-alpha.0,1.0.0.-rc.0

### 6、发布准则
+ 1.0.0 的版本号用于界定公共 API。当你的软件发布到了正式环境，或者有稳定的API时，就可以发布1.0.0版本了。
+ npm不能发布0.x.x版本，tnpm可以发布

### 7、兼容方案
+ 兼容模块新发布的补丁版本：~16.2.0、16.2.x、16.2
+ 兼容模块新发布的小版本、补丁版本：^16.2.0、16.x、16
+ 兼容模块新发布的大版本、小版本、补丁版本：*、x

默认安装都是次版本兼容
`npm install -S semver-version-test`
```
  "dependencies": {
    "semver-version-test": "^1.0.1"
  }
```

### 8、常见工具
+ 升级补丁版本号：npm version patch
+ 升级小版本号：npm version minor
+ 升级大版本号：npm version major

vscode 插件：Dependency Analytics 383k使用
+ 内网tnpm包用不了，外网npm包可以用

### 8.5、实际案例
+ @alife/idd-pro-table =》 @alife/imc-operator =》@alife/imc-schema-form =》@alife/imc-staff-select@0.0.11
+ 目前imc-staff-select从0.0.5升级到0.0.11,但是更新idd-pro-table没用，因为0.0.5不是正式版本
+ 将imc-staff-select升级到1.0.0,并且imc-schema-form升级一下，imc-operator不用升级，idd-pro-table也要升级(才能发布umd包)


### 9、测试
+ step1: 使用了"semver-version-test": "^1.0.1"
+ step2: 删除了node_modules,没有删除package-lock.json
+ package.json/package-lock.json没有变化，但下载的npm报更新了

![test](https://robin2017.github.io/frontend-notes/images/semver.jpg)

 ```jsx
import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Test from 'semver-version-test'
const App = () => {
    useEffect(()=>{
   
        console.log('test:',)
    },[])
  return (
      <div>
        <h3>语义化版本:{Test.test()}</h3>
      </div>
  );
}

ReactDOM.render((
  <App />
), mountNode);
```