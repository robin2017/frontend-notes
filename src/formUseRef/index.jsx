import React, { useRef } from 'react';
import Form from './form';
import { Button } from '@alifd/next';

function FormUseRef() {
  const ref = useRef();
  return (
    <div>
      <Form defaultValue={{ name: 'robin', age: '29' }} ref={ref} />
      <Button onClick={() => {
        ref.current.submit().then((rst) => {
          console.log('获取数据：', rst);
        }).catch((e) => {
          console.error('失败:', e);
        });
      }}
      >获取表单数据
      </Button>
    </div>
  );
}

export default FormUseRef;
