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
+ 将a的cookie带到b的站点，必须保证是同一个基本域，比如：test.import.tmall.net:4444 ==> xiaoer.global.tmall.net 可以(test.import.tmall.com就不行)


### 4、NET::ERR_CERT_INVALID
https://stackoverflow.com/questions/58802767/no-proceed-anyway-option-on-neterr-cert-invalid-in-chrome-on-macos
> 点击屏幕，键盘上输入"thisisunsafe",就可以了，好骚的操作

