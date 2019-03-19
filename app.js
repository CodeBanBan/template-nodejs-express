'use strict'

const NODE_ENV = process.env.NODE_ENV || 'development'

const express = require('express')
const bodyParser = require('body-parser')
const appRoute = require('./app/routes/app-route')
const errorHandlerMw = require('./app/middlewares/error-handler-middleware')

const router = express()

router.use(bodyParser.json({ limit: '15mb' }))
router.use('', appRoute)
router.use(errorHandlerMw)

const isListen = (NODE_ENV !== 'test')
if (isListen) {
  const port = 3001
  router.listen(port, () => {
    console.log(`API Running on port: ${port}`)
  })
}

module.exports = router
