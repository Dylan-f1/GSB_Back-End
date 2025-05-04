const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const userRoutes = require('./routes/user_route')
const billRoutes = require('./routes/bill_route')



mongoose.connect('mongodb+srv://Dylan:Go14@cluster0.g7q9apz.mongodb.net/')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.on('open', () =>{console.log('Connected to MongoDB')})

app.use(express.json())
app.use('/users', userRoutes)
app.use('/bills', billRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


