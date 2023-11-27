import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "daniel" */ '../views/LoginView.vue')
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import(/* webpackChunkName: "daniel" */ '../views/ResetPasswordView.vue')
  },
  {
    path: '/register-user',
    name: 'register-user',
    component: () => import(/* webpackChunkName: "daniel" */ '../views/RegisterUserView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "daniel" */ '../views/HomeView.vue')
  },
  {
    path: '/product-detail',
    name: 'product-detail',
    component: () => import(/* webpackChunkName: "daniel" */ '../views/ProductDetailView.vue')
  },
  {
    path: '/cadastro-produto',
    name: 'cadastro-produto',
    component: () => import(/* webpackChunkName: "daniel" */ '../views/CadastroProdutoView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
