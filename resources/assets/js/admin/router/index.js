import Vue from 'vue'
import VueRouter from 'vue-router'
import Example from './../components/ExampleComponent'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[

        {
            path:'/',
            component:Example
        }

    ]
})