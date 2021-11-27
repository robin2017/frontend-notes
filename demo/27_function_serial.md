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


const getFunc = (funcObj, funcReg) => {
  if (isFuncObj(funcObj)) {
    const regRet = funcReg.exec(funcObj.value);
    if (regRet) {
      const funBodyStr = regRet[1];
      let funTmp = new Function('a', funBodyStr);
      funTmp = funTmp.bind({ name: 'robin' });
      return (...params) => {
        try {
          return funTmp(...params);
        } catch (e) {
          console.error('函数运行错误:', e);
        }
      };
    } else {
      console.error('函数字符串不符合正则表达式:', funcObj.value, funcReg);
    }
  } else {
    console.error('不符合函数规范');
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