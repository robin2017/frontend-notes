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
const rst2 = getObject([
  {attr:'peter.age',value:'23'},
  {attr:'peter.name',value:'jack'},
  {attr:'peter.sons.0',value:'jack'},
  {attr:'peter.sons.1',value:'july'}
])
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
    const rst2 = ObjectAttr.getObject([
      { attr: 'peter.age', value: '23' },
      { attr: 'peter.name', value: 'jack' },
      { attr: 'peter.sons.0.name', value: 'jack' },
      { attr: 'peter.sons.1', value: 'july' },
      { attr: 'peter.sons.6.age', value: '45' },
    ]);
    console.log('getObject:',rst2);
  },[])
  return  <div id="ice-container">查看控制台吧</div>
}

ReactDOM.render((
  <App />
), mountNode);
```
 

 



