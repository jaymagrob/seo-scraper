const router = require('./config/router')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { port, dbUrl } = require('./config/environment')

mongoose.connect(dbUrl, { useNewUrlParser: true }, (err) => {
  if (err) return console.log(err)
  console.log('Mongoose is up and running')
})

app.use(router)

app.listen(port, () => console.log(`Up and running on ${port}`))