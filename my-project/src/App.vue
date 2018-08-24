<template>
  <div id='app'>
    <index-header></index-header>
    <router-view/>
    <index-Footer></index-Footer>
  </div>
</template>
<script>
import IndexHeader from '@/views/IndexHeader';
import IndexFooter from '@/views/IndexFooter';
/* 重置样式 */
import '@/assets/css/normalize.css'
export default {
  data(){
    return {

    }
  },
  beforeCreate(){
    document.getElementsByTagName('html')[0].className='body'
  },
  components:{
    IndexHeader,
    IndexFooter
  }
}
</script>

<style lang="less">
.body{
  width: 100%; 
}
#app{
  width: 90%;
  border: 1px solid #000;
  margin: 0 auto
}
</style>
