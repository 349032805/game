import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//异步路由
const theme14 = r => require.ensure([], () => r(require('../views/theme14/theme14')), 'theme14')
const agreement = r => require.ensure([], () => r(require('../views/agreement')), 'agreement')

const shop = r => require.ensure([], () => r(require('../views/shop/shop')), 'shop')
const loadingGame = r => require.ensure([], () => r(require('../views/loading/loadingGame')), 'loadingGame')
const home = r => require.ensure([], () => r(require('../views/home/home')), 'home')
const loadingYYL = r => require.ensure([], () => r(require('../views/loading/loadingYYL')), 'loadingYYL')
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
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/loading/loadingGame',
      name: 'loadingGame',
      component: loadingGame
    },
    {
      path: '/home',
      name: 'home',
      component: home
<<<<<<< HEAD
    },{
      path: '/loading/loadingYYL',
      name: 'loadingYYL',
      component: loadingYYL
=======
    }, {
      path: '/loading/loadingYyl',
      name: 'loadingYyl',
      component: loadingYyl
>>>>>>> fe4eb0445bdde7838b325546f63327ff7d741c89
    },
  ]
})
