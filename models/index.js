const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')

const db = {}
let sequelize = new Sequelize(
  config.DB.DATABASE,
  config.DB.USER,
  config.DB.PASSWORD,
  config.DB.OPTIONS
)

db.sequelize = sequelize
db.Sequelize = Sequelize
let query = ''
if (config.ENV === 'production') {
  query = fs.readFileSync(path.join(__dirname, 'CommandsProduction.sql'), 'utf8')
} else {
  query = fs.readFileSync(path.join(__dirname, 'Commands.sql'), 'utf8')
}
db.sequelize.query(query).then(lol => {
  console.log('Done')
})

module.exports = db
