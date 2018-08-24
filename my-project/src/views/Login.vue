<template>
<div>
    <input type="text" v-model="name"><br>
    <input type="password" @keyup.13="handelLogin" v-model="password"> <br>
    <button @click.stop='handelLogin'>登录</button>
    <button @click.stop="handel">上传</button>
    <el-button type="primary" @click="handelLogin" v-loading.fullscreen.lock="fullscreenLoading">上传</el-button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name:'',
            password:'',
            fullscreenLoading :false
        }
    },
    methods:{
       /*  handelLogin(){
            let data = {name:this.name,password:this.password};
            this.$http.post('http://127.0.0.1:3000/user/login',data).then( res =>{
                if(res.status != 200){
                    alert('网络错误,请重试')
                }else{
                    console.log(res.data);
                    service.a()
                }
            })
        } */
        handelLogin(){
            this.fullscreenLoading = true;
            let data = {name:this.name,password:this.password}
            /* this.$http('/login',data).then(res=>{
                console.log(res)
            }) */
            this.$_http.POST('/login',data).then(res=>{
                if(res){
                    this.fullscreenLoading = false
                    console.log(res);
                }
            }).catch((error)=>{
                var reg = /\d+[ms]/i;
                if(reg.test(error)){
                    this.fullscreenLoading = false
                    alert('请求超时,请重新刷新');
                }else{
                    alert('请求错误');
                }
            })
        },
    }
}
</script>
<style>

</style>

