export function login(){
    return {
        url:'http://127.0.0.1:3000/user/login',
        method:'POST',
        data:{name:'dingding',password:'123456'}
    }
}