---
title: 13、对象属性解析
order: 13
---
#### 问题描述
```
const jack = {
  son:{
    name:'peter'
  }
}
const rst1 = getAttrValue(jack,'son.name')
const rst2 = getObject('person.0.name','july')
```

```jsx
import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ObjectAttr } from 'frontend-notes'
 
const App = ()=>{
  useEffect(()=>{
    const jack = {
      son:{
        name:'peter'
      }
    }

    const rst1 = ObjectAttr.getAttrValue(jack,'son.name')
    console.log('getAttrValue:',rst1)
  },[])
  return  <div id="ice-container">查看控制台吧</div>
}

ReactDOM.render((
  <App />
), mountNode);
```
 

 



