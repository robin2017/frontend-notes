---
title: 35、node调试（vscode）
order: 35
---
## 1、参考资料
[nodejs调试指南](https://github.com/nswbmw/node-in-debugging)  
[8分，vscode调试node，不要chrome devtools](https://github.com/nswbmw/node-in-debugging/blob/master/4.3%20Visual%20Studio%20Code.md)  

## 2、demo(成功)
在简单项目中行，在复杂项目中不行，好烦躁！！！
+ 在个人电脑上可以，工作电脑上不行
+ 原因：vscode 1.64.0 有问题，需要回退到1.63.0，真是fuck
+ 可用地址：https://code.visualstudio.com/updates/v1_63

![图片](https://robin2017.github.io/frontend-notes/images/debugger-success.jpg)
![图片](https://robin2017.github.io/frontend-notes/images/debugger-error.jpg)
![图片](https://robin2017.github.io/frontend-notes/images/63.png)

## 3、debugger配置
```
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "pwa-node",
            "request": "launch",
            "name": "node调试demo",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}/src/app.js",
            "debuggStdLib":true
        }
    ]
}
```

## 4、测试用例debugger(以linglong-top-filecenter为例)
![图 1](../images/d3bca25722e1885f11263956dd21048511e274fc73329323481f159cc65c9708.png)  
![图 2](../images/8366aa32d57abe553de86b2fa283a8b515896bb715355e57eab12b27487b4e2c.png)  
![图 5](../images/9217d19b571fc837d8978ce8baf8d2ee56d9c666e1fe3f93303cbc6a13af1571.png)  
