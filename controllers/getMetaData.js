const rp = require('request-promise')
const cheerio = require('cheerio')
const { getData } = require('../lib/headData')

async function checker(req, res) {
  const url = req.body.website
  await rp(url)
    .then(function (htmlString) {
      const $ = cheerio.load(htmlString)
      const obj = {
        title: $('title').text(),
        description: $('meta[name=\'description\']').attr('content'),
        keywords: $('meta[name=\'keywords\']').attr('content')
      }
      return res.status(200).json(
        {
          url: url,
          data: obj
        })
    })
    .catch(err => res.status(400).json({ url: url }))
}

module.exports = { checker }