import { ViteSSG } from 'vite-ssg'
import { createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import App from './App.vue'

export const createApp = ViteSSG(App,{
    base: '/',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About }
  ],
})