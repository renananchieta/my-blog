// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/sobre',
        name: 'Sobre o Autor',
        component: () => import('@/views/FirstPageView.vue'),
      },
      {
        path: '/',
        name: 'Postagens',
        component: () => import('@/views/IndexView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
