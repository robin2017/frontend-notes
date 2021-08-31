export const getAttrValue = (target:Object,attrStr:string)=>{
  const fnStr = 'return this.' + attrStr;
  let fn = new Function(fnStr)
  fn = fn.bind(target)
  let val = null
  try{
    val = fn()
  }catch(e){
    console.error('解析错误:',e)
  }
  return val
}


 
const getObject = (attrList:[{attr:string,value:any}]) =>{
  const isArray = (arr:any) => Object.keys(arr).reduce((acc, cur) => acc && /\d+/.test(cur), true);
  const loop = (obj:any) => {
    if (typeof obj !== 'object') return obj;
    let r:any = (Array.isArray(obj) || isArray(obj)) ? [] : {};
    for (const key in obj) {
      r[key] = loop(obj[key]);
      if (key === '_val_') r = obj._val_;
    }
    return r;
  };
  const rst = {};
  attrList.forEach(({ attr, value }) => {
    const as:string[] = attr.split('.');
    if (Array.isArray(as) && as.length > 1 && as[0] === '') {
      as.shift();
    }
    let tmpObj:any = rst;
    as.forEach((a) => {
      if (!tmpObj[a]) {
        tmpObj[a] = {};
      }
      tmpObj = tmpObj[a];
    });
    tmpObj._val_ = value;
  });
  return loop(rst);
}

export default {
  getAttrValue,
  getObject
};
