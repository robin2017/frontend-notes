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

const parseFunc = (funcObj, funcReg) => {
  if (isFuncObj(funcObj)) {
    const regRet = funcReg.exec(funcObj.value);
    if (regRet) {
      const funBodyStr = regRet[1];
      let funTmp = new Function('a', funBodyStr);
      funTmp = funTmp.bind({ name: 'robin' });
      const rst = null;
      try {
        return funTmp('abc');
      } catch (e) {
        console.error('函数执行异常:', e);
      }
    }
  }
};

function FunctionSerial() {
  useEffect(() => {
    const rst = parseFunc(myObj, myReg);
    debugger;
    console.log(rst);
  }, []);
  return (
    <div>
      FunctionSerial
    </div>
  );
}

export default FunctionSerial;
