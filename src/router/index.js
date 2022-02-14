import {createRouter, createWebHistory}  from 'vue-router'

import DecRender from '../components/DeclarativeRendering.vue'
import Props from '../components/Props.vue'
import Method from '../components/Method.vue'
import Model from '../components/Model.vue'
import Conditional from '../components/Conditional.vue'
import Looping from '../components/Looping.vue'
import Lifecycle from '../components/Lifecycle.vue'
import Computed from '../components/Computed.vue'
import Watcher from '../components/Watcher.vue'
import DynamicClass from '../components/DynamicClass.vue'


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
    },
];


const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router;