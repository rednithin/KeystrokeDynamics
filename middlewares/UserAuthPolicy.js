const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      name: Joi.string().regex(new RegExp('^.{1,50}$')),
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp('^.{8,32}$')),
      rhythm: Joi.string(),
      phone: Joi.string().regex(new RegExp('^[0-9]{10}$')),
      gender: Joi.string(),
      age: Joi.string().regex(new RegExp('^[-]{0,1}[0-9]{1,3}$')),
      status: Joi.string(),
      objective: Joi.string()
    }
    const { error } = Joi.validate(req.body, schema)
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Not valid email.'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Password must be 8 to 32 characters.'
          })
          break
        case 'phone':
          res.status(400).send({
            error: 'Phone is invalid.'
          })
          break
        case 'age':
          res.status(400).send({
            error: 'Age is invalid.'
          })
          break
        default:
          res.status(400).send({
            error: 'Something is invalid.'
          })
          break
      }
    } else {
      next()
    }
  },
  login (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp('^.{8,32}$')),
      rhythm: Joi.string()
    }
    const { error } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Not valid email'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Password must be 8 to 32 characters'
          })
          break
      }
    } else {
      next()
    }
  }
}
