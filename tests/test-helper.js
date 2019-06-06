/* eslint-env mocha */
'use strict'

const request = require('supertest')
const path = require('path')
const app = require(path.resolve('app'))

const { Sequelize } = require('../app/repositories/models/index')

function resetMySQLTest () {
  const promises = Object.values(Sequelize.models).map(model => model.sync({ force: true }))
  return Promise.all(promises)
}

module.exports = {
  requestApp: request(app),
  resetMySQLTest
}
