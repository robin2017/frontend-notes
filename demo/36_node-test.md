---
title: 36、node单元测试
order: 36
---
> node的调试/单元测试是基础能力，必须会！！！
## 0、参考资料
[Jest 零基础入门](https://juejin.cn/post/7066792153027969032#heading-7)
[前端测试之Jest深入浅出](https://juejin.cn/post/6844904196244766728)  

## 1、使用测试的库
[koa-compose:jest](https://github.com/koajs/compose)  
react也用jest作为测试框架container
## 2、常用测试框架Jest
> 注意jest.config.js文件配置，可以删掉  
![图片](https://robin2017.github.io/frontend-notes/images/jest.jpg)

## 3、jest&debugger
https://blog.csdn.net/anonym/article/details/78511186
+ 添加如下调试任务
```
        {
            "type": "node",
            "request": "launch",
            "protocol": "inspector",
            "name": "Jest Debug",
            "program": "${workspaceRoot}/node_modules/jest/bin/jest",
            "stopOnEntry": false,
            "args": ["--runInBand", "--env=jsdom", "${fileBasename}"],
            "runtimeArgs": [
                "--inspect-brk"
             ],
             "cwd": "${workspaceRoot}",
             "sourceMaps": true,
             "console": "integratedTerminal"
        }
```
+ 在xx.test.js中添加断点
+ 执行debugger，当前页必须为xx.test.js