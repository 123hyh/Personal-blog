<template>
  <div class="el-row">
      <div class="el-col-xs-24 el-col-sm-12 el-col-md-6  el-col-md-offset-1 container-aside">  
        <div class="navgation"></div>
      </div>
      <div class="el-col-xs-24 el-col-sm-12 el-col-md-15 el-col-md-offset-1 container-main">是我</div>
  </div>
</template>

<script>


export default {
  name: "home",
  components: {
    
  }
};
</script>
<style scoped lang='less'>
@border-width-on:1px;
@border-style-on:solid;
@border-color-on:#000;
.el-row{
  >.container-aside{
    height: 800px;
    overflow-y: scroll;
    /* 滚动条样式 */
    &::-webkit-scrollbar{
      width: 4px;
      height: 4px
    }
    &::-webkit-scrollbar-track{
      background: #f6f6f6;
	    border-radius:2px;
    }
    &::-webkit-scrollbar-thumb{
      border-radius: 2px;
      background: #aaa;
    }
    >.navgation{
      height: 2000px
    }
  }
  >.container-main{
    height: 200px;
    border: @border-width-on @border-style-on @border-color-on
  }
}


</style>
