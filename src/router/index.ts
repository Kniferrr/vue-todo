import { createRouter, createWebHistory } from 'vue-router'
import TaskMainComponent from '@/views/TaskMainComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TaskMainComponent
    }
  ]
})

export default router
