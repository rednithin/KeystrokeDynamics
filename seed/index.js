const {
  sequelize,
  Admin,
  User,
  Post
} = require('../models')

const Promise = require('bluebird')
const users = require('./users.json')
const admins = require('./admins.json')
const posts = require('./posts.json')

sequelize.sync({force: true})
  .then(async function () {
    await Promise.all(
      users.map(user => {
        User.create(user)
      })
    )

    await Promise.all(
      admins.map(admin => {
        Admin.create(admin)
      })
    )

    await Promise.all(
      posts.map(post => {
        Post.create(post)
      })
    )
  })
