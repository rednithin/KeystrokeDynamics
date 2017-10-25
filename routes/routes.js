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
    AdminAuthPolicy.authenticate,
    AdminAuthController.login
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
  app.post(
    '/api/user/deleteuser',
    UserController.deleteUser
  )
}
