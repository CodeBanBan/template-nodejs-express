'use strict'

const HTTPStatus = require('http-status')
const _ = require('lodash')

function errorHandlerMiddleware (err, req, res, next) {
  let code = err.status || HTTPStatus.INTERNAL_SERVER_ERROR
  let message = (err && err.message) || err
  let type = (err && err.type)
  const obj = { error: message, type: type }
  const result = _.pickBy(obj)
  res.status(code)
  res.json(result)
}

module.exports = errorHandlerMiddleware
