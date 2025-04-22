
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const User = require('../models/user_model')
const ExpenseReport = require('../models/Expense_Report_model')

mongoose.connect('mongodb+srv://Dylan:Go14@cluster0.g7q9apz.mongodb.net/')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.on('open', () =>{console.log('Connected to MongoDB')})

app.get('/', (req, res) => {
    res.send('Hello World')
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
