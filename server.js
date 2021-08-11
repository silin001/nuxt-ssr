const Vue = require('vue')
// 1、创建vue实例
const app = new Vue({
 template: `<div>hello</div>`
})
//  2、创建一个renderer
const renderer = require('vue-server-renderer').createRenderer()
// 3、将vue 实例渲染为html
// renderer.renderToString(vue实例，(错误,渲染后的html)=>{})
renderer.renderToString(app, (err, html) => {
 if (err) throw err
 console.log(html)
})