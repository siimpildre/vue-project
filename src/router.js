import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'homepage',
        component: () => import('./Pages/Welcome.vue'),
    },
    {
        path: '/products',
        name: 'products',
        component: () => import('./Pages/Products.vue'),
        children: [
            {
                path: ':id',
                name: 'product',
                component: () => import('./Pages/Product.vue'),
            }
        ]
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})