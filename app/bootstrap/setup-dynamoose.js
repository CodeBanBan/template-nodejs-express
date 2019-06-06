'use strict'
// @flow
const NODE_ENV = process.env.NODE_ENV || 'development'
const DynamodbConfig = require('../configs/dynamodb-config')
const Dynamoose = require('dynamoose')

function setup () {
  Dynamoose.AWS.config.update(DynamodbConfig.AWS_CONFIG)
  Dynamoose.setDefaults({
    prefix: DynamodbConfig.TABLE_CONFIG.PREFIX
  })

  const skipEnv = ['production', 'staging']
  const isSkip = skipEnv.includes(NODE_ENV)
  if (!isSkip) {
    Dynamoose.local(DynamodbConfig.ENDPOINT_URL)
  }
}

module.exports = {
  setup
}
