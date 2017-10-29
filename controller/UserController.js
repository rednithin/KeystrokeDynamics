const { Post, User, Following, Report } = require('../models')

module.exports = {
  async getUserName (req, res) {
    try {
      const user = await User.findOne({
        where: {
          id: req.body.id
        },
        attributes: ['name']
      })
      res.json(user)
    } catch (err) {
      res.status(500).json({
        error: 'An error has occured while trying to fetch name of user.'
      })
    }
  },
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
      await Post.destroy({
        where: {
          UserId: req.body.id
        }
      })
      await Following.destroy({
        where: {
          UserId: req.body.id
        }
      })
      await Following.destroy({
        where: {
          FollowingId: req.body.id
        }
      })
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
  },
  async followUser (req, res) {
    try {
      let tuple = await Following.findOne({
        where: {
          UserId: req.body.UserId,
          FollowingId: req.body.FollowingId
        }
      })
      console.log('TUPLE: ' + JSON.stringify(tuple, undefined, 2))
      if (tuple) {
        res.status(200).json({ output: 'Already followed.' })
      } else {
        await Following.create(req.body)
        res.status(200).json({ output: 'Added to Following List.' })
      }
    } catch (err) {
      res.status(500).json({
        error: 'An error has occured while trying follow a user.'
      })
    }
  },
  async getFollowing (req, res) {
    console.log('LOL')
    try {
      let list = await Following.findAll({
        where: {
          UserId: req.body.id
        }
      })
      console.log(JSON.stringify('LIST' + list))
      res.json(list)
    } catch (err) {
      res.status(500).json({
        error: 'An error has occured while trying follow a user.'
      })
    }
  },
  async unfollowUser (req, res) {
    try {
      await Following.destroy({
        where: {
          UserId: req.body.UserId,
          FollowingId: req.body.FollowingId
        }
      })
      res.json({ output: 'Removed from Following List.' })
    } catch (err) {
      res.status(500).json({
        error: 'An error has occured while trying unfollow a user.'
      })
    }
  },
  async reportUser (req, res) {
    try {
      let tuple = await Report.findOne({
        where: {
          UserId: req.body.UserId,
          ReportedId: req.body.ReportedId
        }
      })
      console.log('TUPLE: ' + JSON.stringify(tuple, undefined, 2))
      if (tuple) {
        res.status(200).json({ output: 'Already Reported' })
      } else {
        await Report.create(req.body)
        res.status(200).json({ output: 'Added to Reported List.' })
      }
    } catch (err) {
      res.status(500).json({
        error: 'An error has occured while trying follow a user.'
      })
    }
  }
}
