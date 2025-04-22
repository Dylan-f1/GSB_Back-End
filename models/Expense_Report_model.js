const mongoose = require('mongoose')

const expenseReportSchema = new mongoose.Schema({
    date:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    proof:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    type:{
        type: String,
        requiered: true
    },
    createdAt:{
        type: String,
        default: Date.now(),
    }
})

const ExpenseReport = mongoose.model('ExpenseReport', expenseReportSchema)
module.exports = ExpenseReport

