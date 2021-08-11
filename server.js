const Vue = require('vue')
const server = require('express')()  // node 服务
// express 响应, 根请求
server.get('/', (req, res) => {
 // 1、创建vue实例
 const app = new Vue({
  template: `<div>hello</div>`
 })
 //  2、创建一个renderer
 const renderer = require('vue-server-renderer').createRenderer()
 // 3、将vue 实例渲染为html
 // renderer.renderToString(vue实例，(错误,渲染后的html)=>{})
 // renderer.renderToString(app, (err, html) => {
 //  if (err) throw err
 //  console.log(html)
 // })
 // 在2.5.0+ 如果没有传入回调函数，则会返回Promise
 renderer.renderToString(app).then((html) => {
  // console.log('2', html)
  res.send(`
  <!DOCTYPE html>
    <html lang="en">
    <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
    </head>
    <body>
     ${html}
    </body>
   </html>
  `)
 }).catch((err) => {
  console.log(err)
 })
})
// 启动node服务并且监听3001端口
server.listen(3001)


