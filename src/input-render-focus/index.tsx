import React,{useState,useRef} from 'react';
import {Button} from '@alifd/next'
import Input from './input'
import Editor from './editor'
function InputRenderFocus() {
  const [value,setValue] = useState('')
  const [editorValue,setEditorValue] = useState('')
  const editorRef = useRef()
 
  return (
    <div>
      {/* 双向数据绑定 */}
      <Input value={value} onChange={setValue}/>
      {/* 双向数据绑定 */}
      <Editor value={editorValue} onChange={setEditorValue}/>
      {/* 单向数据绑定 */}
      <Editor ref={editorRef} deps={[]}/>
      <Button onClick={()=>{
        console.log('input value:',value,editorValue,editorRef.current.getValue())
      }}>获取数据</Button>
    </div>
  );
}

export default InputRenderFocus;
