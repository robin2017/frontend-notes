---
title: 28、antd的Form使用
order: 28
---
 
Antd-Form使用
 ```jsx
import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {Form,Input,Field,Button} from '@alifd/next'
import { AntdForm } from 'frontend-notes'
 
const App = () => {
 
  return (
      <AntdForm/>
  );
}

ReactDOM.render((
  <App />
), mountNode);
```