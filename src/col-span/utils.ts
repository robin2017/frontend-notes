// [1,1,1,2,2,2] => [{start:0,num:3},{start:0,num3}]
export const colSpanUtils = (arr:any[],fn:(pre:any,cur:any)=>boolean):{start:number,num:number}[] =>{
  // step1:获取true/false数组
  const tfArr:boolean[] = [];
  for (let i = 0; i < arr.length; i++) {
    tfArr.push(fn(arr[i - 1] || {}, arr[i]));
  }
  tfArr.push(false);
  // step2:获取false下标
  const falseInds:number[] = tfArr.reduce((acc, cur, index) => {
    return cur === false ? [...acc, index] : acc;
  }, []);
  // step3:获取结果
  const rst:{start:number,num:number}[] = [];
  for (let i = 0; i < falseInds.length - 1; i++) {
    rst.push({ start: falseInds[i], num: falseInds[i + 1] - falseInds[i] });
  }
  return rst;
}

