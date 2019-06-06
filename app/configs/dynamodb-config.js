'use strict'

const NODE_ENV = process.env.NODE_ENV || 'development'

const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID
const AWS_SECRET_ACCESS_KEY = process.env.AWS_ACCESS_KEY_ID
const AWS_REGION = process.env.AWS_REGION

const ENDPOINT_URL = process.env.AWS_DYNAMODB_ENDPOINT_URL

const PREFIX_ENV = NODE_ENV.toUpperCase()
const TABLE_CONFIG = {
  PREFIX: `${PREFIX_ENV}-SAMPLE_`
}

const AWS_CONFIG_DEV = {
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region: AWS_REGION
}

const AWS_CONFIG_PROD = {
  region: AWS_REGION
}

module.exports = {
  AWS_CONFIG: (NODE_ENV === 'production' || NODE_ENV === 'staging') ? AWS_CONFIG_PROD : AWS_CONFIG_DEV,
  TABLE_CONFIG,
  ENDPOINT_URL
}
