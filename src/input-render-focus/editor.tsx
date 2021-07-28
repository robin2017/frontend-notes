import React, { useEffect, useState } from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
 

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

export default Editor
