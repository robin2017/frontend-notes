import React from 'react';
import Container3 from './Container3';
import Form3 from './Form3';

/**
 * 触发死循环条件
 * 1、子组件渲染完成会触发容器组件的方法
 * 2、子组件内有useState(不被调用都行)
 */
function Step3() {
  return (
    <div>
      <Container3>
        <Form3 />
      </Container3>
    </div>
  );
}
export default Step3;
