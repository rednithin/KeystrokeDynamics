const { sequelize, Sequelize } = require('../models')

module.exports = {
  // async getUserName (req, res) {
  //   try {
  //     const user = await User.findOne({
  //       where: {
  //         id: req.body.id
  //       },
  //       attributes: ['name']
  //     })
  //     res.json(user)
  //   } catch (err) {
  //     res.status(500).json({
  //       error: 'An error has occured while trying to fetch name of user.'
  //     })
  //   }
  // },
  async getWall (req, res) {
    try {
      let posts = await sequelize.query(
        'SELECT post.*,user.name as author from Posts post, Users user where post.UserId=user.id;',
        { type: Sequelize.QueryTypes.SELECT }
      )
      posts = posts.reverse()
      res.json(posts)
    } catch (err) {
      res.status(500).json({
        error: 'An error has occured while trying to fetch Posts.'
      })
    }
  },
  async createPost (req, res) {
    try {
      await sequelize.query(
        'INSERT INTO Posts ' +
          "VALUES (DEFAULT,'{0}','{1}',DEFAULT,DEFAULT,{2});"
            .replace('{0}', req.body.title)
            .replace('{1}', req.body.description)
            .replace('{2}', req.body.UserId)
      )
      res.json({
        output: 'Post created.'
      })
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
        users = await sequelize.query(
          'SELECT * from Users where id=' + req.body.id + ';',
          { type: Sequelize.QueryTypes.SELECT }
        )
        users = users[0]
      } else if (req.body.name === '') {
        users = await sequelize.query('SELECT * from Users limit 10;', {
          type: Sequelize.QueryTypes.SELECT
        })
      } else {
        users = await sequelize.query(
          "SELECT * from Users user where user.name like '%" +
            req.body.name +
            "%' limit 10;",
          { type: Sequelize.QueryTypes.SELECT }
        )
      }
      res.json(users)
    } catch (err) {
      res.status(500).json({
        error: 'An error has occured while trying to fetch Users.'
      })
    }
  },
  async deleteUser (req, res) {
    try {
      await sequelize.query('Delete from Users where id=' + req.body.id + ';')
      res.send('All okay.')
    } catch (err) {
      res.status(500).json({
        error: 'An error has occured while trying to delete a User.'
      })
    }
  },
  async followUser (req, res) {
    try {
      let tuples = await sequelize.query(
        'SELECT * from Followings where UserId={0} and FollowingId={1};'
          .replace('{0}', req.body.UserId)
          .replace('{1}', req.body.FollowingId),
        { type: Sequelize.QueryTypes.SELECT }
      )
      if (tuples.length !== 0) {
        res.status(200).json({ output: 'Already followed.' })
      } else {
        await sequelize.query(
          'INSERT INTO Followings ' +
            'VALUES (DEFAULT,DEFAULT,DEFAULT,{0},{1});'
              .replace('{0}', req.body.UserId)
              .replace('{1}', req.body.FollowingId)
        )
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
      let list = await sequelize.query(
        'SELECT Followings.*,Users.name as name from Followings,Users where UserId={0} and Followings.FollowingId=Users.id;'.replace(
          '{0}',
          req.body.id
        ),
        { type: Sequelize.QueryTypes.SELECT }
      )
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
      await sequelize.query(
        'DELETE from Followings where UserId={0} and FollowingId={1};'
          .replace('{0}', req.body.UserId)
          .replace('{1}', req.body.FollowingId)
      )
      res.json({ output: 'Removed from Following List.' })
    } catch (err) {
      res.status(500).json({
        error: 'An error has occured while trying unfollow a user.'
      })
    }
  },
  async reportUser (req, res) {
    try {
      let tuples = await sequelize.query(
        'SELECT * from Reports where UserId={0} and ReportedId={1};'
          .replace('{0}', req.body.UserId)
          .replace('{1}', req.body.ReportedId),
        { type: Sequelize.QueryTypes.SELECT }
      )
      if (tuples.length !== 0) {
        res.status(200).json({ output: 'Already Reported' })
      } else {
        await sequelize.query(
          'INSERT INTO Reports ' +
            'VALUES (DEFAULT,DEFAULT,DEFAULT,{0},{1});'
              .replace('{0}', req.body.UserId)
              .replace('{1}', req.body.ReportedId)
        )
        res.status(200).json({ output: 'Added to Reported List.' })
      }
    } catch (err) {
      res.status(500).json({
        error: 'An error has occured while trying follow a user.'
      })
    }
  },
  async getReports (req, res) {
    console.log('HAHA')
    try {
      let users = null
      if (req.body.name === '') {
        users = await sequelize.query('SELECT Users.id,name,count(ReportedID) as reports from Users left join Reports on Users.id = Reports.ReportedId group by Users.id limit 10;', {
          type: Sequelize.QueryTypes.SELECT
        })
      } else {
        users = await sequelize.query(
          "SELECT Users.id,name,count(ReportedID) as reports from Users left join Reports on Users.id = Reports.ReportedId where Users.name like '%{0}%' group by Users.id limit 10;"
            .replace('{0}', req.body.name),
          { type: Sequelize.QueryTypes.SELECT }
        )
      }
      res.json(users)
    } catch (err) {
      res.status(500).json({
        error: 'An error has occured while trying to count reports.'
      })
    }
  }
}
