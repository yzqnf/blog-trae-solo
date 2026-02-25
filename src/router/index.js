import { createRouter, createWebHistory } from 'vue-router'

// 定义路由 - 使用动态导入拆分代码块
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/articles',
    name: 'Articles',
    component: () => import('../views/Articles.vue')
  },
  {
    path: '/article/:id',
    name: 'ArticleDetail',
    component: () => import('../views/ArticleDetail.vue'),
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
