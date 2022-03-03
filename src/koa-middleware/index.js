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

app.listen(3000, () => {
  console.log('Server is starting');
});
// 控制台打印：1-3-4-2

