---
title: 1、常见正则表达式
order: 1
---

##### 相关资料

> https://juejin.cn/post/6844903845227659271

##### 基础正则表达式

- 数字：\d <==> [0-9]
- 单词：\w <==> [0-9a-zA-z_]
- 空格：\s 一般 \s\S 一起使用
- 次数：?(0|1)  *(>=0) +(>=1)

##### 高频正则表达式
- 手机：xxx

```jsx
import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
const funStr = `function add(a,b){
  return a + b;
}`
// 匹配函数名，参数，函数体
const funReg = /function\s+(\w+)\((.*?)\){([\s\S]*)}/
const App = () => {
  useEffect(()=>{
    const rst =  funReg.exec(funStr)
    console.log('1：',rst)
  },[])
  return (
      <div>
        <h3>1、匹配函数字符串</h3>
        <pre>{funStr}</pre>
      </div>
  );
}

ReactDOM.render((
  <App />
), mountNode);
```
