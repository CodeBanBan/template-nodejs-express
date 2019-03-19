'use strict'

const NODE_ENV = process.env.NODE_ENV || 'development'

const DynamodbConfig = require('./app/configs/dynamodb-config')
const Dynamoose = require('dynamoose')

// --- Dynamoose Configuration --- //
Dynamoose.AWS.config.update(DynamodbConfig.AWS_CONFIG)
Dynamoose.setDefaults({
  prefix: DynamodbConfig.TABLE_CONFIG.PREFIX
})

if (NODE_ENV !== 'production') {
  Dynamoose.local(DynamodbConfig.ENDPOINT_URL)
}
// --- End Dynamoose Configuration --- //

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
