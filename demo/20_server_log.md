---
title: 20、常见linux指令
order: 20
---

### 1、服务器日志查看，一条搞定
```
tail -1f xxx.log
```
```
tail -1f bianque-app.* | grep '/JoinActiveService/queryAlipayEmail'
```

### 2、mac查看端口号
```
lsof -i:12808
```
lsof: list open files

### 3、过滤历史日志
> 可以参看多个日志，然后通过grep过滤
[grep使用](https://juejin.cn/post/7053664079042314277)
```
cat bianque-app.* | grep '/JoinActiveService/queryAlipayEmail'
```
### 4、midway默认路径
路径：/home/admin/logs/import-admin-config
文件:midway-web.log 

### 5、本地日志
![图 1](../images/120498b444a9406457dd603f174b51f8fa54d9ff0a5798eb17166188b505656c.png)  
