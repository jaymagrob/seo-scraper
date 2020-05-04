const axios = require('axios')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

async function headData(url) {
  try {
    const response = await axios.get(url)
    const dom = await new JSDOM(response.data).window.document
    
    const title = dom.querySelector('title').textContent
    const description = dom.querySelector('meta[name="description"]')
    const keywords = dom.querySelector('meta[name="keywords"]')
    const obj = {
      title: title || null,
      description: description ? description.getAttribute('content') : null,
      keywords: keywords ? keywords.getAttribute('content') : null
    }
    return obj
  } catch (error) {
    return error
  }
}

module.exports = headData