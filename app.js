var express = require('express')
var app = express()
var path = require('path')
var ejs = require('ejs')
require('dotenv').config()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname,'public')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

var port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Server is starting at http://locallhost:${port}`)
})