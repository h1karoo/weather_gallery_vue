import { createRouter, createWebHistory } from 'vue-router'
import Weather from '../views/Weather.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Weather
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import(/* webpackChunkName: "about" */ '../views/Gallery.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
