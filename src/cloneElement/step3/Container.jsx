import React from 'react';
import { useRequest } from 'ahooks';
import qs from 'querystring';
import { addAttrToValidSon } from './utils';

const mockUrl = 'https://mock.yonyoucloud.com/mock/16531/api/table/api/getList';
const service = (params) => {
  return fetch(mockUrl + (params ? `?${qs.stringify(params)}` : '')).then((rst) => rst.json());
};
function Container({ children }) {
  const { data, run } = useRequest(service);
  const newChildren = addAttrToValidSon(children, () => ({ data, run }), (child) => child?.type?.name === 'Form');
  return <div className="my-container">{newChildren}</div>;
}

export default Container;
