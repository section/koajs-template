const Koa = require('koa')
const app = new Koa()
const favicon = require('koa-favicon')
const path = require('path')
const port = process.env.PORT || 3000

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.use(require('koa-static')('views'))

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
