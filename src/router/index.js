import { createRouter, createWebHistory } from 'vue-router'
import Catalog from "../views/Catalog.vue";
import Cart from "../views/Cart.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/',
      redirect: '/catalog'
    }
  ]
})

export default router