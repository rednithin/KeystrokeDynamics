const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config/config')

const app = express()
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send({'name': 'Hello'})
})

app.listen(config.PORT)
