---
title: 12、IFrame to JsBundle
order: 12
---
#### iframe存在的问题
1、加载慢  
2、高度不可知  
3、跨域时拿不到DOM  
#### JsBundle存在问题
1、样式干扰(css前缀)  
2、变量污染(命名规范)  
#### 两者相比JsBundle更好
#### jsBundle需要深入考虑的问题
1、js版本管理  
2、js文件需要部署到cdn上  
3、打包时js代码收敛到js文件中(create-react-app不行,ice可以)  

```jsx
import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { loadAssets } from 'frontend-notes'
 
const App = ()=>{
  useEffect(()=>{
    const baseUrl = location.host ==='robin2017.github.io' ? '/frontend-notes' : ''
    // 从cdn上加载资源
    loadAssets.loadJsFile(baseUrl + '/files/ice-app-index.js')
    loadAssets.loadCssFile(baseUrl + '/files/ice-app-index.css')
  },[])
  return  <div id="ice-container">加载失败</div>
}

ReactDOM.render((
  <App />
), mountNode);
```
 

 



