---
title: 34、upload组件对接oss-node
order: 34
---

 

```jsx
import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Upload,Button } from "@alifd/next";


 

const App = () => {

 
  return (
    <div>
        <Upload
            action="http://localhost:7001/api/open/upload"
                        withCredentials={false}
         >
            <Button>文件上传</Button>

        </Upload>
        <Button onClick={()=>{

          fetch('http://localhost:7001/api/test').then(rst=>{
            console.log('rst:',rst)
          }) 
        }}>cors测试</Button>
    </div>
  );
};

ReactDOM.render(<App />, mountNode);



```
