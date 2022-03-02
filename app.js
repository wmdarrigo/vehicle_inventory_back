const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
// const cors = require('cors')
const port = process.env.PORT || 3000
require('dotenv/config')

// app.use(
//     cors({
//         origin: "http://localhost:3000/",
// }))
app.use(bodyParser.json())

//import routes
const bikesRoute = require('./routes/bikes');
const { application } = require('express');

// middleware
app.use('/bikes', bikesRoute)

// routes
app.get('/', (req,res) => {
    res.send("hello world")
}) 

// connect to DB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('connected to DB!')
    }).catch(err => {
        console.log('Database not connected'+err)
    })

// Start listening to the server
app.listen(port);