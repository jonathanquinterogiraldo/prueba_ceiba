//ENV variables
require('dotenv').config();

//Require
const express = require('express')
const app = express()

//Express
const db = require('./database')
const PORT = process.env.PORT

//Database
db()

app.listen(PORT, () => {
  console.log(`Ready!!, listening on port ${PORT}`);
})

