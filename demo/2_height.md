---
title: 2、浏览器高度
order: 2
---

##### 获取视口高度
> 主要是calc(100% - 100px)时，需要保证父元素为整个视口高度(难保证)

`视口高度：window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight`


```jsx
import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
 
const App = () => {
  return (
      <div style={{height:`calc(${windowHeight}px - 400px)`,backgroundColor:'gray'}}/>
  );
}

ReactDOM.render((
  <App />
), mountNode);
```
