const env = process.env.NODE_ENV || 'development'
const port = 3000
const dbUrl = `mongodb://localhost/this-is-test-on-${env}`


module.exports = { port, env, dbUrl }