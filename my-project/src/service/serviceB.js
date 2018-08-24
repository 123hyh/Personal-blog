import axios from 'axios';
export default class service {
    constructor(user){
        this.user = 'http://127.0.0.1:3000/user'
    }
    POST(port,data){
        return new Promise((resolve,reject) =>{
            axios({
                baseURL:this.user,
                url:port,
                mrthod:'POST',
                data,
                timeout:4000
            })
            .then(response=>{
                resolve(response)
            }).catch(error =>{
                reject(error)
            })
        })
    }
}