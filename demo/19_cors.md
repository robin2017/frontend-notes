---
title: 19、CORS
order: 19
---


### 1、浏览器跳过跨域方法
> 没有成功，遇到其他报错
```
open -n /Applications/Google\ Chrome.app --args --disable-web-security --user-data-dir=/tmp/chrome_dev_test
```

### 2、samesite禁用
![图片](https://robin2017.github.io/frontend-notes/images/samesite.png)

### 3、credentials
a.com => b.com ：cors解决
a.com的cookie => b.com ：需要credentials
