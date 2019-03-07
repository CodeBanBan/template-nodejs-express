'use strict'

const express = require('express')
const router = express()

const catController = require('../controllers/cat-mysql-controller')

router.get('/', catController.list)
router.post('/', catController.add)

module.exports = router
