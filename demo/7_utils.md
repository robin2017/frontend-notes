---
title: 7、常见工具方法
order: 7
---
 
[code](https://github.com/robin2017/frontend-notes/blob/main/src/utils/index.ts) 


 ```jsx
import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import {Message} from '@alifd/next'
import { MyUtils } from 'frontend-notes'
const App = () => {
  useEffect(()=>{
    const obj = {name:'robin',age:'29',home:'anhui'}
    console.log('deepClone:',MyUtils.deepClone(obj))
    console.log('pick:',MyUtils.pick(obj,['name','home']))
    const root = [
      {label:'1',value:'1',children:[
       {label:'11',value:'11'}
    ]},{label:'2',value:'2'}]
    const children = [{label:'111',value:'111'}]
    MyUtils.appendChildrenToRoot(root,children,(obj)=>obj.value==='11')
    console.log('appendChildrenToRoot:',root,children)
  },[])
  const email = '111@qq.com'
  return (
      <div>
        <h3>常见工具</h3>
         <CopyToClipboard text={email} onCopy={(text) => { Message.success(`复制邮箱${text}到剪切板`) }}>
          <span style={{ fontSize: '12px', color: '#999999', cursor: 'pointer',  }}>复制邮箱</span>
        </CopyToClipboard>
      </div>
  );
}

ReactDOM.render((
  <App />
), mountNode);
```
 