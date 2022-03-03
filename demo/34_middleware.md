---
title: 34、middleware洋葱模型
order: 34
---
> 问题由来：use-table的getParams原理排查

[相关代码](https://github.com/ahooksjs/useTable/blob/v0.2.14/packages/use-query-display/src/index.ts#L70)
## 1、常见使用的地方
+ koa的洋葱模型
+ redux的pipe模型
+ useTable参考以上
 
## 2、参考资料 
[前端常见中间件机制对比分析](https://juejin.cn/post/6882751879118323719)  
[【高频面试题】compose和pipe的实现](https://juejin.cn/post/7008089093775048735)  
[JavaScript中的compose函数和pipe函数](https://juejin.cn/post/6844904061821517832)  
[【Node】深入浅出 Koa 的洋葱模型](https://juejin.cn/post/7012031464237694983)  
[如何更好地理解中间件和洋葱模型](https://juejin.cn/post/6890259747866411022)  
[深入理解洋葱模型中间件机制](https://juejin.cn/post/6844904025767280648)  
[Koa 洋葱模型（源码解析，简约版）](https://juejin.cn/post/6844904121858785294)    
[Koa的洋葱中间件，Redux的中间件，Axios的拦截器让你迷惑吗？实现一个精简版的就彻底搞懂了](https://juejin.cn/post/6844904039608500237)  
[学习 koa 源码的整体架构，浅析koa洋葱模型原理和co原理](https://juejin.cn/post/6844904088220467213)  
[Express中间件原理详解](https://juejin.cn/post/6844903573663416334)
 ## 3、常见框架的中间件机制
 + koa：洋葱模型
 + express：暂时未深入
 + axios：拦截器模型
 + redux：compose模型
 + webpack的loader加载：compose模型

 ## 4、js基础知识：compose函数/pipe函数
> 两个函数作用都是：将需要嵌套执行的函数平铺

### 4.1、pipe函数(类似队列)
+ 执行顺序：从左到右
+ 底层实现：reduce
### 4.2、compose函数(类似栈)
+ 执行顺序：从右到左
+ 底层实现：reduceRight
+ 应用：redux的中间件，webpack的loader，koa的洋葱模型
+ 为啥从右到左：

### 4.3、代码实现demo（局限性：函数只有一个参数，接受其他函数的返回）

```
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
```
### 4.4、koa的compose函数
+ 与普通compose函数对比
    + 函数有两个参数
    + 支持async语法

```
const middleware = [];
function use(mw) {
  middleware.push(mw);
}

// 精妙绝伦的写法，目前自己写不出来
function compose(middleware) {
  return (ctx, next) => {
    function dispatch(i) {
      const fn = middleware[i];
      if (!fn) return;
      return fn(ctx, dispatch.bind(null, i + 1));
    }
    return dispatch(0);
  };
}
// ------------------上面定义，下面调用------------------

const mw1 = async function (ctx, next) {
  console.log('next前，第一个中间件');
  await next();
  console.log('next后，第一个中间件');
};
const mw2 = async function (ctx, next) {
  console.log('next前，第二个中间件');
  await next();
  console.log('next后，第二个中间件');
};
const mw3 = async function (ctx, next) {
  console.log('第三个中间件，没有next了');
};
use(mw1);
use(mw2);
use(mw3);
const fn = compose(middleware);
fn();
// next前，第一个中间件
// next前，第二个中间件
// 第三个中间件，没有next了
// next后，第二个中间件
// next后，第一个中间件

```
## 5、koa源码分析
> koa中间件=>洋葱模型=>compose函数
### 5.1、简单demo
```
const Koa = require('koa');

const app = new Koa();
// 中间件1
app.use((ctx, next) => {
  console.log(1);
  next();
  console.log(2);
});

// 中间件 2
app.use((ctx, next) => {
  console.log(3);
  next();
  console.log(4);
});

app.listen(8000, () => {
  console.log('Server is starting');
});
// 控制台打印：1-3-4-2
```
### 5.2、node调试
> 现在简单了解（compose流转细节未清楚），后续可以在此项目中调试
![图片](https://robin2017.github.io/frontend-notes/images/koa1.jpg)
![图片](https://robin2017.github.io/frontend-notes/images/koa2.jpg)