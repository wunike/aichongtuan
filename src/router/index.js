import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Trolley from '@/components/alone/trolley'
import My from '@/components/alone/my'
import axios from "axios"

Vue.prototype.$axios = axios
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/trolley"
    },
    {
      path: '/trolley',
      name: 'trolley',
      component: Trolley
    },
    {
      path: '/my',
      name: 'my',
      component: My
    }
  ],
  linkActiveClass:"high"
})
