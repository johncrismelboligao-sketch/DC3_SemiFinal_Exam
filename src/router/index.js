import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import MainView from '../views/MainView.vue'
import AboutPage from '../views/AboutPage.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/reservations',
      component: MainView
    },
    {
      path: '/about',
      component: AboutPage
    }
  ]
})

export default router