const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const dotenv = require('dotenv')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const authorRoute = require('./routes/author')
const bookRoute = require('./routes/book')

dotenv.config()
//middleware
app.use('/home', () => {
    console.log("middleware");
})
//Connect Database
mongoose.connect((process.env.mongoDB_URL), () => {
    console.log("connected to mongodb");
})

///

app.use(bodyParser.json())
app.use(morgan("common"))

//routes  
app.use('/v1/author', authorRoute)
app.use('/v1/book', bookRoute)

app.listen(port)
