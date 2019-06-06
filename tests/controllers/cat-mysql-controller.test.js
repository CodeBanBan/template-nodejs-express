/* eslint-env mocha */
'use strict'

const assert = require('chai').assert
const { requestApp, resetMySQLTest } = require('../test-helper')

const Cats = require('../../app/repositories/models/cats-model')

describe('Cat Mysql Controller', () => {
  before(async () => {
    await resetMySQLTest()
    await Cats.create(cat1)
  })

  after((done) => {
    done()
  })

  describe('#list', () => {
    it('should return list of cats', async () => {
      const res = await requestApp
        .get('/cat')
        .set('Accept', 'application/json')
        .expect(200)

      const result = res.body
      console.log(result)
      assert.equal(result.length, 1)
    })
  })
})

const cat1 = {
  id: '99',
  name: 'cat1'
}
