'use strict'

const express = require('express')
const router = express()

const childController = require('../controllers/child-controller')

router.get('/hello', childController.hello)
router.get('/hello/:name', childController.hello)

module.exports = router
