---
title: 33、upload组件对接oss
order: 33
---

## 参考资料

- https://zhuanlan.zhihu.com/p/59483736
- https://juejin.cn/post/6938235482555809823

```jsx
import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Upload,Button } from "@alifd/next";


const ossConfig = {
  accessid:'',
  signature:'',
  policy:'',
  dir:'',
  host:''
}

const App = () => {


  const beforeUpload= (file, uploadOptions)=> {
      // file 原生的File对象,即将被上传的文件
      // uploadOptions 是 上传参数
      let promise = Promise.resolve(ossConfig); // 函数自行实现,保证返回一个promise来就可以
      promise = promise.then((data) => {
        console.log('dddddd:',data)
        uploadOptions.data = {
                  name: file.filename,
        key: `${data.dir}${file.name}`,
        policy: data.policy,
        OSSAccessKeyId: data.accessid,
        success_action_status: 200,
        signature: data.signature
        };
        uploadOptions.headers = {'X-Requested-With': null};// 需要跨域上传的话加这一段
        uploadOptions.action = data.host;
        return uploadOptions;
      });

      return promise;
    }
  return (
    <div>
        <Upload
            action="" // 先不填 有服务端返回
            beforeUpload={beforeUpload}

            withCredentials={false}
         >
            <Button>文件上传</Button>
        </Upload>
    </div>
  );
};

ReactDOM.render(<App />, mountNode);



```
