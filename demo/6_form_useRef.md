---
title: 6、Form和useRef的使用
order: 6
---
 

##### form + useRef 简单使用场景
[code](https://github.com/robin2017/frontend-notes/blob/main/src/formUseRef/index.jsx)
+ 表单和提交按钮分离：表单在子组件，提交在父组件
+ 抽象下就是很简单的：父组件调用子组件方法


##### form + useRef 复杂使用场景
+ 单表单和多表格并列
+ 表单提交触发父组件方法，父组件内调用各个表格的run方法


 ```jsx
import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FormUseRef } from 'frontend-notes'
const App = () => {
  return (
      <div>
        <h3>简单场景demo</h3>
        <FormUseRef/>
      </div>
  );
}

ReactDOM.render((
  <App />
), mountNode);
```
 