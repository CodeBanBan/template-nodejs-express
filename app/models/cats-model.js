'use strict'

const Sequelize = require('sequelize')
const sequelize = require('./index')

const Cats = sequelize.define('cats', {
  id: {
    field: 'cat_id',
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true // Automatically gets converted to SERIAL for postgres
  },
  name: Sequelize.STRING
})

// --- Use create table --- //
// Cats.sync().then(() => {
//   console.log('---> Sync Cats Model')
// })

module.exports = Cats
