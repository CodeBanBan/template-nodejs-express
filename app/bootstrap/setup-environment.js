'use strict'
const NODE_ENV = process.env.NODE_ENV || 'development'

const fs = require('fs')
const path = require('path')
const envLocal = `${NODE_ENV}.local`

let targetEnv = ''
if (fs.existsSync(path.resolve(`env/.env.${envLocal}`))) {
  targetEnv = envLocal
} else if (fs.existsSync(path.resolve(`env/.env.${NODE_ENV}`))) {
  targetEnv = NODE_ENV
}

require('custom-env').env(targetEnv, 'env')
