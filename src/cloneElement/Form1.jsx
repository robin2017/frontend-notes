import React, { useEffect, useState } from 'react';
import { useRequest } from 'ahooks';
import { Table } from '@alifd/next';
import qs from 'querystring';

const { Column } = Table;
const mockUrl = 'https://mock.yonyoucloud.com/mock/16531/api/table/api/getList';
const service = (params) => {
  return fetch(mockUrl + (params ? `?${qs.stringify(params)}` : '')).then((rst) => rst.json());
};

function Form() {
  const { data, run } = useRequest(service);
  useEffect(() => {
    setTimeout(() => {
      run({ test: true });
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
