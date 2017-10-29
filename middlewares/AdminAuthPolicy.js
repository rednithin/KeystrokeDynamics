const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      name: Joi.string().regex(new RegExp('^..*$')),
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp('^.{8,32}$'))
    }
    const { error, value } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'name':
          res.status(400).send({
            error: 'Not valid Name'
          })
          break
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
  },
  login (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp('^.{8,32}$'))
    }
    const { error, value } = Joi.validate(req.body, schema)

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
