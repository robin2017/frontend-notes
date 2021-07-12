import React, { useEffect } from 'react';

import { Table } from '@alifd/next';


const { Column } = Table;


function MyTable({ data }) {
  return (
    <div>
      <Table dataSource={data?.data || []}>
        <Column title="姓名" dataIndex="name" />
        <Column title="年龄" dataIndex="age" />
        <Column title="生日" dataIndex="birth" />
      </Table>
    </div>
  );
}

export default MyTable;
