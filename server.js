require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())


app.use('/',require('./routes/auth'))
app.use('/',require('./routes/profile')) 

const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser : true,
    useUnifiedTopology: true
}, err =>{
    if(err) throw err;
    console.log('Database connected')
})



const PORT= process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is running on port',PORT)
})
