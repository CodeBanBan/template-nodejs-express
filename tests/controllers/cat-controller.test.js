/* eslint-env mocha */
'use strict'

const assert = require('chai').assert
const { requestApp, resetDynamoDBTest } = require('../test-helper')

describe('Cat Controller', () => {
  before(async () => {})

  after((done) => {
    resetDynamoDBTest(done)
  })

  describe('#POST /cat', () => {
    it('should create success', async () => {
      const body = {
        name: 'test-name'
      }

      const res = await requestApp
        .post('/cat')
        .set('Accept', 'application/json')
        .send(body)
        .expect(200)

      const result = res.body
      assert.equal(result.cat.name, 'test-name')
    })
  })

  describe('#GET /cat', () => {
    it('should list success', async () => {
      const res = await requestApp
        .get('/cat')
        .set('Accept', 'application/json')
        .expect(200)

      const result = res.body
      assert.equal(result.cats.length, 1)
      assert.equal(result.dogs.length, 1)
    })
  })
})
