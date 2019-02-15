'use strict'

const pino = require('pino')()

const NODE_ENV = process.env.NODE_ENV || 'dev'
const mockLogger = {
  child: () => mockLogger,
  error: () => {},
  warn: () => {},
  info: () => {},
  debug: () => {},
  trace: () => {}
}

const logger = (NODE_ENV === 'test') ? mockLogger : pino

module.exports = logger
