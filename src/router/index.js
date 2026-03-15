import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import ContactView from '../views/ContactView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue'
import TeamDetailView from '../views/TeamDetailView.vue'
import PortfolioView from '@/views/PortfolioView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about-us', component: AboutUsView },
  { path: '/contact', component: ContactView },
  { path : '/portfolio', name: 'Portfolio', component: PortfolioView },
  { path: '/portfolio/:slug', name: 'ProjectDetail', component: ProjectDetailView },
  { path: '/team/:slug', name: 'TeamDetail', component: TeamDetailView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router