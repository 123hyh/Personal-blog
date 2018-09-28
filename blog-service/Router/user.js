let express = require('express');
let pool = require('../pool');
let Router = express.Router();
Router.post('/login',(req,res)=>{
    let name = req.body.name,   password = req.body.password;
    console.log(req.body)
    let sql = 'SELECT uname FROM `xz_user` WHERE uname=? AND upwd=?';
    pool.query(sql,[name,password],(err,response)=>{
        if(err) throw err;
        if(response.length>0){
            res.json({code:1,uname:response[0].uname});                
        }else{
            res.json({code:0,err:'登录失败'});
        }
    });
});
module.exports = Router;