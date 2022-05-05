---
title: 44、挂载两次问题
order: 44
---

+ 原因：loading如果反复变化(false=>true=>false)，则导致返回的组件也反复变化，第一次和第三次一样，但和第二次不一样，则react在diff时候没法进行优化，所以会挂载两次（只有前后两次一样，diff才能优化）
+ 影响：一般在useEffect(()=>{//TODO},[])中调用ajax请求，如果挂载两次，会导致重复网络请求，后端会diss的
+ 方案：在定义hooks时，loading不要反复，一般开始为true，然后为false

```jsx
import React, { useEffect,useState } from 'react';
import {useRequest} from 'ahooks'
import ReactDOM from 'react-dom';
 
 
const Child = ()=>{
    useEffect(()=>{
        console.log('child 挂载')
    },[])
    return <div>child</div>
}
 

const App = () => {
    const [loadingMock,setLoadingMock] = useState(false)
    useEffect(()=>{
        setLoadingMock(true)
        setTimeout(()=>{
            setLoadingMock(false)
        })
    },[])
    const useRet = useRequest(()=>{
       return fetch('https://mock.yonyoucloud.com/mock/16531/api/table/api/getList').then(rst=>rst.json())
    })
    console.log('真假loading变化',loadingMock, useRet.loading)
    if(loadingMock) return <div>loading</div>
  return (
    <div>
         <Child />
    </div>
  );
}

ReactDOM.render((
  <App />
), mountNode);
```
