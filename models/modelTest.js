const moongoose = require('mongoose')

const schema = new moongoose.Schema({
  name: { type: 'string', required: true }
})

module.exports = moongoose.model('Test', schema)