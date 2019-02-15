'use strict'

const _ = require('lodash')
const HTTPStatus = require('http-status')
const logger = require('../factory/logger')

async function hello (req, res, next) {
  const name = req.params.name || '[No Name]'
  res.json({
    message: `hello world ${name}`
  })
}

async function create (req, res, next) {
  //logger.info(req.body)
  console.log(req.body)
  const name = _.get(req, 'body.name', '[No Name Body]')
  res.json({
    message: `hello world ${name}`
  })
}

async function fail (req, res, next) {
  const err = new Error('This is fail function')
  err.status = HTTPStatus.IM_A_TEAPOT

  return next(err)
}

module.exports = {
  hello,
  create,
  fail
}
