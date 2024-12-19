import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/HelloWorld.vue'
import About from '@/components/AboutPage.vue' // 追加

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about', // 追加
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router