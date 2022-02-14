import {createRouter, createWebHistory}  from 'vue-router'

import DecRender from '/src/components/basic/DeclarativeRendering.vue'
import Props from '/src/components/basic/Props.vue'
import Method from '/src/components/basic/Method.vue'
import Model from '/src/components/basic/Model.vue'
import Conditional from '/src/components/basic/Conditional.vue'
import Looping from '/src/components/basic/Looping.vue'
import Lifecycle from '/src/components/basic/Lifecycle.vue'
import Computed from '/src/components/basic/Computed.vue'
import Watcher from '/src/components/basic/Watcher.vue'
import DynamicClass from '/src/components/basic/DynamicClass.vue'


const routes = [
    { 
        path: '/dec-render',
        name: 'DecRender',
        component: DecRender
    },
    { 
        path: '/props',
        name: 'Props', 
        component: Props
    },
    { 
        path: '/method',
        name: 'Method',
        component: Method
    },
    { 
        path: '/model',
        name: 'Model', 
        component: Model
    },
    { 
        path: '/conditional',
        name: 'Conditional',
        component: Conditional
    },
    { 
        path: '/looping',
        name: 'Looping', 
        component: Looping
    },
    { 
        path: '/lifecycle',
        name: 'Lifecycle', 
        component: Lifecycle
    },
    { 
        path: '/computed',
        name: 'Computed', 
        component: Computed
    },
    { 
        path: '/watcher',
        name: 'Watcher', 
        component: Watcher
    },
    { 
        path: '/dynamic-class',
        name: 'Dynamic Class', 
        component: DynamicClass
    }
];


const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router;