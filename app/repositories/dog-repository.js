const Dogs = require('./models/dogs-model')

async function list () {
  const result = await Dogs.scan().all().exec()

  return result
}

async function add (objData) {
  const model = new Dogs(objData)

  await model.save()
}

module.exports = {
  list,
  add
}
