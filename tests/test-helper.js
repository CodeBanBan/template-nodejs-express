/* eslint-env mocha */
'use strict'

const request = require('supertest')
const path = require('path')
const app = require(path.resolve('app'))
const Dynamoose = require('dynamoose')

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

function deleteAllTable (ddb, tableList) {
  const promises = tableList.map(tableName => {
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
  })

  return Promise.all(promises)
}

function createAllTable (ddb, tableList) {
  const promises = tableList.map(tableName => {
    return new Promise((resolve, reject) => {
      const params = {
        TableName: tableName,
        AttributeDefinitions: [
          {
            AttributeName: 'id',
            AttributeType: 'S'
          }
        ],
        KeySchema: [
          {
            AttributeName: 'id',
            KeyType: 'HASH'
          }
        ],
        ProvisionedThroughput: {
          ReadCapacityUnits: 1,
          WriteCapacityUnits: 1
        }
      }

      ddb.createTable(params, function (err, data) {
        if (err) {
          return reject(err)
        }
        resolve(data)
      })
    })
  })

  return Promise.all(promises)
}

async function resetDynamoDBTest () {
  const ddb = Dynamoose.ddb()

  const tableList = await listTable(ddb)

  await deleteAllTable(ddb, tableList)
  await createAllTable(ddb, tableList)
}

module.exports = {
  requestApp: request(app),
  resetDynamoDBTest: resetDynamoDBTest
}
