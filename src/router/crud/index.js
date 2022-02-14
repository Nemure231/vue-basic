import {createRouter, createWebHistory}  from 'vue-router'

import Read from '/src/components/crud/read.vue'

const routes = [
    { 
        path: '/read',
        name: 'Read', 
        component: Read
    },
];


const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router;