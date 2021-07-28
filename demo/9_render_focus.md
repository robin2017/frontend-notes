---
title: 9、Input重复渲染时失焦
order: 9
---

```
function Editor({ value, onChange,tik }) {
  const [editorState, setEditorState] = useState(BraftEditor.createEditorState(value))
  const handleChange = (state) => {
    setEditorState(state)
    onChange && onChange(state.toHTML())
  }
  useEffect(() => {
    setEditorState(BraftEditor.createEditorState(value))
    // 解决失焦问题，使用tik代替value
  }, [tik])
  return (
    <BraftEditor   value={editorState} onChange={handleChange}  />
  )
}
```



```
function Editor({ value, onChange,tik }) {
  console.log('myeditor:',value)
  const [editorState, setEditorState] = useState(BraftEditor.createEditorState(value))
  // 焦点移动都会触发change事件,input则不会
  const handleChange = (state) => {
    if(state.toHTML()===editorState.toHTML()) return
    setEditorState(state)
    onChange && onChange(state.toHTML())
  }
  useEffect(() => {
    // 更好方案：加条件判断
    if(value!==editorState.toHTML()){
      setEditorState(BraftEditor.createEditorState(value))
    }
  },[value])
  return (
    <BraftEditor   value={editorState} onChange={handleChange}  />
  )
}
```

 ```jsx
import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { InputRenderFocus } from 'frontend-notes'
const App = () => {
  return (
      <div>
        <h3>输入框渲染失焦</h3>
        <InputRenderFocus/>
      </div>
  );
}

ReactDOM.render((
  <App />
), mountNode);
```
 

 