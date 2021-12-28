import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Test from '../views/Test.vue'

import Main from '../views/Main.vue'
import Manual from '../views/Manual.vue'
import Option from '../views/Option.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/test',
  //   name: 'Test',
  //   component: Test
  // },

  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/Main/:slideIndex',
    name: 'Main',
    component: Main,
    props: (route) => {
      const slideIndex = parseInt(route.params.slideIndex);
      return { slideIndex }
    }
  },
  {
    path: '/Manual/:mainIndex/:subIndex',
    name: 'Manual',
    component: Manual,
    props: (route) => {
      const mainIndex = parseInt(route.params.mainIndex);
      const subIndex = parseInt(route.params.subIndex);
      return { mainIndex, subIndex }
    }
  }, 
  {
    path: '/Option/:mainIndex/:subIndex',
    name: 'Option',
    component: Option,
    props: (route) => {
      const mainIndex = parseInt(route.params.mainIndex);
      const subIndex = parseInt(route.params.subIndex);
      return { mainIndex, subIndex }
    }
  }, 
]

const router = new VueRouter({
  routes
})

export default router