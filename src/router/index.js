import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//异步路由
const theme14 = r => require.ensure([], () => r(require('../views/theme14/theme14')), 'theme14')
const agreement = r => require.ensure([], () => r(require('../views/agreement')), 'agreement')
<<<<<<< HEAD
const loadingGame = r => require.ensure([], () => r(require('../views/loading/loadingGame')), 'loadingGame')
=======
const loading = r => require.ensure([], () => r(require('../views/loading/loading')), 'loading')
const home = r => require.ensure([], () => r(require('../views/home/home')), 'home')
>>>>>>> 28e70047e56cb226039ef22a761efb3ce4059e34
export default new Router({
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
      path: '/loading/loadingGame',
      name: 'loadingGame',
      component: loadingGame
=======
      path: '/loading',
      name: 'loading',
      component: loading
    },
    {
      path: '/home',
      name: 'home',
      component: home
>>>>>>> 28e70047e56cb226039ef22a761efb3ce4059e34
    }

  ]
})