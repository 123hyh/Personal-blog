import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {path: "/",name: "home",component: Home},
    {path: "/about",name: "about",component: () =>import( "@/views/About.vue")},
    {path:'/login',component: ()=> import ('@/views/Login.vue')},
    {path:'/vuex',component:() => import('@/views/VuexVue.vue')},
    {path:'/page',component: ()=> import('@/components/Pagination.vue')}
  ]
});
