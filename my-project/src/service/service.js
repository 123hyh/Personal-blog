import axios from 'axios';
// let user = 'http://127.0.0.1:3000/user';
/* export const  User = (port,options)=>{
    if(port=='/login'){
        return  new Promise((resolve,reject)=>{
            axios({
                baseURL:user,
                url:user+port,
                method:'post',
                data:options,
                timeout:4000
            }).then(response=>{
                resolve(response)
            },err => {
                reject(err)
            })
        })
    }
} */
export default class service {
    constructor(user,upload){
        this.user='http://127.0.0.1:3000/user'
        this.upload = 'http:127.0.0.1:3000/upload'
    }
    POST(port,data){
        return  new Promise((resolve,reject)=>{
            axios({
                baseURL:this.user,
                url:port,
                method:'POST',
                data,
                timeout:4000
            })
            .then(response=>{
                resolve(response);
            })
            .catch(error =>{
                reject(error);
            })
        })
    }

    GET(port,params){
        return new Promise((resolve,reject)=>{
            axios({
                baseURL:this.user,
                url:port,
                method:'GET',
                timeout:4000,
                params
            })
            .then(response=>{
               resolve(response); 
            })
            .catch(error =>{
                reject(error)
            })
        })
    }
    upload(port,data){
        return new Promise((resolve, reject)=>{
            axios({
                baseURL:this.upload,
                url:port,
                method:'POST',
                data
            })
            .then(response =>{
                resolve(response)
            })
            .catch(error =>{
                reject(error)
            })
        })
    }
}