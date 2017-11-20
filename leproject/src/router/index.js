import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import Search from '@/components/search'
import Detail from '@/components/detail'
import Detaillist from '@/components/detaillist'
import Register from '@/components/register'
import Login from '@/components/login'
import Logintel from '@/components/logintel'
import Loginmove from '@/components/loginmove'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home', 
      component: Home
    },
    {
      path: '/search', 
      component: Search
    },
    {
      path: '/detail', 
      component: Detail
    },
    {
      path: '/detaillist', 
      component: Detaillist
    },
    {
      path: '/register', 
      component: Register
    },
    {
      path: '/login', 
      component: Login,
      children:[
        {
          path: 'logintel', 
          component: Logintel
        },
        {
          path: 'loginmove', 
          component: Loginmove
        },
        {
          path: '/', 
          redirect: "/login/logintel"
        },
      ]
    },
    // 当为其他的路径是直接定向到home页面
    {
      path: '*',
      redirect: "/home"
    }

  ]
})
