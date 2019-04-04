'use strict'

const connection = {
  HOST: process.env.MYSQL_HOST,
  PORT: process.env.MYSQL_PORT,
  DATABASE: process.env.MYSQL_DATABASE,
  USER: process.env.MYSQL_USER,
  PASSWORD: process.env.MYSQL_PASSWORD
}

module.exports = connection
