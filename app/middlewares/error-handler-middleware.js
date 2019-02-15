'use strict'

const NODE_ENV = process.env.NODE_ENV || 'dev'

const HTTPStatus = require('http-status')
const _ = require('lodash')

function claudiaHandler (req, res, next, err) {
  errorHandler(res, err)
}

function expressHandler (err, req, res, next) {
  errorHandler(res, err)
}

function errorHandler (res, err) {
  let code = err.status || HTTPStatus.INTERNAL_SERVER_ERROR
  let message = (err && err.message) || err
  let type = (err && err.type)
  const obj = { error: message, type: type }
  const result = _.pickBy(obj)
  res.status(code)
  res.json(result)
}

module.exports = (NODE_ENV === 'prod') ? claudiaHandler : expressHandler
