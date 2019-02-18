'use strict'

const NODE_ENV = process.env.NODE_ENV || 'dev'

const AWS_ACCESS_KEY_ID = 'ACCESS KEY'
const AWS_SECRET_ACCESS_KEY = 'SECRET KEY'
const AWS_REGION = 'ap-northeast-1'

const ENDPOINT_DEV = 'http://localhost:8000'
const ENDPOINT_TEST = 'http://localhost:8100'
const ENDPOINT_URL = (NODE_ENV === 'test') ? ENDPOINT_TEST : ENDPOINT_DEV

const TABLE_CONFIG = {
  PREFIX: 'sample_'
}

const AWS_CONFIG = {
  region: AWS_REGION
}

// --- Remove this block if use AWS-Lambda --- //
if (NODE_ENV === 'prod') {
  AWS_CONFIG.accessKeyId = AWS_ACCESS_KEY_ID
  AWS_CONFIG.secretAccessKey = AWS_SECRET_ACCESS_KEY
}

module.exports = {
  AWS_CONFIG,
  TABLE_CONFIG,
  ENDPOINT_URL
}
