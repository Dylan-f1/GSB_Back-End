const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user_route')
const billRoutes = require('./routes/bill_route')
const authRoutes = require('./routes/authentification_route')



mongoose.connect('mongodb+srv://Dylan:Go14@cluster0.g7q9apz.mongodb.net/GSB-Back-End')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.on('open', () =>{console.log('Connected to MongoDB')})

app.use(express.json())
app.use(cors())
app.use('/users', userRoutes)
app.use('/bills', billRoutes)
app.use('/auth', authRoutes)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


