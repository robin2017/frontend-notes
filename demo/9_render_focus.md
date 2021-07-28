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

export default Editor
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
 

 