import Vue from '../lib/vue.js';
import VueRouter from '../lib/vue-router.js';
import Pokedex from '../view/Pokedex.js';



Vue.use(VueRouter);


const routes = [
    {
        path : '/',
        name : 'pokedex',
        component : Pokedex
    },
]

const router = new VueRouter({
    routes
})

export default router;