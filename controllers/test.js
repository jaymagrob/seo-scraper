const request = require('request')
const rp = require('request-promise')
const cheerio = require('cheerio')
const htmlparser2 = require('htmlparser2')


function rpTest(req, res) {

  rp('https://johnmagnusrobertson.com/')
    .then(body => {
      const data = cheerio('html')
      console.log(data)
      return res.status(200).json('success')
    })
    .catch(err => res.status(232).json(err))
}



module.exports = { rpTest }





