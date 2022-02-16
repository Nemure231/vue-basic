import { createRouter, createWebHistory } from 'vue-router'

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
import Emits from '/src/components/basic/Emits.vue'
import Slot from '/src/components/basic/Slot.vue'
import GlobalComponent from '/src/components/basic/GlobalComponent.vue'


import Home from '/src/components/Home.vue'
import Nav from '/src/components/Nav.vue'

const routes = [
    {
        path: "/",
        components: {
            Home,
            Nav
        },
        children: [
            { 
                path: "dec-render",
                components: {
                    DecRender
                }
            },
            {
                path: "props",
                components:{
                    Props
                } 
            },
            { 
                path: "method",
                components:{
                    Method 

                } 
            },
            { 
                path: "model", 
                components:{
                    Model 

                } 
            },
            { 
                path: "conditional", 
                components:{
                    Conditional 

                } 
            },
            { 
                path: "looping", 
                components:{
                    Looping

                } 
            },
            { 
                path: "lifecycle",
                components:{
                    Lifecycle

                } 
            },
            { 
                path: "computed",
                components:{
                    Computed

                } 
            },
            {
                path: "watcher",
                components:{
                    Watcher 

                } 
            },
            { 
                path: "dynamic-class",
                components:{
                    DynamicClass

                } 
            },
            { 
                path: "refs-emits", 
                components:{
                    Emits

                } 
            },
            { 
                path: "slot", 
                components:{
                    Slot

                } 
            },
            { 
                path: "global-component", 
                components:{
                    GlobalComponent
                } 
            },
        ]
    },
    
   
];


const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router;