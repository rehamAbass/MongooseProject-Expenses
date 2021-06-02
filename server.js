// var bodyParser = require('body-parser')
var express = require('express')
var app = express()
const api = require('./server/routes/api')
// const moment = require('moment')
// const api = require('api')

// var request = require('request')
var mongoose = require('mongoose')
// var Expense = require("./server/model/Expense")

mongoose.connect("mongodb://localhost/expenses")

app.use(express.urlencoded({ extended: false }))// for the body requests. 
app.use(express.json()) // for the body requests !! to make them in jsob format . 
app.use('/', api)


app.listen(8000, function() {
    console.log("Server up and running on port 8000")
  })