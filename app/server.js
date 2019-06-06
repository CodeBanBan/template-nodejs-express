'use strict'
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const appRoute = require('./routes/app-route')
const errorHandlerMw = require('./middlewares/error-handler-middleware')

const server = express()

const corsOptions = {
  origin: new RegExp(process.env.CORS_ORIGIN) || '*'
}

server.use(cors(corsOptions))

server.use(bodyParser.json({ limit: '15mb' }))
server.use('', appRoute)
server.use(errorHandlerMw)

module.exports = server
