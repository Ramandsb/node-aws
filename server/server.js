const express = require('express');
const authRoutes = require('./routes/auth'); 
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();

const app = express();
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions));

app.use(bodyParser.json())
app.use('/api', authRoutes);
app.use(morgan('dev'));
// create application/json parser

// parse application/json



const port = process.env.PORT
app.listen(port, () => console.log(`Api is running on port: ${port}`))