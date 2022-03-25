import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        name: 'Home',
        path: '/',
        component: () => import('@/views/Home')
    },
    {
        name: 'About',
        path: '/about',
        component: () => import('@/views/About')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
