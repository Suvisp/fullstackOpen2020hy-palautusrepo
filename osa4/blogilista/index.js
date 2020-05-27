const app = require('./app') // varsinainen Express-sovellus
const http = require('http')

// const server = http.createServer(app)

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})