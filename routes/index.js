import Vue from '../lib/vue.js';
import VueRouter from '../lib/vue-router.js';
import HelloWorld from '../view/HelloWorld.js';
import Max from '../view/Max.js';

Vue.use(VueRouter);


const routes = [
    {
        path : '/',
        name : 'hello',
        component : HelloWorld
    },
    {
        path : '/max',
        name : 'max',
        component : Max
    }
]

const router = new VueRouter({
    routes
})

export default router;