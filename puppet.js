const puppeteer = require('puppeteer')


async function john (para) {
  const browser = await puppeteer.launch(
    {
      product: 'chrome'
      // headless: false,
      // ignoreHTTPSErrors: true
    }
  )
  try {
    const page = await browser.newPage()
    await page.goto(para)
    await page.screenshot({ path: 'example.png' })
    const text = await page.evaluate(() => document.querySelector('title').textContent)
    console.log(text)
    await browser.close()
  } catch (err) {
    console.log(err)
  }
}

john('https://www.johnmagnusrobertson.com')