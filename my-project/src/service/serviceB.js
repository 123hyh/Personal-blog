import axios from 'axios';
axios.defaults.withCredentials = true;
export default class service {
    constructor() {
        this.user = 'http://127.0.0.1:3000/user'
        this.page = 'http://127.0.0.1:3000/product'
    }
    POSTHTTPService(params){
        return new Promise((resolve, reject) => {
            axios({
                baseURL: params.base,
                url: params.url,
                mrthod: params.mrthod,
                data: params.data,
                timeout: 4000
            })
            .then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    }
    GETHTTPServise(params){
        return new Promise((resolve,reject)=>{
            axios({
                baseURL: params.base,
                url: params.url,
                mrthod: params.mrthod,
                params:params.data,
                timeout: 4000
            })
            .then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    }
    /* 用户登录 */
    POST(port,data){
        let params = {base:this.user,url:port,mrthod:'POST',data};
        return this.POSTHTTPService(params)
    }
    /* 分页查询 */
    GetPaging(port,data){
        let params = {base:this.page,url:port,mrthod:'GET',data};
        return this.GETHTTPServise(params)
    }
}