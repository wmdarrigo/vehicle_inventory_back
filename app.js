const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

app.use(
    cors({
        origin: "http://localhost:5000",
}))
app.use(bodyParser.json())

//import routes
const postsRoute = require('./routes/posts');
const bikesRoute = require('./routes/bikes');
const { application } = require('express');

// middleware
app.use('/posts', postsRoute)
app.use('/bikes', bikesRoute)

// routes
app.get('/', (req,res) => {
    res.send("hello world")
}) 

// connect to DB
mongoose.connect(process.env.DB_CONNECTION)
    .then(() => {
        console.log('connected to DB!')
    }).catch(err => {
        console.log('Database not connected'+err)
    })

// Start listening to the server
app.listen(3000);