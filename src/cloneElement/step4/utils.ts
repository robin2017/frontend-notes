import React from 'react';

export const addAttrToValidSon = (
  children: any[],
  getAddAttr = (child: any) => ({}),
  validFunc = (child: any) => true,
) => {
  console.log('调用一次clone');
  const validChildren: any[] = [];
  React.Children.forEach(children, (child: any) => {
    if (!child) return;
    // 这里必须有key，否则警告
    let addAtrr = { key: Math.random().toString(16) };
    if (validFunc(child)) {
      console.log('clone元素为:', child?.type?.name);
      addAtrr = { ...addAtrr, ...getAddAttr(child) };
    }
    validChildren.push(React.cloneElement(child, addAtrr));
  });
  return validChildren;
};

// 只返回符合条件的
export const addAttrToValidSon2 = (
  children: any[],
  getAddAttr = (child: any) => ({}),
  validFunc = (child: any) => true,
) => {
  console.log('调用一次clone');
  const validChildren: any[] = [];
  React.Children.forEach(children, (child: any) => {
    if (!child) return;
    // 这里必须有key，否则警告
    let addAtrr = { key: Math.random().toString(16) };
    if (validFunc(child)) {
      console.log('clone元素为:', child?.type?.name);
      addAtrr = { ...addAtrr, ...getAddAttr(child) };
      validChildren.push(React.cloneElement(child, addAtrr));
    }
   
  });
  return validChildren;
};
