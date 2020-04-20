const express = require('express')
const router = express.Router()
const test = require('../controllers/test')

router.route('/')
  .post(test.rpTest)
  

module.exports = router