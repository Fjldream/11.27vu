import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Manage from  '../views/index/manage'
Vue.use(VueRouter)

const routes = [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // },
    {
        path: '/',
        name: 'Index',
        component: () => import('@/views/Index.vue'),
        children:[
            {   path: 'manage',
                name:'Manage',
                component:Manage
            }

        ]
    },
    {
        path: '/page',
        name: 'Page',
        component: () => import('@/views/page.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router

