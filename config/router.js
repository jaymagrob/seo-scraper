const express = require('express')
const router = express.Router()
const getMetaData = require('../controllers/getMetaData')

router.route('/')
  .post(getMetaData.checker)
  

module.exports = router