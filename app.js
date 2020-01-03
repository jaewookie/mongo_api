var express = require('express')
var app = express()
var path = require('path')
var ejs = require('ejs')
require('dotenv').config()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var apiRouter = require('./router/api-routes.js')

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname,'public')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/', apiRouter)

var password = process.env.PASSWORD
mongoose.connect(`mongodb+srv://root:${password}@jaewook-0sogy.mongodb.net/test?retryWrites=true&w=majority`,{ useNewUrlParser: true , useUnifiedTopology: true })
// ('mongodb+srv://root:1234@jaewook-0sogy.mongodb.net/test?retryWrites=true&w=majority')

var db = mongoose.connection

if (!db) {
    console.log('err')
}else{
    console.log('con')
}

var port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Server is starting at http://locallhost:${port}`)
})