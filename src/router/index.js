import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Manage from  '../views/index/manage'
import longForecast from '../views/page/longForecast'
import StatisAnalyze from "@/views/page/StatisAnalyze";
Vue.use(VueRouter)

const routes = [
    // {
    //   path: '/',
    //   name: 'Home',
    //   components: Home
    // },
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   components: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
        component: () => import('@/views/page.vue'),
        children:[
            {
                path:'/longForecast',
                name:'longForecast',
                component:longForecast
            },
            {
                path:'/StatisAnalyze',
                name:'StatisAnalyze',
                component:StatisAnalyze
            }
        ]
    },
    {
        path: '/displayPlatform',
        name:'DisplayPlatform',
        component:()=>import('@/views/ProductionAnalyzeDisplay/ProductionAnalyzeDisplayPlatform')
    }
]

const router = new VueRouter({
    routes
})

export default router

