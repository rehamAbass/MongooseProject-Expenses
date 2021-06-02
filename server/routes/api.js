const express = require('express')
const router = express.Router()
const Expense = require('../model/Expense')
// const moment = require('moment')


router.get('/expenses', function (req, res) {
    Expense.find({}).sort({ date: -1 }).exec(function (err, result) {
        console.log("all expenses =", result);
        res.send(result)
    })

})
//========================================================
router.post('/expenses', async function (req, res) {
    const data = req.body
    console.log("data = ", data);
    let newItem = new Expense({
        amount: data.amount, //"962.52",
        group: data.group,//"fun",
        date: data.date,//"TolaTaa, August 03, 1993 12:23 PM",
        name: data.name//
    })
    await newItem.save()
    // .then(function(err,t){console.log("in then got = ",t)})
    res.send(newItem)
})
//================================================================
// /expenses/:group


// 1 -  body 
// 2 -  route paramter
// 3 -  query paramter

//========================================================================================================
router.post('/exampleForBody', function (req, res) {
    console.log('id = ', req.body.id);
    res.send('done')
})

////////////////////////////////////////////////////////

router.get('/exampleForRouteParam/:id', function (req, res) {////// /exa../657687
    let id = req.params.id
    console.log("from get : my id = ", id);
    res.send('done again!')
})
///////////////////////////////////////////////////////////

router.get('/exampleOfQueryParam', function (req, res) { ////// /exa../?id=5768798
    console.log("from query example : param = ", req.query.id);
    res.send('Query example done !')
})
////////////////////////////////////////////////////////////
//==================================================================================

router.put('/expenses/:group1/:group2',async function(req,res){
    let {group1, group2}= req.params
    const updated = await Expense.findOneAndUpdate({ group: group1},{group:group2},{new: true})
    console.log("group1 =",group1, "  group2 = ",group2)
    res.send(updated)
})



///================================================================================

router.get('/expenses/:group', function (req, res) {

    let { group } = req.params
    let { total } = req.body

    let sum = 0
    if (Boolean(total)) {
        let pro = Expense.find({ group: group })
        pro.then(function (result) {
            for (let v of result) {
                let amount = v.amount
                console.log("amount = ", amount)
                sum += amount
            }
            console.log(sum);
            res.send(`sum = ${sum}`)
        })
    }
    else {
        res.send(`sum = ${sum}`)
    }
})
module.exports = router


// // git all data and sorted dates
// router.get('/expenses', function (req, res) {
//     Expense.find({}).sort({ date: -1 }).exec((err, docs) => {
//         res.send(docs)
//     })
// })

// // date now  foramt  "2020-06-13T18:30:00.000Z" 
// const timeElapsed = Date.now();
// const today = new Date(timeElapsed);
// const dateNow = today.toISOString()

// // add a new item in database
// router.post('/expenses', function (req, res) {
//     let data = req.body
//     let newItem = new Expense({
//         name: data.item,
//         amount: data.amount,
//         date: data.date || dateNow,
//         group: data.group
//     })
//     newItem.save().then(function (amount) {
//         console.log(amount);
//     })
//     res.send(`Add a new item`)
// })

// router.put('/update/:id', function (req, res) {
//     let { id } = req.params
//     Expense.findById(id, function (req, expense) {
//         expense.group = "bills"
//         expense.save()
//         res.send(expense.item)
//     })
// })

// router.get('/expenses/:group', function (req, res) {
//     let { group } = req.params
//     Expense.find({ group: group }, function (err, result) {
//         res.send(result)
//     })
// })


//$("body").on('click','.pic',function(){
    // let id =$(this).attr('id')
    // let lastName = $(this).attr('data-lastName')

// router.get('/expense/get', function (req, res) {
//     let { d1, d2 } = req.query

//     if (d1 === undefined && d2 === undefined) {
//         Expense.find({}).sort({ date: -1 }).exec((err, docs) => {
//             res.send(docs)
//         })
//     }
//     if (d2 === undefined  && d1 != undefined) {
//         Expense.find({
//             $and: [
//                 { date: { $gte: moment(d1).format('LLLL') } },
//                 { date: { $lte: dateNow } }
//             ]
//         }).sort({ date: -1 }).exec((err, docs) => {
//             res.send(docs)
//         })
//     }
//     if (d2 != undefined && d1 != undefined) {
//         Expense.find({
//             $and: [
//                 { date: { $gte: moment(d1).format('LLLL') } },
//                 { date: { $lte: moment(d2).format('LLLL') } }
//             ]
//         }).sort({ date: -1 }).exec((err, docs) => {
//             res.send(docs)
//         })
//     }
// })

// module.exports = router



