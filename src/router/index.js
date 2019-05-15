import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/Index.vue'
import Create from '@/pages/Create/Create.vue'
import Detail from '@/pages/Detail/Detail.vue'
import Edit from '@/pages/Edit/Edit.vue'
import My from '@/pages/My/My.vue'
import User from '@/pages/User/User.vue'
import Register from '@/pages/Register/Register.vue'
import Login from '@/pages/Login/Login.vue'
import store from '@/store'
Vue.use(Router)
// window.store = store
const router= new Router({
  routes: [
    // 首页
    {
      path: '/',
      component: Index
    },
    // 登录
    {
      path: '/login',
      component: Login
    },
    // 注册
    {
      path: '/register',
      component: Register
    },
    // 详情
    {
      path: '/detail/:blogId',
      component: Detail
    },
    // 创建
    {
      path: '/create',
      component: Create,
      meta: { requiresAuth: true }
    },
    // 编辑
    {
      path: '/edit/:blogId',
      component: Edit,
      meta: { requiresAuth: true }
    },
    // 我的
    {
      path: '/my',
      component: My,
      meta: { requiresAuth: true }
    },
    // 用户页面
    {
      path: '/user/:userId',
      component: User
    },
    
  ]
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then(isLogin=>{
      if (!isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }    
    })
  } else {
    next() // 确保一定要调用 next()
  }
})
export default router