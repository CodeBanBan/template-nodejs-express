'use strict'

const _ = require('lodash')
const NODE_ENV = process.env.NODE_ENV || 'development'
// const IS_CI = process.env.IS_CI || ''

const connectionProfile = {
  development: {
    HOST: 'localhost',
    PORT: '8889',
    DATABASE: 'node_mysql',
    USER: 'root',
    PASSWORD: 'root'
  },
  test: {
    HOST: 'localhost',
    PORT: '8999',
    DATABASE: 'node_mysql_test',
    USER: 'root',
    PASSWORD: 'root'
  }
}

const connection = _.get(connectionProfile, NODE_ENV, connectionProfile['development'])

module.exports = connection
