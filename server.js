const express = require('express')
const connectDb = require('./config/connectDB')
const dotenv = require('dotenv').config()
connectDb()
const app = express()

const port = process.env.PORT || 5000
app.use(express.json())

app.use('/api', require('./routes/person'))




app.listen(port, () => {
    console.log(`The port is listening on port ${port}`)
})