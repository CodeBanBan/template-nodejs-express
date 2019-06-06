'use strict'

const HTTPStatus = require('http-status')
const _ = require('lodash')
const logger = require('../helpers/logger-helper')

function errorHandlerMiddleware (err, req, res, next) {
  const errorName = err.name
  const defaultMessage = _.get(err, 'message', 'unknown error')
  const defaultCode = _.get(err, 'status', HTTPStatus.INTERNAL_SERVER_ERROR)
  const customError = _.get(err, `customHandle.${errorName}`, {})

  const code = _.get(customError, 'status', defaultCode)
  const message = _.get(customError, 'message', defaultMessage)
  const type = _.get(err, 'type', undefined)

  delete err.customHandle

  if (code >= 500) {
    logger.error(err)
  }

  const obj = { error: message, type: type }
  const result = _.pickBy(obj)

  res.status(code)
  res.json(result)
}

module.exports = errorHandlerMiddleware
