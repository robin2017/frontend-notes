---
title: 3、cloneElement问题
order: 3
---

##### 存在问题
> 属性变化引起组件更新和属性变化引起组件复制是不同的效果：后者导致组件内所有useState都重置了
> 意味这子组件不能是状态组件

##### 参考资料
https://juejin.cn/post/6844903983975235592  

 

出现问题场景
```jsx
import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {CloneElement} from 'frontend-notes'
 
const App = () => {
  return (
       <CloneElement/>
  );
}

ReactDOM.render((
  <App />
), mountNode);
```

```
 /**
 * 触发死循环条件
 * 1、子组件渲染完成会触发容器组件的方法
 */
function Step3() {
  return (
    <div>
      <Container3>
        <Form3 />
      </Container3>
    </div>
  );
}

```

* * *
```
const mockUrl = 'https://mock.yonyoucloud.com/mock/16531/api/table/api/getList';
const service = (params) => {
  return fetch(mockUrl + (params ? `?${qs.stringify(params)}` : '')).then((rst) => rst.json());
};
function Container3({ children }) {
  const { data, run } = useRequest(service);
  const newChildren = addAttrToValidSon(children, () => ({ data, run }), (child) => child?.type?.name === 'Form');
  return <div className="my-container">{newChildren}</div>;
}

```
* * *
```
function Form({ data, run }) {
  const [cnt] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      run && run({ test: true });
    }, 3000);
  }, []);
  return (
    <div>
      <Table dataSource={data?.data || []}>
        <Column title="姓名" dataIndex="name" />
        <Column title="年龄" dataIndex="age" />
        <Column title="生日" dataIndex="birth" />
      </Table>
    </div>
  );
}

```