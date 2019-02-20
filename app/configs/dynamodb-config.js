'use strict'

const NODE_ENV = process.env.NODE_ENV || 'dev'
const IS_CI = process.env.IS_CI || ''

const AWS_ACCESS_KEY_ID = 'ACCESS KEY'
const AWS_SECRET_ACCESS_KEY = 'SECRET KEY'
const AWS_REGION = 'ap-northeast-1'

const ENDPOINT_DEV = 'http://localhost:8000'
const ENDPOINT_TEST_LOCAL = 'http://localhost:8100'
const ENDPOINT_TEST_CI = 'http://dynamodb:8100'
const ENDPOINT_TEST = (IS_CI === 'ci') ? ENDPOINT_TEST_CI : ENDPOINT_TEST_LOCAL
const ENDPOINT_URL = (NODE_ENV === 'test') ? ENDPOINT_TEST : ENDPOINT_DEV

const TABLE_CONFIG = {
  PREFIX: 'sample_'
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
  AWS_CONFIG: (NODE_ENV === 'prod') ? AWS_CONFIG_PROD : AWS_CONFIG_DEV,
  TABLE_CONFIG,
  ENDPOINT_URL
}
