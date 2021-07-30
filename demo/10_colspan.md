---
title: 10、列合并预处理
order: 10
---
 
 

 ```jsx
import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {Table} from '@alifd/next'
const onRowClick = function(record, index, e) {
    console.log(record, index, e);
}
const getDataSource = () => {
    const result = [];
    for (let i = 0; i < 5; i++) {
      result.push({
        title: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
        id: 100306660940 + i,
        year: i === 0 ? "-" : `2019-10-2${3 + i}`,
        month: `16:39:${23 + i}`
      });
    }
    return result;
  }
const  render = (value, index, record) => {
    return <a>Remove({record.id})</a>;
  }
const  cellProps = (rowIndex, colIndex,dataIndex,record) => {
  console.log('所有数据:',rowIndex, colIndex,dataIndex,record)
    if (rowIndex === 2 && colIndex === 1) {
      return {
        rowSpan: 3
      };
    }
  };

const dataSource = getDataSource()
const App = ()=>{
  console.log()
  return  <Table
    dataSource={dataSource}
    onRowClick={onRowClick}
    cellProps={(rowIndex, colIndex,dataIndex,record) => {
      console.log('所有数据:',rowIndex, colIndex,dataIndex,record)
        if (rowIndex === 2 && colIndex === 1) {
          return {
            rowSpan: 3
          };
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
 

 