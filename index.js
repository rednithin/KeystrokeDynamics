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

sequelize.sync({force: true}).then(() => {
  User.create({name: 'Nithin Reddy', email: 'a@a', password: '528751011', rhythm: '{"length":3,"duration":583.4300000000003,"_taps":[335.72500000000036,247.70499999999993],"_weight":1}'})
  Admin.create({name: 'Nithin Reddy', email: 'red@gmail.com', password: '528751011'})
  app.listen(config.PORT)
})
