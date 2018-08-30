<template>
<div>
    <el-pagination
        v-loading="loading"
        background
        layout="prev, pager, next"
        @current-change='pageChange'
        :current-page.sync='pageNo'
        :total="totals">
    </el-pagination>
    <button @click="pageChange">click</button>
</div>
    
</template>
<script>
export default {
    data(){
        return {
            loading: false,
            pageNo: 1,
            totals:100*10 //如果是总页数为100页，页面显示10页，所以*10
        }
    },
    methods:{
        pageChange(){   //获取当前点击页码
            this.loading=true;
            let params = {page:this.pageNo};
            this.$_http.GetPaging('/paging',params).then(res=>{
                if(res){
                    this.loading=false
                }
                console.log(res)
            }).catch(error=>{
                if(error){
                    this.loading=false
                }
                consiole.log(error)
            })
        }
    }
}
</script>
