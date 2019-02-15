'use strict'

const logger = require('../factory/logger')

const sampleMiddleware = (req, res, next) => {
  logger.info('--->>> this is sample Middleware')
  next()
}

module.exports = sampleMiddleware
