import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
    type:history,
    routes:[
        {
            path:'/',
            component:() => import('../pages/home/home.vue'),
            name:'home',
            redirect:'/user',
            children:[
                {
                    path:'user',
                    component:() => import('../pages/home/user/user.vue'),
                    name:'user',
                },{
                    path:'page1',
                    component:() => import('../pages/home/other/page1.vue'),
                    name:'page1',
                },{
                    path:'page2',
                    component:() => import('../pages/home/other/page2.vue'),
                    name:'page2',
                },{
                    path:'page3',
                    component:() => import('../pages/home/other/page3.vue'),
                    name:'page3',
                },{
                    path:'page4',
                    component:() => import('../pages/home/other/page4.vue'),
                    name:'page4',
                },{
                    path:'page5',
                    component:() => import('../pages/home/other/page5.vue'),
                    name:'page5',
                },{
                    path:'page6',
                    component:() => import('../pages/home/other/page6.vue'),
                    name:'page6',
                },{
                    path:'page7',
                    component:() => import('../pages/home/other/page7.vue'),
                    name:'page7',
                }
            ]
        },
        {
            path:'/login',
            component:() => import('../pages/login/login.vue'),
            name:'login'

        }

    ]
})