'use strict'

const express = require('express')
const router = express()

const catController = require('../controllers/cat-controller')

router.get('/', catController.list)
router.post('/', catController.create)

module.exports = router
