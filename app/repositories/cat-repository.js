const Cats = require('./models/cats-model')

async function list () {
  const result = await Cats.scan().all().exec()

  return result
}

async function add (objData) {
  const model = new Cats(objData)

  await model.save()
}

module.exports = {
  list,
  add
}
