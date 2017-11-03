const jwt = require('jsonwebtoken')
const config = require('../config/config')
const tappy = require('tappy')
const { sequelize, Sequelize } = require('../models')
const bcrypt = require('bcrypt-nodejs')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.AUTH.JWTSECRET, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      let users = await sequelize.query(
        "SELECT * from Users where email='" + req.body.email + "';",
        { type: Sequelize.QueryTypes.SELECT }
      )
      if (users.length !== 0) {
        throw new Error()
      }
      await sequelize.query(
        'INSERT INTO `Users` (`id`,`name`,`email`,`password`,`rhythm`,`phone`,`gender`,`age`,`status`,`objective`,`createdAt`,`updatedAt`) ' +
          "VALUES (DEFAULT,'{0}','{1}','{2}','{3}','{4}','{5}','{6}','{7}','{8}',DEFAULT,DEFAULT);"
            .replace('{0}', req.body.name)
            .replace('{1}', req.body.email)
            .replace('{2}', bcrypt.hashSync(req.body.password))
            .replace('{3}', req.body.rhythm)
            .replace('{4}', req.body.phone)
            .replace('{5}', req.body.gender)
            .replace('{6}', req.body.age)
            .replace('{7}', req.body.status)
            .replace('{8}', req.body.objective)
      )
      users = await sequelize.query(
        "SELECT * from Users where email='" + req.body.email + "';",
        { type: Sequelize.QueryTypes.SELECT }
      )
      let user = users[0]
      res.send({
        user: user,
        token: jwtSignUser(user)
      })
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }
  },
  async login (req, res) {
    try {
      const { email, password, rhythm } = req.body
      const users = await sequelize.query(
        "SELECT * from Users where email='" + email + "';",
        { type: Sequelize.QueryTypes.SELECT }
      )
      if (users.length === 0) {
        res.status(403).send({
          error: 'Login information was incorrect.'
        })
      }
      let user = users[0]

      const isPasswordValid = await bcrypt.compareSync(password, user.password)
      console.log('IS PASSWORD VALID' + isPasswordValid)
      if (!isPasswordValid) {
        res.status(403).send({
          error: 'Login information was incorrect.'
        })
      }

      let inputRhythm = new tappy.Rhythm(JSON.parse(rhythm))
      let storedRhytm = new tappy.Rhythm(JSON.parse(user.rhythm))

      if (storedRhytm.length !== inputRhythm.length) {
        res.status(403).send({
          error: 'Rhythm didnt match.'
        })
      }
      let similarity = tappy.compare(storedRhytm, inputRhythm, true) * 100
      console.log('Similarity' + similarity)
      if (similarity < 70.0) {
        res.status(403).send({
          error: 'Rhythm didnt match.'
        })
      }

      res.status(200).json({
        user: user,
        token: jwtSignUser(user)
      })
    } catch (err) {
      res.status(500).send({
        error: 'Error has occured trying to login.'
      })
    }
  }
}
