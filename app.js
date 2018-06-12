//引中间件 app
var express = require('express'); 
//建立数据库连接
var mongoose = require('mongoose'); 


//引入自定义的模块，写相对路径，接收全局对象router，
//使用路由，app.use
var pageRouter = require('./routers/pageRouter.js');


var port = 3000;
var hostname = 'localhost';
var hostDB = 'mongodb://localhost:27017/wabao';

//中间件，listen监听服务开启是否成功，app.set：ejs模板，
//app.use：静态资源和使用路由（路由复杂是单独写一个js里面，再引进来require）。
var app = express();


//模板是views目录下的模板文件；前面参数是key,后面是value值
app.set('views', './views'); 
//设置模板引擎为ejs,之前已经npm i -S ejs；前面参数是key,后面是value值
app.set('view engine', 'ejs'); 


//node直接访问不了jpg，css，要想访问静态资源，用这个中间件。
//express.static属于中间件，中间件本质上就是一个函数，可以实现一些功能。
//app.use(‘/static’, express.static(‘public’)); // public静态资源的目录 ， 
// /static虚拟静态资源的根目录，实际不存这个文件夹，为了安全，不写也行
app.use(express.static('public')); 


app.use('/',pageRouter);

app.use((req,res)=>{	
	res.redirect('/index');
});

//连接数据库
mongoose.connect(hostDB, (err) => {
	if(err) {
		console.log('数据库连接失败');
	} else {
		console.log('数据库连接成功');

		//监听服务是否开启，不用单独的写在外面，可以写在连接数据库成功之后
		app.listen(port, hostname, (err) => {
			if(err) {
				console.log('服务开启失败');
			} else {
				console.log('服务开启成功');
			}
		})
	}
})