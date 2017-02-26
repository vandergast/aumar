const express = require('express')
const { config } = require('./config/config.env')

let app = express()

app.use(express.static('dist'))

app.listen(config.port)

