require('../app/bootstrap/setup-environment')
const AWS = require('aws-sdk')
const { createServer } = require('dynamodb-admin')
const DynamodbConfig = require('../app/configs/dynamodb-config')

const AwsConfig = DynamodbConfig.AWS_CONFIG
AwsConfig.endpoint = DynamodbConfig.ENDPOINT_URL

AWS.config.update(AwsConfig)

const dynamodb = new AWS.DynamoDB()
const dynClient = new AWS.DynamoDB.DocumentClient({ service: dynamodb })

const app = createServer(dynamodb, dynClient)

const port = 7000
const server = app.listen(port)
server.on('listening', () => {
  const address = server.address()
  console.log(`--->>>> Dynamodb Admin :: listening on http://0.0.0.0:${address.port}`)
})
