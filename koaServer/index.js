const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

router.get('/', ctx => {
    ctx.body = `这是主页`
})

router.get('/user', ctx => {
    ctx.body = {
        username: '张小月',
        age: '18'
    }
})
app
  .use(router.routes())
  .use(router.allowedMethods())
  
app.listen(9093)