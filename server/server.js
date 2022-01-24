//std node libraries
const http = require('http')
//modules
const app = require('./app')


const server = http.createServer(app)

server.listen(process.env.PORT, () => {
    console.log('SERVER HAS STARTED')
})

