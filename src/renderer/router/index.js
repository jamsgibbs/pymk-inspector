import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage')
    },
    {
      path: '/credentials',
      name: 'credentials',
      component: require('@/components/credentials')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
