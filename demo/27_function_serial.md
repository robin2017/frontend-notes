---
title: 27、函数序列话
order: 27
---

#### 1、背景
+ 需要将函数通过JSON的格式进行传递

#### 2、序列化规范
```
{
    type:'JSFunction',
    value: string
}
```
#### 3、反序列化
```
const isFuncObj = (obj) => {
  return obj.type === 'JSFunction' && typeof obj.value === 'string';
};
// 这三个相互关联
const myReg = /function\(a\)\s*{([\s\S]*)}/;

const myObj = {
  type: 'JSFunction',
  value: 'function(a){console.log(this);return a }',
};

const parseFunc = (funcObj, funcReg) => {
  if (isFuncObj(funcObj)) {
    const regRet = funcReg.exec(funcObj.value);
    if (regRet) {
      const funBodyStr = regRet[1];
      let funTmp = new Function('a', funBodyStr);
      funTmp = funTmp.bind({ name: 'robin' });
      const rst = null;
      try {
        return funTmp('abc');
      } catch (e) {
        console.error('函数执行异常:', e);
      }
    }
  }
};


```


 ```jsx
import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {Form,Input,Field,Button} from '@alifd/next'
import { FunctionSerial } from 'frontend-notes'
 
const App = () => {
 
  return (
      <div>
        <FunctionSerial/>
      </div>
  );
}

ReactDOM.render((
  <App />
), mountNode);
```