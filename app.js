const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World from KoaJS on Section!';
});

app.listen(3000);