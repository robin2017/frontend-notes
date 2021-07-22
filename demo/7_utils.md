---
title: 7、常见工具方法
order: 7
---
 
[code](https://github.com/robin2017/frontend-notes/blob/main/src/utils/index.ts) 


 ```jsx
import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { MyUtils } from 'frontend-notes'
const App = () => {
  useEffect(()=>{
    const obj = {name:'robin',age:'29',home:'anhui'}
    console.log('deepClone:',MyUtils.deepClone(obj))
    console.log('pick:',MyUtils.pick(obj,['name','home']))
  },[])
  return (
      <div>
        <h3>常见工具</h3>
      </div>
  );
}

ReactDOM.render((
  <App />
), mountNode);
```
 