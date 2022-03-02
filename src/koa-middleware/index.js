const fun1 = (x) => x + 1;
const fun2 = (x) => x ** 2;
// 我的ES6实现
const pipe = (...fns) => (val) => fns.reduce((resp, fn) => fn(resp), val);
// 我的ES6实现
const compose = (...fns) => (val) => fns.reduceRight((resp, fn) => fn(resp), val);
// 1、嵌套执行的函数:里面先执行，外面后执行
const res = fun2(fun1(1));
// 2、平铺执行：先左后右
const res1 = pipe(fun1, fun2)(1);
// 3、平铺执行：先右后左
const res2 = compose(fun2, fun1)(1);
console.log(res, res1, res2); // 4 4 4

// 资料上ES5实现
// const pipe = function () {
//   const args = [].slice.apply(arguments);
//   return function (x) {
//     const middleFn = (res, cb) => cb(res);
//     return args.reduce(middleFn, x);
//   };
// };

// 资料上ES5实现
// const compose = function () {
//   const args = [].slice.apply(arguments);
//   return function (x) {
//     return args.reduceRight((res, cb) => cb(res), x);
//   };
// };
