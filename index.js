const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config/config')
const { sequelize } = require('./models')
const { Admin } = require('./models')
const { User } = require('./models')

const app = express()
app.use(bodyParser.json())

require('./routes/routes.js')(app)

if (config.ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/dist'))

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path')
  console.log(path)
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
  })
}

sequelize.sync().then(() => {
  app.listen(config.PORT)
})
