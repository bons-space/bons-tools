import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'layout',
        meta: {
            name: 'Home'
        },
        redirect: '/effect',
        component: () => import('@/views/layout/Index.vue'),
        children: [
            {
                path: 'effect',
                name: 'effect',
                meta: {
                    name: '效果'
                },
                redirect: '/effect/fullScreen',
                component: () => import('@/views/effect/Index.vue'),
                children:[
                    {
                        path: 'fullScreen',
                        name: 'fullScreen',
                        meta: {
                            name: '全屏效果'
                        },
                        component: () => import('@/views/effect/FullScreen.vue')
                    }
                ]
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
