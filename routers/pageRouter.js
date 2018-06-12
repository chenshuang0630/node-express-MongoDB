//写路由，需要express，express.Router()；
var express = require('express');

//使用 express.Router 类创建模块化、可挂载的路由句柄。
//Router 实例是一个完整的中间件和路由系统。
// 通过app.use()来使用路由中间件。
var router = express.Router();

//get('/login') 截取Get请求方式的url中含有/login的请求
router.get('/index', (req, res) => {

	//把数据填充进模板，一般数据是JSON，模板是views目录下的模板文件
	//Express的模板引擎常用的是ejs和jade。它预留了变量，res.render()就是将我们的数据填充到模板后展示出完整的页面。

	//res.render(file,option)
	//先在app.js或者index.js中设置渲染引擎，并指明模板所在目录，这里在app.js中选的是ejs，然后将视图模板的文件位置放入file，
	//将传入的模板数据放入option对象中，模板引擎就能自己渲染出视图
	res.render('index', {
		title: '挖宝首页'
	});
});

router.get('/login', (req, res) => {

	res.render('login', {
		title: '挖宝登录页'
	});

});

router.get('/reg', (req, res) => {

	res.render('reg', {
		title: '挖宝注册页'
	});

});

//对外留一个借口，全局对象
module.exports = router;