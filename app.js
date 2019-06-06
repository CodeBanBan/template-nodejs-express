'use strict'

const NODE_ENV = process.env.NODE_ENV || 'development'
require('./app/bootstrap')
const server = require('./app/server')

const skipEnv = ['test']
const isListen = !skipEnv.includes(NODE_ENV)

if (isListen) {
  const port = 3001
  server.listen(port, () => {
    console.log(`API Running on port: ${port}`)
  })
}

module.exports = server
