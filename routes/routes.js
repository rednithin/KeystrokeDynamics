const AuthenticationController = require('../controller/AuthenticationController')
const AuthenticationControllerPolicy = require('../middlewares/AuthenticationControllerPolicy')

module.exports = app => {
  app.post(
    '/api/register',
    AuthenticationControllerPolicy.authenticate,
    AuthenticationController.register
  )
  app.post(
    '/api/login',
    AuthenticationControllerPolicy.authenticate,
    AuthenticationController.login
  )
}
