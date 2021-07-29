import React, { useEffect, useState,useImperativeHandle } from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
 
// 支持单向和双向数据绑定
export default React.forwardRef(({ value, onChange },ref) =>{
  console.log('myeditor:',value)
  const [editorState, setEditorState] = useState(BraftEditor.createEditorState(value))
  // 焦点移动都会触发change事件,input则不会
  const handleChange = (state) => {
    if(state.toHTML()===editorState.toHTML()) return
    setEditorState(state)
    onChange && onChange(state.toHTML())
  }
  useEffect(() => {
    // 更好方案：加条件判断（不加判断，可能没法输入中文！！！）
    if(value!==editorState.toHTML()){
      setEditorState(BraftEditor.createEditorState(value))
    }
  },[value])
  const getValue = ()=>{
    return editorState.toHTML()
  }
  useImperativeHandle(ref, () => ({ getValue }))
  return (
    <BraftEditor   value={editorState} onChange={handleChange}  />
  )
})

 
