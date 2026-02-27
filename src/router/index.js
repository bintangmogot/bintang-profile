import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import ProjectArchive from '../pages/ProjectArchive.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'ProjectArchive',
    component: ProjectArchive
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router
