---
title: 9、Input重复渲染时失焦
order: 9
---

[code](https://github.com/robin2017/frontend-notes/blob/main/src/input-render-focus/editor.tsx)


 

 ```jsx
import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { InputRenderFocus } from 'frontend-notes'
const App = () => {
  return (
      <div>
        <h3>输入框渲染失焦</h3>
        <InputRenderFocus/>
      </div>
  );
}

ReactDOM.render((
  <App />
), mountNode);
```
 

 