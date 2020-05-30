const rp = require('request-promise')
const cheerio = require('cheerio')

async function checker(req, res) {
  const url = req.body.website
  await rp(url)
    .then(function (htmlString) {
      const $ = cheerio.load(htmlString)
      console.log($('p'))
      const obj = {
        title: $('title').text(),
        description: $('meta[name=\'description\']').attr('content'),
        keywords: $('meta[name=\'keywords\']').attr('content')
        // h1: $('p')
      }
      return res.status(200).json(
        {
          url: url,
          data: obj
        })
    })
    .catch(() => res.status(400).json({ url: url }))
}

module.exports = { checker }
