const getObject = (attrList) => {
  const isArray = (arr) => Object.keys(arr).reduce((acc, cur) => acc && /\d+/.test(cur), true);
  const loop = (obj) => {
    if (typeof obj !== 'object') return obj;
    let r = (Array.isArray(obj) || isArray(obj)) ? [] : {};
    for (const key in obj) {
      r[key] = loop(obj[key]);
      if (key === '_val_') r = obj._val_;
    }
    return r;
  };
  const rst = {};
  attrList.forEach(({ attr, value }) => {
    const as = attr.split('.');
    let tmpObj = rst;
    as.forEach((a) => {
      if (!tmpObj[a]) {
        tmpObj[a] = {};
      }
      tmpObj = tmpObj[a];
    });
    tmpObj._val_ = value;
  });
  return loop(rst);
};

const rst2 = getObject([
  { attr: 'peter.age', value: '23' },
  { attr: 'peter.name', value: 'jack' },
  { attr: 'peter.sons.0.name', value: 'jack' },
  { attr: 'peter.sons.1', value: 'july' },
  { attr: 'peter.sons.6.age', value: '45' },
]);
console.log(rst2);
