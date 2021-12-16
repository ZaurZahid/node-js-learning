const express = require("express");
const path = require('path');
const logger = require("./middleware");
const PORT = process.env.PORT || 5000

const app = express()
// app.use(logger)
app.use('/api/users', require('./user'))


app.listen(PORT, () => console.log(`Sever started ${PORT}`))