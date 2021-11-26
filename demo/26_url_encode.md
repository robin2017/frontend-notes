---
title: 26、URL编码
order: 26
---

参考资料
+ http://www.ruanyifeng.com/blog/2010/02/url_encoding.html
+ https://www.jianshu.com/p/d1d4466c4a66
+ https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent

#### 1、URL编码背景
+ URL只能使用英文字母、阿拉伯数字和某些标点符号，不能使用其他文字和符号
+ URL中有汉字，则不同情况编码方式不一样，很混乱
![test](https://robin2017.github.io/frontend-notes/images/url_code.jpg)

#### 2、URL编码作用
+ 保证客户端只用一种编码方式发出请求，避免程序员处理多种情况
+ 由js进行URL编码，不用浏览器插手

#### 3、URL编码函数
###### 3.1、escape
+ 早期方案，现在不用
+ 就是unicode编码
```
escape('hello world,中国')
'hello%20world%2C%u4E2D%u56FD'
```
###### 3.2、encodeURI
+ 输出格式utf-8
+ "; / ? : @ & = + $ , #" 不回编码
```
encodeURI('hello world,中国')
'hello%20world,%E4%B8%AD%E5%9B%BD'
```
###### 3.3、encodeURIComponent
+ 输出格式utf-8
+ "; / ? : @ & = + $ , #" 会编码
```
encodeURIComponent('hello world,中国')
'hello%20world%2C%E4%B8%AD%E5%9B%BD'
```
###### 3.4、encodeURI/encodeURIComponent区别
![test](https://robin2017.github.io/frontend-notes/images/url_code_diff.jpg)


 