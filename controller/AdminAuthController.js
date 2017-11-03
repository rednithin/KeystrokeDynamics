const jwt = require('jsonwebtoken')
const config = require('../config/config')
const bcrypt = require('bcrypt-nodejs')
const { sequelize, Sequelize } = require('../models')

function jwtSignUser (admin) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(admin, config.AUTH.JWTSECRET, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      let admins = await sequelize.query(
        "SELECT * from Admins where email='" + req.body.email + "';",
        { type: Sequelize.QueryTypes.SELECT }
      )
      if (admins.length !== 0) {
        throw new Error()
      }
      await sequelize
        .query(
          'INSERT INTO `Admins` (`id`,`name`,`email`,`password`,`createdAt`,`updatedAt`) ' +
            "VALUES (DEFAULT,'{0}','{1}','{2}',DEFAULT,DEFAULT);"
              .replace('{0}', req.body.name)
              .replace('{1}', req.body.email)
              .replace('{2}', bcrypt.hashSync(req.body.password))
        )
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
      let admins = await sequelize.query(
        "select * from Admins where email='" + email + "';",
        { type: Sequelize.QueryTypes.SELECT }
      )
      let admin = admins[0]
      console.log(admin)

      if (!admin) {
        res.status(403).json({
          error: 'Login information was incorrect.'
        })
      }

      const isPasswordValid = await bcrypt.compareSync(password, admin.password)
      console.log(isPasswordValid)
      if (!isPasswordValid) {
        res.status(403).json({
          error: 'Login information was incorrect.'
        })
      }

      res.status(200).json({
        admin: admin,
        token: jwtSignUser(admin)
      })
    } catch (err) {
      console.log(err)
      res.status(500).json({
        error: 'Error has occured trying to login.'
      })
    }
  }
}
