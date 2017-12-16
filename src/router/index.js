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
const buyCoins = r => require.ensure([], () => r(require('../views/shop/buyCoins')), 'buyCoins')
const buyDiamonds = r => require.ensure([], () => r(require('../views/shop/buyDiamonds')), 'buyDiamonds')
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
      component: shop,
      children: [
        {
          path: '/shop/buyCoins',
          name: 'buyCoins',
          component: buyCoins
        },
        {
          path: '/shop/buyDiamonds',
          name: 'buyDiamonds',
          component: buyDiamonds
        },
      ]
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
    },
    {
      path: '/loading/loadingYYL',
      name: 'loadingYYL',
      component: loadingYYL
    }
  ]
})
