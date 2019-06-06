'use strict'
const _ = require('lodash')
const CatRepo = require('../repositories/cats-repository')

async function list (req, res, next) {
  const catList = await CatRepo.list()

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
