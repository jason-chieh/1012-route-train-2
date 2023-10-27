import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/HeaderView',
      name: 'HeaderView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HeaderView.vue')
    },
    {
      path: '/TrainView',
      name: 'TrainView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TrainView.vue')
    },
    {
      path: '/vfor',
      name: 'vfor',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/vfor.vue')
    },
    {
      path: '/trainDesign',
      name: 'trainDesign',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/trainDesign.vue')
    },
    {
      path: '/trainDesign2',
      name: 'trainDesign2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/trainDesign2.vue')
    },
    {
      path: '/von',
      name: 'von',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/von.vue')
    },
    {
      path: '/guessnumber',
      name: 'guessnumber',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/guessnumber.vue')
    },
    {
      path: '/cakeView',
      name: 'cakeView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/cakeView.vue')
    },
    {
      path: '/vbind',
      name: 'vbind',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/vbind.vue')
    },
    {
      path: '/pinterest',
      name: 'pinterest',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/pinterest.vue')
    },
    {
      path: '/v-if-v-show',
      name: 'v-if-v-show',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/v-if-v-show.vue')
    },
    {
      path: '/RouterPush',
      name: 'RouterPush',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RouterPush.vue')
    },
    {
      path: '/props',
      name: 'props',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/props.vue')
    },
    {
      path: '/propschild',
      name: 'propschild',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/propschild.vue')
    },
    {
      path: '/props2',
      name: 'props2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/props2.vue')
    },
    {
      path: '/1018train',
      name: '1018train',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/1018train.vue')
    },
    {
      path: '/1018train2',
      name: '1018train2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/1018train2.vue')
    },
    {
      path: '/emit',
      name: 'emit',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/emit.vue')
    },    
    {
      path: '/emit2',
      name: 'emit2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/emit2.vue')
    },
    {
      path: '/provideAndInject',
      name: 'provideAndInject',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/provideAndInject.vue')
    },
    {
      path: '/provide1',
      name: 'provide1',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/provide1.vue')
    },
    {
      path: '/provide2',
      name: 'provide2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/provide2.vue')
    },
    {
      path: '/watchcompute',
      name: 'watchcompute',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/watchcompute.vue')
    },
    {
      path: '/piniaTest',
      name: 'piniaTest',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/piniaTest.vue')
    },
    {
      path: '/piniatttttttttt',
      name: 'piniatttttttttt',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/piniatttttttttt.vue')
    },
  ]
})

export default router
