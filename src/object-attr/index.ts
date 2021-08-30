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


export default {
  getAttrValue
};
