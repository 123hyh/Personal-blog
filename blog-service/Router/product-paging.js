const express = require('express');
const pool = require('../pool');
let Router = express.Router();
Router.get('/paging',(req,res) => {
    let page = parseInt(req.query.page);
    if(!page){
        page = 1;
    }
    let index = (page-1)*10;
    function count(){
        return new Promise((resolve,reject) =>{
            let sql = 'SELECT COUNT(lid) as count FROM `xz_laptop`';
            pool.query(sql,(error,data) =>{
                if(error){
                    reject(error);
                }else{
                    resolve(data);
                }
            })
        })
    }
    function pagedata(){
        return new Promise((resolve,reject) =>{
            let sql = 'SELECT * FROM `xz_laptop` LIMIT ?,?';
            pool.query(sql,[index,10],(error,data)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(data)
                }
            }) 
        })
    }
    Promise.all([count(),pagedata()]).then(data=>{
        /* 数据处理 */
        let pagecount = data[0][0].count;
        let pageSize = Math.ceil(pagecount/10);
        let dataAll = {pageNo:page,pagecount,pageSize,data:data[1]};
        res.json(dataAll)
    }).catch(error=>{
        res.json(error)
    })
})
module.exports = Router