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
