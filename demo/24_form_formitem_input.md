---
title: 24、Form-FormItem-Input关系
order: 24
---

### Form/FormItem/Input怎样会影响验证逻辑
+ Form/FormItem之间可以随意添加标签
+ FormItem和Input之间添加标签，会影响报错信息提示

 ```jsx
import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {Form,Input,Field,Button} from '@alifd/next'
const FormItem = Form.Item;
const App = () => {
  const field = Field.useField()
  return (
      <div>
         <Form style={{ width: "60%" }}  field={field} >
         <div>
          <FormItem
            required
            label="电话号码"
          >
            <div>
            <Input {...field.init('phone',{rules:[{required:true},{pattern:/^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/,message:'手机号码不正确'}]})} />
            </div>
          </FormItem>
             </div>
          <FormItem>
            <Button onClick={()=>{
              field.validate((err,value)=>{
                console.log(err,value)
              })
            }}>提交</Button>
          </FormItem>
       
        </Form>
      </div>
  );
}

ReactDOM.render((
  <App />
), mountNode);
```