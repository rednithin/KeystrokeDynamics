const { Admin } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (admin) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(admin, config.AUTH.JWTSECRET, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      await Admin.create(req.body)
      res.json({
        output: 'All Okay.'
      })
    } catch (err) {
      console.log(err)
      res.status(400).json({
        error: 'This email account is already in use.'
      })
    }
  },
  async login (req, res) {
    console.log(JSON.stringify(req.body, undefined, 2))
    try {
      const { email, password } = req.body
      const admin = await Admin.findOne({
        where: {
          email
        }
      })
      if (!admin) {
        res.status(403).json({
          error: 'Login information was incorrect.'
        })
      }

      const isPasswordValid = await admin.comparePassword(password)
      if (!isPasswordValid) {
        res.status(403).json({
          error: 'Login information was incorrect.'
        })
      }

      const adminJSON = admin.toJSON()
      res.status(200).json({
        admin: adminJSON,
        token: jwtSignUser(adminJSON)
      })
    } catch (err) {
      console.log(err)
      res.status(500).json({
        error: 'Error has occured trying to login.'
      })
    }
  }
}
