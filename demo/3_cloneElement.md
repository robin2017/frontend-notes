---
title: 3、cloneElement问题
order: 3
---

##### 存在问题
> 属性变化引起组件更新和属性变化引起组件复制是不同的效果：后者导致组件内所有useState都重置了

##### 参考资料
https://juejin.cn/post/6844903983975235592  

 


```jsx
import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {CloneElement} from 'frontend-notes'
 
const App = () => {
  return (
      <div>
        <CloneElement/>
      </div>
  );
}

ReactDOM.render((
  <App />
), mountNode);
```
