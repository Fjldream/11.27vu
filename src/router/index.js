import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('@/views/Index.vue'),
        children:[
            {   path: 'manage',
                name:'Manage',
                component:()=>import('@/views/index/manage')
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
                component:()=>import('@/views/page/longForecast'),

            },
            {
                path:'/StatisAnalyze',
                name:'StatisAnalyze',
                component:()=>import('@/views/page/StatisAnalyze'),
                meta:{
                    title:'统计分析'
                }
            }
        ]
    },
    {
        path: '/displayPlatform',
        name:'DisplayPlatform',
        component:()=>import('@/views/ProductionAnalyzeDisplay/ProductionAnalyzeDisplayPlatform'),
        meta:{
            title:'高分辨率模式产品分析展示平台'
        }
    }
]


const router = new VueRouter({
    routes
})

export default router

