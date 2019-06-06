'use strict'
const NODE_ENV = process.env.NODE_ENV || 'development'
const DEBUG_MODE = process.env.DEBUG_MODE || 'off'
const pino = require('pino')()

const logTest = (DEBUG_MODE === 'on') ? (arg) => console.log(arg) : (arg) => {}
const logDev = (arg) => console.log(arg)
const mockLogger = (mockLog) => ({
  child: () => mockLogger,
  error: mockLog,
  warn: mockLog,
  info: mockLog,
  debug: mockLog,
  trace: mockLog
})

const logger = (nodeEnv) => {
  switch (nodeEnv) {
    case 'test': return mockLogger(logTest)
    case 'development': return mockLogger(logDev)
    default: return pino
  }
}

module.exports = logger(NODE_ENV)
