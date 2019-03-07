'use strict'

const express = require('express')
const router = express()

const sampleMw = require('../middlewares/sample-middleware')

const helloController = require('../controllers/hello-controller')
const chileRoute = require('./child-route')
const catRoute = require('./cat-mysql-route')

router.get('/hello', sampleMw, helloController.hello)
router.get('/hello/:name', helloController.hello)
router.get('/fail', helloController.fail)
router.post('/hello', helloController.create)

router.use('/child', chileRoute)

router.use('/cat', catRoute)

module.exports = router
