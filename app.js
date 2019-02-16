'use strict'

const NODE_ENV = process.env.NODE_ENV || 'dev'

const Dynamoose = require('dynamoose')

// --- Dynamoose Configuration --- //
const AWS_ACCESS_KEY_ID = 'ACCESS KEY'
const AWS_SECRET_ACCESS_KEY = 'SECRET KEY'
const AWS_REGION = 'ap-northeast-1'
const AWS_ENDPOINT_DEV = 'http://localhost:8000'
const AWS_ENDPOINT_TEST = 'http://localhost:8100'
const AWS_ENDPOINT = (NODE_ENV === 'test') ? AWS_ENDPOINT_TEST : AWS_ENDPOINT_DEV

const awsConfig = {
  region: AWS_REGION
}

// --- Remove this block if use AWS-Lambda --- //
if (NODE_ENV === 'prod') {
  awsConfig.accessKeyId = AWS_ACCESS_KEY_ID
  awsConfig.secretAccessKey = AWS_SECRET_ACCESS_KEY
}

Dynamoose.AWS.config.update(awsConfig)
Dynamoose.setDefaults({
  prefix: 'sample_'
});

if (NODE_ENV !== 'prod') {
  Dynamoose.local(AWS_ENDPOINT)
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
