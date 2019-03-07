'use strict'

const _ = require('lodash')

const Cats = require('../models/cats-model')

async function list (req, res, next) {
  const catList = await Cats.findAll()

  res.json(catList)
}

async function add (req, res, next) {
  const name = _.get(req, 'body.name', 'Slack')
  const params = {
    name: name
  }

  const result = await Cats.create(params)

  res.json(result)
}

module.exports = {
  list,
  add
}
