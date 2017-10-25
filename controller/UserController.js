const {Post} = require('../models')
const {User} = require('../models')
const Op = require('sequelize').Op

module.exports = {
  async getWall (req, res) {
    try {
      const posts = await Post.findAll({
        where: {}
      })
      res.json(posts)
    } catch (err) {
      res.status(500).json({
        error: 'An error has occured while trying to fetch Posts.'
      })
    }
  },
  async createPost (req, res) {
    try {
      const post = await Post.create(req.body)
      res.json(post)
    } catch (err) {
      res.status(500).json({
        error: 'An error has occured while trying create a post'
      })
    }
  },
  async getUsers (req, res) {
    try {
      let users = null
      if (req.body.id != null) {
        users = await User.findOne({
          where: {
            id: req.body.id
          }
        })
      } else if (req.body.name === '') {
        users = await User.findAll({
          limit: 10
        })
      } else {
        users = await User.findAll({
          where: {
            name: {
              $like: '%' + req.body.name + '%'
            }
          }
        })
      }
      res.json(users)
    } catch (err) {
      res.status(500).json({
        error: 'An error has occured while trying to fetch Users.'
      })
    }
  },
  async deleteUser (req, res) {
    console.log(JSON.stringify(req.body.id))
    try {
      await User.destroy({
        where: {
          id: req.body.id
        }
      })
      res.send('All okay.')
    } catch (err) {
      res.status(500).json({
        error: 'An error has occured while trying to delete a User.'
      })
    }
  }
}
