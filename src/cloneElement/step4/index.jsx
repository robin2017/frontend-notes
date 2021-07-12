import React from 'react';
import Container from './Container';
import MyTable from './MyTable';
import MyForm from './MyForm';
/**
 * 触发死循环条件
 * 1、子组件渲染完成会触发容器组件的方法
 * 2、使用了CloneElement方法
 */
export default function Step() {
  return (
    <div>
      <Container>
        <MyForm />
        <MyTable />
      </Container>
    </div>
  );
}

