---
title: 30、默认值更新问题
order: 30
---

https://blog.csdn.net/qq_33988065/article/details/111868699
https://blog.csdn.net/qq_31754591/article/details/119716805
## 结论


- Input 的 defaultValue 更新失败，需要添加 key
  + 原因：待输出（参考如上资料）
- Field.init 的 initValue 如果是一般类型，可以直接透传，如果为对象，透传有问题
  + 加key也没用！！
```jsx
import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Form, Input, Field, Button } from "@alifd/next";

const MyInput = ({ value, onChange }) => {
  console.log("my-input:", value);
  return <Input value={value} onChange={onChange} />;
};

const MyObjInput = ({ value, onChange }) => {
  console.log("MyObjInput:", value);
  return <Input value={value.a} onChange={onChange} />;
};

const App = () => {
  const field = Field.useField();
  const [defaultValue, setDefaultValue] = useState();
  useEffect(() => {
    setDefaultValue("robin");
  }, []);
  console.log("defaultValue:", defaultValue);
  return (
    <div>
      <Form style={{ width: "60%" }} field={field}>
        <Form.Item label="名称">
          <MyInput {...field.init("name", { initValue: defaultValue })} />
        </Form.Item>
        <Form.Item label="名称">
          <MyObjInput
            key={defaultValue}
            {...field.init("age", { initValue: { a: defaultValue } })}
          />
        </Form.Item>
      </Form>
      <h4>defaultValue更新失败</h4>
      <Input defaultValue={defaultValue} />
      <h4>defaultValue更新成功</h4>
      <Input defaultValue={defaultValue} key={defaultValue} />
    </div>
  );
};

ReactDOM.render(<App />, mountNode);
```
