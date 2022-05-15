const mongoose = require('mongoose')
require('dotenv').config()
const {errorMsg, successMsg} = require('../helpers/chalk_helper')

const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME
const DB_USER = process.env.DB_USER

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.62zak.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

const mongooseConnect = async () => {
    //, {useUnifiedTopology: true, useNewUrlParser: true}
    await mongoose.connect(url)
        .then(() => console.log(successMsg('Connect to DB')))
        .catch((error) => console.log(errorMsg(error)) )
}
module.exports = mongooseConnect