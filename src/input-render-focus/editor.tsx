import React, { useEffect, useState } from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
 

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
