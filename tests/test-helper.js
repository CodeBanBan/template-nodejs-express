/* eslint-env mocha */
'use strict'

const request = require('supertest')
const path = require('path')
const app = require(path.resolve('app'))
const Dynamoose = require('dynamoose')

function deleteTable (ddb, tableName) {
  return new Promise((resolve, reject) => {
    const params = {
      TableName: tableName
    }

    ddb.deleteTable(params, function (err, data) {
      if (err) {
        return reject(err)
      }
      resolve(data)
    })
  })
}

function listTable (ddb) {
  return new Promise((resolve, reject) => {
    ddb.listTables({}, function (err, data) {
      if (err) {
        return reject(err)
      }
      resolve(data['TableNames'])
    })
  })
}

function resetDynamoDBTest (done) {
  const ddb = Dynamoose.ddb()
  listTable(ddb)
    .then(tableList => {
      const promises = tableList.map(tableName => deleteTable(ddb, tableName))
      Promise.all(promises)
        .then(() => {
          done()
        })
    })
}

module.exports = {
  requestApp: request(app),
  resetDynamoDBTest: resetDynamoDBTest
}
