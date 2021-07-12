import React, { useEffect } from 'react';
import { Form, Input } from '@alifd/next';

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    fixedSpan: 8,
  },
  wrapperCol: {
    span: 14,
  },
};
function MyForm({ run }) {
  useEffect(() => {
    setTimeout(() => {
      run && run({ test: true });
    }, 3000);
  }, []);
  return (
    <Form style={{ width: '60%' }} {...formItemLayout} colon>
      <FormItem
        label="Username"
        required
        requiredMessage="Please input your username!"
      >
        <Input name="baseUser" />
      </FormItem>

      <FormItem label=" " colon={false}>
        <Form.Submit
          type="primary"
          validate
          onClick={(val) => {
            console.log('提交表单数据:', val);
            run(val);
          }}
          style={{ marginRight: 8 }}
        >
          提交
        </Form.Submit>

      </FormItem>
    </Form>
  );
}

export default MyForm;
