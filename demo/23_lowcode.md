---
title: 23、低代码调研
order: 23
---

### 1、相关平台
+ 腾讯
  + 微搭WeDa：https://console.cloud.tencent.com/lowcode/app/owner
+ 阿里
  + 宜搭YiDa：https://www.aliwork.com/start.html?spm=a1z332.10384403.0.0.5f8e5d8740XLXv

### 2、相关文档
WeDa:https://cloud.tencent.com/document/product/1301/48874
YiDa：https://www.yuque.com/yida/support

### 3、简单实践:调查问卷
+ 宜搭
https://www.aliwork.com/alibaba/web/APP_MVP9XLQXACD44NG48246/admin/pageAppEdit.html#/form/receipt/FORM-NC966W81KDDVB9DFX21NB1DAHBJK26L1FN0WK1/page?navUuid=FORM-NC966W81KDDVB9DFX21NB1DAHBJK26L1FN0WK1&_k=0rx503

![test](https://robin2017.github.io/frontend-notes/images/yida2.jpg)
![test](https://robin2017.github.io/frontend-notes/images/yida1.jpg)
![test](https://robin2017.github.io/frontend-notes/images/yida3.jpg)



 ```jsx
import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Test from 'semver-version-test'
const App = () => {
    useEffect(()=>{
   
        console.log('test:',)
    },[])
  return (
      <div>
        <h3>语义化版本:{Test.test()}</h3>
      </div>
  );
}

ReactDOM.render((
  <App />
), mountNode);
```