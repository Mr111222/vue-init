import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import HelloWorld from '@/components/HelloWorld'
const _import_ = file => () => import('../views/' + file + '.vue')


// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
   { 
        path: '/', 
        name:"首页",
        meta: { page: true},
        component: _import_('Layout/index'),
        redirect: '/home',
        children: [
            { path: 'home', component: _import_('Home/index'),name:"首页2"}
        ]
    },
    {
        path: "/hello",
        component: HelloWorld
    }
]

var router =  new VueRouter({
    routes
})
export default router;

