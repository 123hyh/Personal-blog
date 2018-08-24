<template>
    <el-header class="index-header">
        <el-row>
            <el-col :xs='5' :sm='5' :md='5'><router-link to=''>黄裕辉</router-link></el-col>
            <el-col :xs='3'  :sm='2'  :md='2'><router-link to=''>首页</router-link></el-col>
            <el-col :xs='3'  :sm='2'  :md='2'><router-link to=''>相册</router-link></el-col>
            <el-col :xs='3'  :sm='2'  :md='2'><router-link to=''>日记</router-link></el-col>
            <el-col :xs='3'  :sm='2'  :md='2'><router-link to=''>履历</router-link></el-col>
            <el-col :xs='3'  :sm='2'  :md='2'><router-link to=''>留言</router-link></el-col>
            <el-col :xs='3'  :sm='2'  :md='2'><router-link to=''>技术</router-link></el-col>
        </el-row>
    </el-header>
</template>
<script>
export default {
    
}
</script>
<style scoped lang='less'>
.index-header{
    text-align: center;
    line-height: 60px;
    a{
        color:#384756
    }
}
</style>
