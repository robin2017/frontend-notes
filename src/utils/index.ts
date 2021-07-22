// 深克隆
const deepClone = (obj:any) => {
  if (typeof obj !== "object") return obj;
  const rst:{[key:string]:any} = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    rst[key] = deepClone(obj[key]);
  }
  return rst;
};
// 部分属性组成对象(解构麻烦且污染)
const pick = (obj:{[key:string]:any}, arr:any[] = []) => {
  return arr.reduce(
    (acc, key) => (key in obj && (acc[key] = obj[key]), acc),
    {}
  );
};


export default {
    deepClone,
    pick
}