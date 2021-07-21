import React, { useEffect, useImperativeHandle } from 'react';
import { Form, Input, Field, Card } from '@alifd/next';

const FormItem = Form.Item;
export default React.forwardRef(({ defaultValue }, ref) => {
  const field = Field.useField();
  const submit = () => {
    return new Promise((resolve, reject) => {
      field.validate((err, values) => {
        if (err) return reject('表单错误');
        return resolve(values);
      });
    });
  };
  useImperativeHandle(ref, () => ({ submit }));
  useEffect(() => {
    field.setValues(defaultValue);
  }, []);
  // 孩子传递初始值，不用field.init
  return (
    <div>
      <Form field={field} >
        <Card>
          <FormItem
            label="姓名"
          >
            <Input name="name" />
          </FormItem>
        </Card>
        <FormItem
          label="年龄"
        >
          <Input name="age" />
        </FormItem>
      </Form>
    </div>
  );
});
