const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const tappy = require('tappy')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.AUTH.JWTSECRET, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJSON = user.toJSON()
      res.send({
        user: userJSON,
        token: jwtSignUser(userJSON)
      })
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }
  },
  async login (req, res) {
    console.log(JSON.stringify(req.body, undefined, 2))
    try {
      const { email, password, rhythm } = req.body
      const user = await User.findOne({
        where: {
          email
        }
      })
      if (!user) {
        res.status(403).send({
          error: 'Login information was incorrect.'
        })
      }

      const isPasswordValid = await user.comparePassword(password)
      if (!isPasswordValid) {
        res.status(403).send({
          error: 'Login information was incorrect.'
        })
      }

      console.log('Rhythm' + rhythm)
      console.log('User Rhythm' + user.rhythm)
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

      const userJSON = user.toJSON()
      res.send({
        user: userJSON,
        token: jwtSignUser(userJSON)
      })
    } catch (err) {
      res.status(500).send({
        error: 'Error has occured trying to login.'
      })
    }
  }
}
