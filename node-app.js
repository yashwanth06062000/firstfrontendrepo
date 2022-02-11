const http=require('http')

const routes=require('./routes.js')

const sever=http.createServer(routes)
sever.listen(4000)
