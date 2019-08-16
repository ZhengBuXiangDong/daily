import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

// 路由懒加载
const Today = () => import('./views/Home/Today.vue')
const Target = () => import('./views/Home/Target.vue')
const Log = () => import('./views/Home/PublicLog.vue')
const Mine = () => import('./views/Home/Mine.vue')
const ChooseHabit = () => import('./views/ChooseHabit.vue')
const Addaim = () => import('./views/Addaim.vue')
const Sign = () => import('./views/Sign.vue')

// ceshi
const text = () => import('./views/text.vue')

export default new Router({
  routes: [
    // 主页
    {
      path: '/',
      component: Home,
      // 嵌套路由
      children: [{
        path: '/',
        name: 'today',
        component: Today,
      }, {
        path: '/target',
        name: 'target',
        component: Target,
      }, {
        path: '/log',
        name: 'log',
        component: Log,
      }, {
        path: '/mine',
        name: 'mine',
        component: Mine,
      }]
    }, {
      // 选择习惯
      path: '/choose',
      name: 'choose',
      component: ChooseHabit,
    }, {
      // 添加目标
      path: '/add/:name',
      name: 'add',
      component: Addaim,
    },
    {
      // 添加目标
      path: '/text',
      name: 'text',
      component: text,
    }, {
      // 登录
      path: '/sign',
      name: 'sign',
      component: Sign,
    }

  ]
})