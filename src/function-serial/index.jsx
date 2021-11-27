import React, { useEffect } from 'react';


// polyfill
// eslint-disable-next-line no-eval
// eval('window.AsyncFunction = Object.getPrototypeOf(async function () { }).constructor; ');

const isFuncObj = (obj) => {
  return obj.type === 'JSFunction' && typeof obj.value === 'string';
};

// 这三个相互关联
const myReg = /function\(a\)\s*{([\s\S]*)}/;

const myObj = {
  type: 'JSFunction',
  value: 'function(a){console.log(this);return a }',
};


const getFunc = (funcObj, funcReg) => {
  if (isFuncObj(funcObj)) {
    const regRet = funcReg.exec(funcObj.value);
    if (regRet) {
      const funBodyStr = regRet[1];
      let funTmp = new Function('a', funBodyStr);
      funTmp = funTmp.bind({ name: 'robin' });
      return (...params) => {
        try {
          return funTmp(...params);
        } catch (e) {
          console.error('函数运行错误:', e);
        }
      };
    } else {
      console.error('函数字符串不符合正则表达式:', funcObj.value, funcReg);
    }
  } else {
    console.error('不符合函数规范');
  }
};

function FunctionSerial() {
  useEffect(() => {
    const myFunc = getFunc(myObj, myReg);
    const rst = myFunc('123');
    console.log(rst);
  }, []);
  return (
    <div>
      FunctionSerial
    </div>
  );
}

export default FunctionSerial;
