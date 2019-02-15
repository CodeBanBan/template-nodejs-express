'use strict'

async function hello (req, res, next) {
  const name = req.params.name || '[No Name]'
  res.json({
    message: `hello world ${name} - child`
  })
}

module.exports = {
  hello
}
