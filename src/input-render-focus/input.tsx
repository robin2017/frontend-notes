import React from 'react';
import {Input} from '@alifd/next'
import { useState } from 'react';
import { useEffect } from 'react';
function MyInput({value,onChange}) {
  console.log('myinput:',value)
  const [localValue,setLocalValue] = useState(value)
  const handleChange = (v)=>{
    setLocalValue(v)
    onChange(v)
  }
  useEffect(()=>{
    setLocalValue(value)
  },[value])
  return (
    <div>
      <Input value={localValue} onChange={handleChange}/>
    </div>
  );
}

export default MyInput;
