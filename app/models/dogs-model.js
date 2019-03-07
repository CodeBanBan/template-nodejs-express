'use strict'

const Sequelize = require('sequelize')
const sequelize = require('./index')

const Dogs = sequelize.define('dogs', {
  // id: Sequelize.INTEGER,
  name: Sequelize.STRING
})

// --- Use create table --- //
// Dogs.sync().then(() => {
//   console.log('---> Sync Dogs Model')
// })

module.exports = Dogs
