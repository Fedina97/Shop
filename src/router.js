import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/views/HomePage.vue';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: HomePage
        },
        {
            path: '/catalog',
            component: () =>
                import('@/views/CatalogPage.vue')
        },
        {
            path: '/registration',
            component: () =>
                import('@/views/RegistrationPage.vue')
        },
        {
            path: '/view',
            component: () =>
                import('@/views/ViewProductPage.vue')
        },
        {
            path: '/cart',
            component: () =>
                import('@/views/CartPage.vue')
        },
    ]
})