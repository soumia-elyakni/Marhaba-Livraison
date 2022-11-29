const express = require('express');
const app = express();
const cors = require('cors')
const route = require('./routes/routes.js');
const dotenv = require('dotenv').config();
const dbInit = require("./database/initDb");

 


dbInit();

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Route Midelwares
app.use('/api/user', route)

app.listen(process.env.PORT, ()=> console.log('project is running'))

module.exports = app