'use strict'

const { TYPE, Sequelize } = require('./index')

const Cats = Sequelize.define('cats', {
  id: {
    field: 'cat_id',
    type: TYPE.INTEGER,
    primaryKey: true,
    autoIncrement: true // Automatically gets converted to SERIAL for postgres
  },
  name: TYPE.STRING
})

// --- Use create table --- //
// Cats.sync().then(() => {
//   console.log('---> Sync Cats Model')
// })

module.exports = Cats
