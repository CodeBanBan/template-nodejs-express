'use strict'

const _ = require('lodash')
const logger = require('../helpers/logger-helper')
const CatRepo = require('../repositories/cat-repository')
const DogRepo = require('../repositories/dog-repository')

async function list (req, res, next) {
  try {
    const catList = await CatRepo.list()
    const dogList = await DogRepo.list()

    return res.json({
      cats: catList,
      dogs: dogList
    })
  } catch (err) {
    return next(err)
  }
}

async function create (req, res, next) {
  logger.info(req.body)
  const name = _.get(req, 'body.name', '[No Name Body]')

  try {
    const garfield = {
      id: 1,
      name: name
    }

    await CatRepo.add(garfield)

    const gdog = {
      id: 1,
      name: `${name} in dog mode`
    }
    await DogRepo.add(gdog)

    res.json({
      cat: garfield,
      dog: gdog
    })
  } catch (err) {
    return next(err)
  }
}

module.exports = {
  list,
  create
}
