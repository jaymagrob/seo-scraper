const rp = require('request-promise')
const cheerio = require('cheerio')

async function getData(url) {
  await rp(url)
    .then(function (htmlString) {
      const $ = cheerio.load(htmlString)
      const obj = {
        title: $('title').text(),
        description: $('meta[name=\'description\']').attr('content'),
        keywords: $('meta[name=\'keywords\']').attr('content')
      }
      return {
        url: url,
        data: obj
      }
    
    })
    .catch(function () {
      return {
        error: 'error'
        // url: url,
        // data: {
        //   title: null,
        //   description: null,
        //   keywords: null
      }
    }
    )

}

module.exports = { getData }
