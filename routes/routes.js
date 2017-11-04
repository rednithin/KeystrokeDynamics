const UserAuthController = require('../controller/UserAuthController')
const UserAuthPolicy = require('../middlewares/UserAuthPolicy')
const AdminAuthController = require('../controller/AdminAuthController')
const AdminAuthPolicy = require('../middlewares/AdminAuthPolicy')
const UserController = require('../controller/UserController')

module.exports = app => {
  app.post(
    '/api/user/register',
    UserAuthPolicy.register,
    UserAuthController.register
  )
  app.post(
    '/api/user/login',
    UserAuthPolicy.login,
    UserAuthController.login
  )
  app.post(
    '/api/admin/login',
    AdminAuthPolicy.login,
    AdminAuthController.login
  )
  app.post(
    '/api/admin/register',
    AdminAuthPolicy.register,
    AdminAuthController.register
  )
  app.get(
    '/api/user/getwall',
    UserController.getWall
  )
  app.post(
    '/api/user/createpost',
    UserController.createPost
  )
  app.post(
    '/api/user/getusers',
    UserController.getUsers
  )
  // app.post(
  //   '/api/user/getusername',
  //   UserController.getUserName
  // )
  app.post(
    '/api/user/deleteuser',
    UserController.deleteUser
  )
  app.post(
    '/api/user/followuser',
    UserController.followUser
  )
  app.post(
    '/api/user/unfollowuser',
    UserController.unfollowUser
  )
  app.post(
    '/api/user/getfollowing',
    UserController.getFollowing
  )
  app.post(
    '/api/user/reportuser',
    UserController.reportUser
  )
  app.post(
    '/api/user/getreports',
    UserController.getReports
  )
  app.get(
    '/api/user/countusers',
    UserController.countUsers
  )
  app.get(
    '/api/admin/countadmins',
    UserController.countAdmins
  )
}
