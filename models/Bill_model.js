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
    description:{
        type: String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
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

const Bill = mongoose.model('Bill', expenseReportSchema)
module.exports = Bill

