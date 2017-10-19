const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')

const db = {}

const sequelize = new Sequelize(
  config.DB.DATABASE,
  config.DB.USER,
  config.DB.PASSWORD,
  config.DB.OPTIONS
)

fs
  .readdirSync(__dirname)
  .filter(file => {
    return file !== 'index.js' && file !== 'README.md'
  })
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
