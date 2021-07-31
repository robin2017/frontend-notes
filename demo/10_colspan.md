---
title: 10、列合并预处理
order: 10
---

[code](https://github.com/robin2017/frontend-notes/blob/main/src/col-span/utils.ts)

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
 

 