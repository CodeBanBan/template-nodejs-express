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

// TODO: Backup another way to reset table for test
// function getAllItem (ddb, tableName) {
//   return new Promise((resolve, reject) => {
//     const params = {
//       TableName: tableName
//     }
//
//     ddb.scan(params, function (err, data) {
//       if (err) {
//         return reject(err)
//       }
//       resolve(data['Items'])
//     })
//   })
// }
//
// function deleteItems (ddb, tableName, items) {
//   const promises = items.map(item => {
//     return new Promise((resolve, reject) => {
//       const params = {
//         TableName: tableName,
//         Key: {
//           'id': item.id
//         }
//       }
//
//       ddb.deleteItem(params, function (err, data) {
//         if (err) {
//           return reject(err)
//         }
//         resolve(data)
//       })
//     })
//   })
//
//   return Promise.all(promises)
// }

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

function getAllTableSchema (ddb, tableList) {
  const promises = tableList.map(tableName => {
    return new Promise((resolve, reject) => {
      const params = {
        TableName: tableName
      }

      ddb.describeTable(params, function (err, data) {
        if (err) {
          return reject(err)
        }

        resolve(data.Table)
      })
    })
  })

  return Promise.all(promises)
}

function createAllTable (ddb, schemaList) {
  const promises = schemaList.map(schema => {
    return new Promise((resolve, reject) => {
      const params = {
        TableName: schema.TableName,
        AttributeDefinitions: schema.AttributeDefinitions,
        KeySchema: schema.KeySchema,
        ProvisionedThroughput: {
          ReadCapacityUnits: schema.ProvisionedThroughput.ReadCapacityUnits,
          WriteCapacityUnits: schema.ProvisionedThroughput.WriteCapacityUnits
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

  const allSchema = await getAllTableSchema(ddb, tableList)
  await deleteAllTable(ddb, tableList)
  await createAllTable(ddb, allSchema)
}

module.exports = {
  requestApp: request(app),
  resetDynamoDBTest: resetDynamoDBTest
}
