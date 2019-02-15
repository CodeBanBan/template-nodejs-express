/* eslint-env mocha */
'use strict'

const assert = require('chai').assert
const { requestApp } = require('../test-helper')

describe('Hello Controller', () => {
  before(async () => {})

  after((done) => {
    done()
  })

  describe('#hello', () => {
    it('should return json message hello world [No Name]', async () => {
      const res = await requestApp
        .get('/hello')
        .set('Accept', 'application/json')
        .expect(200)

      const result = res.body
      assert.equal(result.message, 'hello world [No Name]')
    })
  })

  describe('#fail', () => {
    it('should return error', async () => {
      const res = await requestApp
        .get('/fail')
        .set('Accept', 'application/json')
        .expect(418)

      const result = res.body
      assert.equal(result.error, 'This is fail function')
    })
  })
})
