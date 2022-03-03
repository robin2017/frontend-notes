const addWithArgs = (a, b) => {
  return a + b;
};
const addWithoutArgs = addWithArgs.bind(null, 2, 4);
const rst = addWithoutArgs();
console.log('rst:', rst); // 6
