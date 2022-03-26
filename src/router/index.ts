import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Storage from '@/utils/storage'
import bus from '@/utils/bus';
import { ElMessage } from 'element-plus'
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    redirect: "/home/news",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/home.vue"),
    children: [
      {
        path: "news",
        name: "News",
        meta: {},
        component: () => import("../components/main/News/index.vue"),
      },
      {
        path: "product",
        name: "Product",
        meta: {},
        component: () => import("../components/main/product/index.vue"),
      },
      {
        path: "order",
        name: "Order",
        meta: {require:true},
        component: () => import("../components/order/index.vue"),
      },
      {
        path: "shoppingcart",
        name: "ShoppingCart",
        meta: {require:true},
        component: () => import("../components/order/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to,from,next)=>{
  if(to.meta.require==true){
     if(Storage.getCache('userInfo')=='' ||Storage.getCache('userInfo')==null){
       ElMessage({
         message: '请先登录~',
         type: 'warning',
        })
      setTimeout(()=>{
        bus.emit('openLogin',true)
      },500)
      return
     }
  }
  next()
})
export default router;
