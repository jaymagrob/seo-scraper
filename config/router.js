const express = require('express')
const router = express.Router()
const getMetaData = require('../controllers/getMetaData')
const getAllData = require('../controllers/getMetaData')

router.route('/api')
  .post(getMetaData.checker)

module.exports = router