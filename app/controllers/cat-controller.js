'use strict'

const _ = require('lodash')
const logger = require('../factory/logger')
const Cats = require('../models/cats-model')
const Dogs = require('../models/dogs-model')

async function list (req, res, next) {
  try {
    const catList = await Cats.scan().all().exec()
    const dogList = await Dogs.scan().all().exec()

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
    const garfield = new Cats({
      id: 1,
      name: name
    })

    await garfield.save()

    const gdog = new Dogs({
      id: 1,
      name: `${name} in dog mode`
    })
    await gdog.save()

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
