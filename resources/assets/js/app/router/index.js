import VueRouter from 'vue-router'
import Vue from 'vue'

import example from './../components/Example'

Vue.use(VueRouter);
export  default new VueRouter({
    routes:[
        {
            path:'/',
            name:'index',
            component:example,
        }
    ]
});

