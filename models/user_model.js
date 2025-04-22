const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    expenseReport:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'ExpenseReport'
    },
    role:{
        type: String,
        required: true
    },
    createdAt:{
        type: String,
        default: Date.now(),
    }
})
const User = mongoose.model('User', userSchema)
module.exports = User

