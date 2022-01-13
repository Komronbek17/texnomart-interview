import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TheQuestionsContent from '../views/TheQuestionsContent.vue'
import TheTodosContent from '../views/TheTodosContent.vue'
import TheUserFormContent from '../views/TheUserFormContent.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/questions', 
    name: 'questions-content',
    component: TheQuestionsContent
  },
  {
    path: '/user-form',
    name: 'user-form',
    component: TheUserFormContent
  },
  {
    path: '/todos', 
    name: 'todos-content',
    component: TheTodosContent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
