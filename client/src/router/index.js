import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UserLogin from '@/components/User/Login'
import AdminLogin from '@/components/Admin/Login'
import AdminRegister from '@/components/Admin/Register'
import UserRegister from '@/components/User/Register'
import UserWall from '@/components/User/Wall'
import UserFollowingWall from '@/components/User/FollowingWall'
import UserFollowing from '@/components/User/Following'
import UserCreatePost from '@/components/User/CreatePost'
import UserFindUsers from '@/components/User/FindUsers'
import UserProfile from '@/components/User/Profile'
import UserViewProfile from '@/components/User/ViewProfile'
import AdminProfile from '@/components/Admin/Profile'
import AdminDeleteUsers from '@/components/Admin/DeleteUsers'

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
      path: '/admin/register',
      name: 'AdminRegister',
      component: AdminRegister
    },
    {
      path: '/user/register',
      name: 'UserRegister',
      component: UserRegister
    },
    {
      path: '/user/wall',
      name: 'UserWall',
      component: UserWall
    },
    {
      path: '/user/followingwall',
      name: 'UserFollowingWall',
      component: UserFollowingWall
    },
    {
      path: '/user/following',
      name: 'UserFollowing',
      component: UserFollowing
    },
    {
      path: '/user/createpost',
      name: 'UserCreatePost',
      component: UserCreatePost
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
      path: '/user/viewprofile/:userId',
      name: 'UserViewProfile',
      component: UserViewProfile
    },
    {
      path: '/admin/profile',
      name: 'AdminProfile',
      component: AdminProfile
    },
    {
      path: '/admin/deleteuser',
      name: 'AdminDeleteUsers',
      component: AdminDeleteUsers
    }
  ]
})
