const express = require('express')
const serveIndex = require('serve-index')

const app = express()

app.use(
    '/',
    express.static('public/ftp'),
    serveIndex('public/ftp',{icons:true})
)


app.listen(3000,()=>console.log('✌ server running on port 3000'))