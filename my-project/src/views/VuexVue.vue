<template>
    <div>
        <h2 class="reds">{{count}}</h2>
        <button @click.stop='add'>+</button>
        <button @click.stop='reduce'>-</button>
        <ul @click="stops($event)">
            <li><button data-btn='btn'>翻转</button></li>
            <li v-for='(item,index) in dataList' :key='index'  :data-index='index'>{{item.id}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            dataList:[
                {title:{titles:'idnex',count:5},id:1},
                {title:{titles:'idnex',count:5},id:2},
                {title:{titles:'idnex',count:5},id:3},
            ]
        }
    },
    mounted(){
        // window.sessionStorage.setItem('dataList',JSON.stringify(this.dataList));
    },
    updated(){
        // window.sessionStorage.setItem('dataList',JSON.stringify(this.dataList));     
        this.$store.commit('isLogin')
    },
    computed:{
        count(){
            return this.$store.state.count //获取仓库中的参数
        }
    },
    methods:{
        stops(e){
            console.log(e.target)
            if(e.target.getAttribute('data-btn')=='btn'){
                this.dataList.reverse();
            }
            var index = e.target.getAttribute('data-index')  
            // var titles = JSON.parse(window.sessionStorage.getItem('dataList'));
            var titles = this.dataList;
            if(index){
                for(var i=0;i<titles.length;i++){
                    if(i==index){
                        console.log(titles[i])
                    }
                }
            }
            
        },
        add(){
            this.$store.commit('add')  //调用 mutations中的 add 这个方法
            this.$store.commit('isLogin')
        },
        reduce(){
            this.$store.commit('reduce')
        }
    }
}
</script>
<style scoped lang='less'>
 @red:red;
 .reds{
     color: @red
 }
</style>
