const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')

const db = {}
let sequelize = null
if (config.ENV === 'production') {
  sequelize = new Sequelize(
    'postgres://splfjjjo:GRY98xi8ZOg8l4eAeik5rk29UEOjAlDd@horton.elephantsql.com:5432/splfjjjo'
  )
} else {
  sequelize = new Sequelize(
    config.DB.DATABASE,
    config.DB.USER,
    config.DB.PASSWORD,
    config.DB.OPTIONS
  )
}
fs
  .readdirSync(__dirname)
  .filter(file => {
    return file !== 'index.js' && file !== 'README.md'
  })
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
