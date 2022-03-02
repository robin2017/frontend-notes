const Paloma = require('paloma');

const app = new Paloma();

app.use((ctx) => {
  ctx.body = 'hello world!';
});

app.listen(3100);
