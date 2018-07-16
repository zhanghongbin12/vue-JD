import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import detail from '../components/detail'
import search from '../components/search'
import product from '../components/product'
import user from '../components/user'
import shop from '../components/shop'
import discover from '../components/discover'

import 'swiper/dist/css/swiper.css';
Vue.use(Router)

export default new Router({
    routes: [
        {
             path: '/', redirect: 'index' 
        },
        {
            path: '/index',
            name: 'index',
            component: index,
            beforeEnter:function(to, from , next) {
                if( document.getElementsByClassName("foot").length>0){
                document.getElementsByClassName("foot")[0].style.display='flex';
                }
                next();
            }
        },
        {
            path: '/detail',
            name: 'detail',
            component: detail,
            beforeEnter:function(to, from , next) {
                if( document.getElementsByClassName("foot").length>0){
                document.getElementsByClassName("foot")[0].style.display='none';
                }
                next();
            }
        },
        {
            path: '/product',
            name: 'product',
            component: product,
            beforeEnter:function(to, from , next) {
                if( document.getElementsByClassName("foot").length>0){
                document.getElementsByClassName("foot")[0].style.display='flex';
                }
                next();
            }
        },
        {
            path: '/user',
            name: 'user',
            component: user,
            beforeEnter:function(to, from , next) {
                if( document.getElementsByClassName("foot").length>0){
                document.getElementsByClassName("foot")[0].style.display='flex';
                }
                next();
            }
        },
        {
            path: '/discover',
            name: 'discover',
            component: discover,
            beforeEnter:function(to, from , next) {
                if( document.getElementsByClassName("foot").length>0){
                document.getElementsByClassName("foot")[0].style.display='flex';
                }
                next();
            }
        },
        {
            path: '/shop',
            name: 'shop',
            component: shop,
            beforeEnter:function(to, from , next) {
                if( document.getElementsByClassName("foot").length>0){
                document.getElementsByClassName("foot")[0].style.display='none';
                }
                next();
            }
        },
        {
            path: '/search',
            name: 'search',
            component: search
        }

  ]
})
