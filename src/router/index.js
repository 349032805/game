import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//异步路由
const theme14 = r => require.ensure([], () => r(require('../views/theme14/theme14')), 'theme14')
const agreement = r => require.ensure([], () => r(require('../views/agreement')), 'agreement')
<<<<<<< HEAD
const loading = r => require.ensure([], () => r(require('../views/loading/loading')), 'loading')
const shop = r => require.ensure([], () => r(require('../views/shop/shop')), 'shop')
=======
const loadingGame = r => require.ensure([], () => r(require('../views/loading/loadingGame')), 'loadingGame')
const home = r => require.ensure([], () => r(require('../views/home/home')), 'home')
const loadingYyl = r => require.ensure([], () => r(require('../views/loading/loadingYyl')), 'loadingYyl')
>>>>>>> 7679eb22d4344d073d481bac2c8e8a538bbf9d50
export default new Router({
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      component: theme14
    },
    {
      path: '/theme14',
      name: 'theme14',
      component: theme14
    },
    {
      path: '/agreement',
      name: 'agreement',
      component: agreement
    },
    {
<<<<<<< HEAD
      path: '/loading',
      name: 'loading',
      component: loading
    },
    {
      path:'/shop',
      name:'shop',
      component:shop
    }
=======
      path: '/loading/loadingGame',
      name: 'loadingGame',
      component: loadingGame
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },{
      path: '/loading/loadingYyl',
      name: 'loadingYyl',
      component: loadingYyl
    },

>>>>>>> 7679eb22d4344d073d481bac2c8e8a538bbf9d50
  ]
})
