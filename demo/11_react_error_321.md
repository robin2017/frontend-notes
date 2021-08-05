---
title: 11、Minified React error#321
order: 11
---

[知乎相关问题](https://zhuanlan.zhihu.com/p/93773786)
[掘金相关问题](https://juejin.cn/post/6922687641485836301)
[官方说明](https://zh-hans.reactjs.org/warnings/invalid-hook-call-warning.html)
![demo](https://robin2017.github.io/frontend-notes/images/err321.jpg)

 ```jsx
import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { colSpanUtils } from 'frontend-notes'
import {Table} from '@alifd/next'
const onRowClick = function(record, index, e) {
    console.log(record, index, e);
}
const getDataSource = () => {
    const titles = [1,1,2,2,2]
    const result = [];
    for (let i = 0; i < 5; i++) {
      result.push({
        title:titles.shift(),
        id: 100306660940 + i,
        year: i === 0 ? "-" : `2019-10-2${3 + i}`,
   
      });
    }
    return result;
  }
const  render = (value, index, record) => {
    return <a>Remove({record.id})</a>;
  }
 

const dataSource = getDataSource()
const App = ()=>{
  const colSpanList = colSpanUtils(dataSource,'title',(pre,cur)=>pre===cur)
  console.log('colSpanList:',colSpanList)
  return  <Table
    dataSource={dataSource}
    onRowClick={onRowClick}
    cellProps={(rowIndex, colIndex,dataIndex,record) => {
      console.log('所有数据:',rowIndex, colIndex,dataIndex,record)
        // if (rowIndex === 2 && dataIndex==='title') {
        //   return {
        //     rowSpan: 3
        //   };
        // }
        if(dataIndex==='title'){
          const rst = colSpanList.find(item=>item.start===rowIndex)
          if(rst){
            return {
              rowSpan:rst.num
            }
          }
        }
      }}
  >
    <Table.Column title="Id" dataIndex="id" />
    <Table.Column title="Title" dataIndex="title" />
    <Table.Column title="Time" dataIndex="year" />
  </Table>
}

ReactDOM.render((
  <App />
), mountNode);
```
 

 