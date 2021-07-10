import React from 'react';
import { useRequest } from 'ahooks';
import qs from 'querystring';
import Form2 from './Form2';

const mockUrl = 'https://mock.yonyoucloud.com/mock/16531/api/table/api/getList';
const service = (params) => {
  return fetch(mockUrl + (params ? `?${qs.stringify(params)}` : '')).then((rst) => rst.json());
};
function Container2() {
  const { data, run } = useRequest(service);
  return <Form2 data={data} run={run} />;
}

export default Container2;
