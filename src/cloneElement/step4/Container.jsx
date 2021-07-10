import React, { useRef } from 'react';
import { useRequest } from 'ahooks';
import qs from 'querystring';
import { addAttrToValidSon } from './utils';

const mockUrl = 'https://mock.yonyoucloud.com/mock/16531/api/table/api/getList';
const service = (params) => {
  return fetch(mockUrl + (params ? `?${qs.stringify(params)}` : '')).then((rst) => rst.json());
};

const CState = ({ dataRef, runRef }) => {
  const { data, run } = useRequest(service);
  dataRef.current = data;
  runRef.current = run;
  return <div />;
};

function Container({ children }) {
  const dataRef = useRef();
  const runRef = useRef();

  const newChildren = addAttrToValidSon(children, () => ({ data: dataRef.current, run: runRef.current }), (child) => child?.type?.name === 'Form');

  return (
    <div className="my-container">
      <CState dataRef={dataRef} runRef={runRef} />
      {newChildren}
    </div>);
}

export default Container;
