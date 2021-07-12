import React from 'react';
import Container from './Container';
import Form from './Form';

/**
 * 触发死循环条件
 * 1、子组件渲染完成会触发容器组件的方法
 * 2、使用了CloneElement方法
 */
export default function Step() {
  return (
    <div>
      <Container>
        <Form />
      </Container>
    </div>
  );
}

