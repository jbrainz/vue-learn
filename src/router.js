import { createRouter, createWebHistory } from 'vue-router'
import DcHeroes from './pages/DcHeroes'
import Home from './pages/Home'
import Calendar from './pages/Calendar'
import Markdown from './pages/Markdown'
import Slider from './pages/Slider'

const routes = [
  { path: '/', component: Home },
  { path: '/dc-heros', component: DcHeroes },
  { path: '/calender', component: Calendar },
  { path: '/markdown', component: Markdown },
  { path: '/slider', component: Slider },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
