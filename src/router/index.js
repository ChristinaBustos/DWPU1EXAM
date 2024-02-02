import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        redirect:'/incio'
    },
    {
        path:'/',
        component:{
            render(c){
                return c('router-view');
            },
        },
        children:[
            {
                path:'/inicio',
                name:'inicio',
                component: () => import('../components/Inicio.vue')
            },
            {
                path:'/from',
                name:'from',
                component: () => import('../components/From.vue')
            },{
                path:'/info',
                name:'info',
                component: () => import('../components/Datos.vue')
            },
        ]
    }
]

const router = new VueRouter({routes,});
export default router;