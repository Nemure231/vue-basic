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
import Refs from '/src/components/basic/Refs.vue'

import Nav from '/src/components/Nav.vue'

const routes = [
    { 
        path: '/dec-render',
        components: {
            DecRender,
            Nav
        }
    },
    { 
        path: '/props',
        components: {
            Props,
            Nav
        }
    },
    { 
        path: '/method',
        components: {
            Method,
            Nav
        }
    },
    { 
        path: '/model',
        components: {
            Model,
            Nav
        }
    },
    { 
        path: '/conditional',
        components: {
            Conditional,
            Nav
        }
    },
    { 
        path: '/looping',
        components: {
            Looping,
            Nav
        }
    },
    { 
        path: '/lifecycle',
        components: {
            Lifecycle,
            Nav
        }
    },
    { 
        path: '/computed',
        components: {
            Computed,
            Nav
        }
    },
    { 
        path: '/watcher',
        components: {
            Watcher,
            Nav
        }
    },
    { 
        path: '/dynamic-class',
        components: {
            DynamicClass,
            Nav
        }
    },
    { 
        path: '/refs',
        components: {
            Refs,
            Nav
        }
    }
];


const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router;