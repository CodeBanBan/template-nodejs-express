'use strict'

const logger = require('../helpers/logger-helper')

const sampleMiddleware = (req, res, next) => {
  logger.info('--->>> this is sample Middleware')
  next()
}

module.exports = sampleMiddleware
