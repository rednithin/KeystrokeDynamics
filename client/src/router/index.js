import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UserLogin from '@/components/User/Login'
import AdminLogin from '@/components/Admin/Login'
import UserRegister from '@/components/User/Register'
import UserFindUsers from '@/components/User/FindUsers'
import UserProfile from '@/components/User/Profile'
import AdminProfile from '@/components/Admin/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user/login',
      name: 'UserLogin',
      component: UserLogin
    },
    {
      path: '/admin/login',
      name: 'AdminLogin',
      component: AdminLogin
    },
    {
      path: '/user/register',
      name: 'UserRegister',
      component: UserRegister
    },
    {
      path: '/user/findusers',
      name: 'UserFindUsers',
      component: UserFindUsers
    },
    {
      path: '/user/profile',
      name: 'UserProfile',
      component: UserProfile
    },
    {
      path: '/admin/profile',
      name: 'AdminProfile',
      component: AdminProfile
    }
  ]
})
