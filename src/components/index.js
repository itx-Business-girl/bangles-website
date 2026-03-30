import { createRouter, createWebHistory } from 'vue-router'

import Home from './Home.vue'
import About from './About.vue'
import Shop from './Shop.vue'
import Contact from './Contact.vue'


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