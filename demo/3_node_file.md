---
title: 3、node的file操作
order: 3
---
###### 相关资料
> https://juejin.cn/post/6918676666629750791
> https://juejin.cn/post/6844904053802188808



```jsx
import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
 
const App = () => {
 
  return (
      <div>
        <h3>文件常见操作</h3>
        <ul>
            <li>文件复制</li>
            <li>文件删除</li>
            <li>文件判断是否存在</li>
        </ul>
      </div>
  );
}

ReactDOM.render((
  <App />
), mountNode);
```
