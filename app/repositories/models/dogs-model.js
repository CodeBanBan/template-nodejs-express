'use strict'

const { TYPE, Sequelize } = require('./index')

const Dogs = Sequelize.define('dogs', {
  // id: TYPE.INTEGER,
  name: TYPE.STRING
})

// --- Use create table --- //
// Dogs.sync().then(() => {
//   console.log('---> Sync Dogs Model')
// })

module.exports = Dogs
