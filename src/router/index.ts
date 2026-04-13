import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Products from '../pages/Products.vue'
import Contact from '../pages/Contact.vue'
import Privacy from '@/pages/Privacy.vue'
import Terms from '@/pages/Terms.vue'
import ReturnPolicy from '@/pages/ReturnPolicy.vue'


const routes = [
  {
     name: 'Home',
    component: Home,
     path: '/',
    
  },

  { name: 'About',
     component: About,
     path: '/about',
  },

  { name: 'Products', 
    component: Products ,
   path: '/products',  
  },

  { name: 'Contact',
    component: Contact ,
   path: '/contact',
  },
  
  { path: '/privacy', component: Privacy},
  { path: '/terms', component: Terms },
  { path: '/return', component: ReturnPolicy },

]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router