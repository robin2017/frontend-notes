---
title: 4、简单富文本
order: 4
---
##### 使用背景
> 后端传过来html片段，直接在页面渲染，不用前端处理
 
##### 其他
+ 代码编辑器：[monaco-editor](https://microsoft.github.io/monaco-editor/)
+ 富文本编辑器：[braft-editor](https://www.yuque.com/braft-editor/be/lzwpnr)

```jsx
import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
const content = `
现在是简单富文本展示，这里换行了<br/>
这里空格&nbsp;&nbsp;了，这里<span style="color:red">红色</span>吧,这里<mark>高亮标签</mark><br/>
我要<b>加粗</b>字体<br/>
再加一个<a href='https://www.baidu.com' target='_blank'>链接</a>吧
`
const App = () => {
  return (
      <div>
        <h3>后端html片段展示</h3>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
  );
}

ReactDOM.render((
  <App />
), mountNode);
```
 