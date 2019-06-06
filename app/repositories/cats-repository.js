'use strict'

const Cats = require('./models/cats-model')

async function list () {
  const result = await Cats.findAll()

  return result
}

module.exports = {
  list
}
