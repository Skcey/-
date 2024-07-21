import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout/Index.vue'
import Login from '@/views/login/Index.vue'
import Home from '@/views/home/Home.vue'
import Approval from '@/views/approval/Index.vue'
import Approval1 from '@/views/approval/Index1.vue'
import Approval2 from '@/views/approval/Index2.vue'
import ApprovalFile from '@/views/approval/ToApprovalFile.vue'
import Introduction from '@/views/introduction/Index.vue'
import User from '@/views/user/Index.vue'
import Application from '@/views/myApplication/Index.vue'
import Log from '@/views/log/Index.vue'

const Product =()=>import('@/views/products/Index.vue')
const List =()=>import('@/views/products/list/Index.vue')
const Category =()=>import('@/views/products/category/Index.vue')

const Order =()=>import('@/views/order/Index.vue')
const OrderList =()=>import('@/views/order/list/Index.vue')
const Collect =()=>import('@/views/order/collect/Index.vue')

const Advert =()=>import('@/views/advertise/Index.vue')
const AdvertList =()=>import('@/views/advertise/list/Index.vue')

Vue.use(VueRouter)

//定义路由，创建路由列表
const routes =[
  {
    path:'/',
    component:Layout,
    children:[
      {
        path:'/',
        name:'home',
        component:Home
      },{
        path:'/approval',
        name:'approval',
        component:Approval,
      },{
        path:'/approval1',
        name:'approval1',
        component:Approval1,
      },{
        path:'/approval2',
        name:'approval2',
        component:Approval2,
      },{
        path:'/ToApproval',
        name:'ToApproval',
        component:ApprovalFile
      },{
        path:'/myApplication',
        name:'myApplication',
        component:Application
      },{
        path:'/log',
        name:'log',
        component:Log
      },{
        path:'/user',
        name:'user',
        component:User
      },{
        path:'/introduction',
        name:'introduction',
        component:Introduction
      },{
        path:'/products',
        name:'products',
        component:Product,
        children:[
          {
            path:'list',//访问路径：/products/list
            name:'list',
            component:List
          },
          {
            path:'category',//访问路径：/products/list
            name:'category',
            component:Category
          }
        ]
      },{
        path:'/order',
        name:'order',
        component:Order,
        children:[
          {
            path:'order-list',//访问路径：/products/list
            name:'order-list',
            component:OrderList
          },
          {
            path:'collect',
            name:'collect',
            component:Collect
          }
        ]
      },{
        path:'/advert',
        name:'advert',
        component:Advert,
        children:[
          {
            path:'advert-list',
            name:'advert-list',
            component:AdvertList
          }
        ]
      }
    ]
  },{
    path:'/login',
    name:'login',
    component:Login
  }
]

//根据路由列表创建路由router对象
const router = new VueRouter({
    mode:'history',
    base:process.env.BASE_URL,
    routes
})

//导出路由对象
export default router