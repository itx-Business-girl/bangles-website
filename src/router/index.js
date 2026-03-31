import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Shop from '../pages/Shop.vue'
import Contact from '../pages/Contact.vue'


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

  { name: 'Shop', 
    component: Shop ,
   path: '/shop',  
  },

  { name: 'Contact',
    component: Contact ,
   path: '/contact',
  },

]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router