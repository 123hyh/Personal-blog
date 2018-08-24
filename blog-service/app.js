let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let UserRouter = require('./Router/user');
app.listen(3000);

/* 
*   跨域
*/
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200); //让options请求快速返回
    else  next();
});
app.use(bodyParser.json());  //把前台传过来的json对象转为对象
app.use('/user',UserRouter);