---
title: 32、大文件上传
order: 32
---

## 1、相关资料

- [写给新手前端的各种文件上传攻略，从小图片到大文件断点续传](https://juejin.cn/post/6844903968338870285)
- [源码：写给新手前端的各种文件上传攻略，从小图片到大文件断点续传](https://github.com/Bigerfe/fe-learn-code/)
- [字节跳动面试官：请你实现一个大文件上传和断点续传](https://juejin.cn/post/6844904046436843527)
- [源码：字节跳动面试官：请你实现一个大文件上传和断点续传](https://github.com/yeyan1996/file-upload)
- [字节跳动面试官，我也实现了大文件上传和断点续传](https://juejin.cn/post/6844904055819468808)
- [源码：字节跳动面试官，我也实现了大文件上传和断点续传](https://github.com/shengxinjing/upload)

## 2、fusion 的 upload 组件

> 需要配合 oss-node-demo[码云]使用

```jsx
import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Upload, Button } from "@alifd/next";

const App = () => {
  const [files, setFiles] = useState([]);
  const onSuccess = (rst) => {
    const data = rst?.response?.data;
    const obj = {
      name: data.filename,
      downloadURL: data.downloadUrl,
      imgURL: data.downloadUrl,
      fileURL: data.downloadUrl,
    };
    setFiles((list) => [...list, obj]);
  };
  console.log("files:", files);
  return (
    <div>
      <Upload
        listType="image"
        action="http://localhost:7001/api/open/upload"
        value={files}
        onSuccess={onSuccess}
        withCredentials={false}
      >
        <Button>文件上传</Button>
      </Upload>
    </div>
  );
};

ReactDOM.render(<App />, mountNode);
```
