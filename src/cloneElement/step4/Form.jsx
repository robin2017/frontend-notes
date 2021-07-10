import React, { useEffect, useState } from 'react';

import { Table } from '@alifd/next';
import qs from 'querystring';

const { Column } = Table;


function Form({ data, run }) {
  useEffect(() => {
    setTimeout(() => {
      run && run({ test: true });
    }, 3000);
  }, []);

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

export default Form;
