const headData = require('../lib/headData')


function checker(req, res) {
  
  headData(req.body.website)
    .then(i => {
      if (i === 'error') return res.status(404).json({ message: 'Website not found' }) 
      return res.status(200).json( { data: i } )
    })
    .catch(err => res.status(400).json({ err }))

}

module.exports = { checker }