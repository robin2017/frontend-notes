import React,{useState} from 'react';
import Input from './input'
import Editor from './editor'
function InputRenderFocus() {
  const [value,setValue] = useState('')
  const [editValue,setEditValue] = useState('')
 
  return (
    <div>
      <Input value={value} onChange={setValue}/>
      <Editor value={editValue} onChange={setEditValue}/>
    </div>
  );
}

export default InputRenderFocus;
