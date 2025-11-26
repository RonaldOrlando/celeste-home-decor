import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CatalogView from '@/views/CatalogView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/catalogo', name: 'catalogo', component: CatalogView },
    { path: '/acerca', name: 'acerca', component: AboutView },
    { path: '/contacto', name: 'contacto', component: ContactView },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
