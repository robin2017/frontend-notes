---
title: 31、数据格式
order: 31
---

参考资料：https://juejin.cn/post/6917143120048029704

## 1、数据格式定义
+ 会在HTTP请求/响应中Content-Type(互联网媒体类型)里面看到，表示请求和响应中的媒体类型信息
+ 告诉服务端如何处理请求的数据，以及告诉客户端（一般是浏览器）如何解析响应的数据

## 2、几种常见格式
#### 2.1、application/x-www-form-urlencoded
> 数据被编码为key/value格式发送到服务器（表单默认的提交数据的格式）。
+ 适用于键值对(仅对象)
#### 2.2、application/json(推荐)
> 现在越来越多的人把它作为请求头，用来告诉服务端消息主体是序列化后的 JSON 字符串  
+ 适用于复杂对象(仅对象)
+ application/json对比application/x-www-form-urlencoded来说，Json格式支持比键值对复杂得多的结构化数据，非常适合 RESTful 的接口。
#### 2.3、multipart/form-data
+ 适用于多媒体类型，例如图片和文件(对象或非对象)
+ 首先生成了一个 boundary 用于分割不同的字段，在请求实体里每个参数以------boundary开始，然后是附加信息和参数名，然后是空行，最后是参数内容。多个参数将会有多个boundary块。
 
```jsx
 
```
