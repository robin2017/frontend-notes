---
title: 1、常见正则表达式
order: 1
---

##### 相关资料

> https://juejin.cn/post/6844903845227659271
> http://yuncode.net/code/c_529221e42b46a24


[String.replace函数使用](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
[String.replace函数使用-第二个参数为函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#%E6%8C%87%E5%AE%9A%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%E4%BD%9C%E4%B8%BA%E5%8F%82%E6%95%B0)

##### 基础正则表达式

- 数字：\d <==> [0-9]
- 单词：\w <==> [0-9a-zA-z_]
- 空格：\s 一般 \s\S 一起使用
- 次数：?(0|1)  *(>=0) +(>=1)

##### 高频正则表达式
- 手机：xxx
- 正整数：/^\d+$/
+ 正浮点数：/^\d+\.\d+$/
+ 正整数或正浮点数:/^\d+(\.\d+)?$/

```jsx
import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
const funStr = `function add(a,b){
  return a + b;
}`
// 匹配函数名，参数，函数体
const funReg = /function\s+(\w+)\((.*?)\){([\s\S]*)}/;
const aReg = /<a\shref=(.*?)target=(.*?)>(.*?)<\/a>/g;
// aReplace和aReplaceFunc等价
const aReplace = '<a style="color:blue;cursor:pointer" onclick="window.location = $1 ">$3</a>'
const aReplaceFunc = (p0,p1,p2,p3)=>{
  return `<a style="color:blue;cursor:pointer" onclick="window.location = ${p1} ">${p3}</a>`
}
const aStr = `1.授权代表人声明书请按照模板填写提交，<a href='http://download.taobaocdn.com/freedom/43448/word/p1bfjb108vo6i1v577eq9p71btf6.doc?spm=0.0.0.0.z0ZPdI&file=p1bfjb108vo6i1v577eq9p71btf6.doc' target='_blank'>点此</a>下载模板，<a href='https://img.alicdn.com/tfs/TB1kbVHbED1gK0jSZFGXXbd3FXa-1136-907.png' target='_blank'>点此</a>查看出具示例；<br/>
2.授权代表人声明书需要开店主体公司CEO或董事签字，并机打签字人姓名及职位；<br/>`
const record = {
  id:123,
  person:{
    name:'robin'
  },
  list:[
    {id:3}
  ]
}
  const varParse = (str,flag,val)=>{
    const thisStr = str.replace(new RegExp(flag),'this')
   const func =  new Function('return '+thisStr)
   const f = func.bind(val)
   try{
      return f()
   }catch(e){
      console.error(e.message)
      return '报错了'
   }
  }
const strTemplate = '${value},${index},${record.name}';
const strTemplateObj = {
    value:'hello',
    index:4,
    record:{name:'peter'}
  }
const strTemplateParseFun  = (str,value,index,record)=>  str.replace(/\$\{value\}/g,value).replace(/\$\{index\}/g,index+"").replace(/\$\{(record.*?)\}/g,(p0,p1)=>{
    return varParse(p1,'record',record)
    })
 
const App = () => {
  useEffect(()=>{
    const rst =  funReg.exec(funStr)
    console.log('1：',rst)
    document.querySelector('.a-rep').innerHTML = aStr.replace(aReg,aReplaceFunc)
  },[])

 


  
  const varExp1 = 'record?.person.name'
  const varExp2 = 'record?.list[0].id'
  const varExp3 = 'record?.per55son.name'
  

 
  return (
      <div>
        <h3>1、匹配函数字符串</h3>
        <pre>{funStr}</pre>
        <h3>2、分组+全局替换</h3>
        <div className='a-rep'></div>
        <h3>3、变量解析</h3>
        <pre>record={JSON.stringify(record,null,2)}</pre>
        <div>{varExp1}={varParse(varExp1,'record',record)}</div>
        <div>{varExp2}={varParse(varExp2,'record',record)}</div>
        <div>{varExp3}={varParse(varExp3,'record',record)}</div>
        <h3>4、字符串模版解析</h3>
        <div>{strTemplate} => {strTemplateParseFun(strTemplate,strTemplateObj.value,strTemplateObj.index,strTemplateObj.record)}</div>
      </div>
  );
}

ReactDOM.render((
  <App />
), mountNode);
```
