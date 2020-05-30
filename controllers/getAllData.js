const puppeteer = require('puppeteer')
 
async function getAllData(req, res) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  const url = req.body.website
  await page.goto(url)

  await page.evaluate(() => {
    return {
      title: document.querySelectorAll('title').text(),
      description: document.querySelectorAll('meta[name=\'description\']'),
      keywords: document.querySelectorAll('meta[name=\'keywords\']'),
      h1: document.querySelectorAll('h1')
    }
  })
    .then(page => res.status(200).json({ page }))
    .catch(() => res.status(400).json({ url: url }))
}

module.exports = { getAllData }
