'use strict'

// const NODE_ENV = process.env.NODE_ENV || 'dev'
// const IS_CI = process.env.IS_CI || ''

const Sequelize = require('sequelize')
const MYSQL_CONFIG = require('../configs/mysql-config')

const options = {
  host: MYSQL_CONFIG.HOST,
  port: MYSQL_CONFIG.PORT,
  dialect: 'mysql'
}

const sequelize = new Sequelize(
  MYSQL_CONFIG.DATABASE,
  MYSQL_CONFIG.USER,
  MYSQL_CONFIG.PASSWORD,
  options
)

module.exports = sequelize
