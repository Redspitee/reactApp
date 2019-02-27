
const Koa=require('koa');
let app = new Koa();
 
app.use( async ( ctx ) => {
  if ( ctx.url === '/index' ) {
    ctx.cookies.set(
      'cid', 
      'ddddd',    //可替换为token
      {
        domain: 'localhost',  // 写cookie所在的域名
        path: '/',       // 写cookie所在的路径
        maxAge: 10 * 60 * 1000, // cookie有效时长
        expires: new Date('2006-02-15'),  // cookie失效时间
        httpOnly: false,  // 是否只用于http请求中获取
        overwrite: false  // 是否允许重写
      }
    )
    ctx.body = 'cookie is ok'
  } else {
  	console.log(ctx.cookies.get("cid"));
    ctx.body = '非index' 
  }
 
})
app.listen(3001)
