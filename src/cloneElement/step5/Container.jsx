import React, { useMemo } from 'react';
import { useRequest } from 'ahooks';
import qs from 'querystring';
import { addAttrToValidSon2 } from './utils';
// 组合组件：https://zh-hans.reactjs.org/docs/components-and-props.html#composing-components
const mockUrl = 'https://mock.yonyoucloud.com/mock/16531/api/table/api/getList';
const service = (params) => {
  return fetch(mockUrl + (params ? `?${qs.stringify(params)}` : ''))
    .then((rst) => rst.json()).then((rst) => {
      if (params) {
        rst.data.forEach((item) => {
          item.name = `${item.name }${qs.stringify(params)}`;
        });
      }
      return rst;
    });
};
// 状态组件必须隔离！！！，否则触发cloneElement导致状态清零！！！
function Container({ children }) {
  console.log(`渲染容器-${Date.now()}`);
  const { data, run } = useRequest(service);
  // form为状态组件，放在useMemo中进行隔离
  const formChildren = useMemo(() => {
    console.log('run usememo:', data, run);
    return addAttrToValidSon2(children, () => ({ run }), (child) => {
      console.log('child.type:', child.type);
      return child?.type?.name === 'MyForm';
    });
  }, []);

  // table为ui组件，直接取值
  const tableChildren = addAttrToValidSon2(children, () => ({ data }), (child) => child?.type?.name === 'MyTable');
  console.log('表单表格元素====>', formChildren, tableChildren);
  return <div className="my-container">{[formChildren, tableChildren]}</div>;
}

export default Container;
