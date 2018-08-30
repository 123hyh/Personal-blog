import Vue from "vue";  //引入
import Vuex from "vuex"; //引入vuex

Vue.use(Vuex); //使用vuex

export default new Vuex.Store({  //创建vuex的实例并导出  在main.js 中引入该文件 在Vue的实例中挂在vuex
  state: {
    count:0   //参数
  },
  mutations: {  //修改state里的参数值

    add(state){
      state.count=1
      window.sessionStorage.setItem('login',state.count)  //vuex数据是响应式的。避免刷新被清除 ，将数据存储到sessionStorage
    },
    isLogin(state){
      setTimeout(()=>{
        state.count=0;
        window.sessionStorage.setItem('login',0);
      },10000)
      /* if(login){
        state.count=login
      }else{
        state.count=0
      } */
    }
  },
  actions: {}, //异步
  getters:{ //
  }
});
