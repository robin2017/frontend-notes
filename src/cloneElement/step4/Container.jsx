import React, { useMemo } from 'react';
import { useRequest } from 'ahooks';
import qs from 'querystring';
import { addAttrToValidSon } from './utils';
// 组合组件：https://zh-hans.reactjs.org/docs/components-and-props.html#composing-components
const mockUrl = 'https://mock.yonyoucloud.com/mock/16531/api/table/api/getList';
const service = (params) => {
  return fetch(mockUrl + (params ? `?${qs.stringify(params)}` : ''))
    .then((rst) => rst.json()).then((rst) => {
      if (params) {
        rst.data.forEach((item) => {
          item.name = `${item.name }ddff`;
        });
      }
      return rst;
    });
};
function Container({ children }) {
  console.log(`渲染容器-${Date.now()}`);
  const { data, run } = useRequest(service);
  // 表单Children中添加useMemo，并且将data作为依赖
  const formChildren = useMemo(() => {
    console.log('run usememo:', data);
    return addAttrToValidSon(children, () => ({ data, run }), (child) => child?.type?.name === 'Form');
  }, [JSON.stringify(data)]);
  return <div className="my-container">{formChildren}</div>;
}

export default Container;
