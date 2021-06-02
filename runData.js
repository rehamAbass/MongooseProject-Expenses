// should be run only once :
var request = require('request')
var mongoose = require('mongoose')
const expenses = require('./expenses.json')
const Expense = require('./model/Expense')
mongoose.connect("mongodb://localhost/mongoose-project")

expenses.forEach(e => {
    let a= new Expense({
        name: e.item,
        amount: e.amount,
        date: e.date,
        group: e.group   
    })
    a.save()
});