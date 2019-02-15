/* eslint-env mocha */
'use strict'

const request = require('supertest')
const path = require('path')
const app = require(path.resolve('app'))

module.exports = {
  requestApp: request(app)
}
