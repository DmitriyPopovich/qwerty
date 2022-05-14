const express = require('express')
// import express from 'express'
const cors = require('cors')
// import cors from 'cors'
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
require('dotenv').config()
const authRouter = require('./router/auth-router')
const userRouter = require('./router/user-router')
const {errorMsg, successMsg} = require('./helpers/chalk_helper')
const errorMiddleware = require('./middlewares/error-middleware')

const PORT = process.env.PORT
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME
const DB_USER = process.env.DB_USER

const app = express()
const url = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.62zak.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`



// const corsOptions = {
//     credentials: true,
//     origin: process.env.CLIENT_URL,
//     // origin: "*",
//     // optionsSuccessStatus: 200,// some legacy browsers (IE11, various SmartTVs) choke on 204
//     // methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
// }



// if (process.env.NODE_ENV === 'development') {
//     // CORS settings
// }
//
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });


app.use(
    cors({
        credentials: true,
        origin: process.env.CLIENT_URL,
        // origin: "*"
    })
)
// app.use(cors({ origin:true, credentials:true }));


app.use(express.json())
app.use(cookieParser())


app.use('/auth', authRouter)
app.use('/user', userRouter)


app.use(errorMiddleware)


const start = async () => {
    try{
        await mongoose
            .connect(url)
            .then((res)=>{console.log(successMsg('Connect to DB'))})
            .catch((error)=>console.log(errorMsg(error)))

        app.listen(PORT, 'localhost',(error)=>{
            error ? console.log(errorMsg(error)) :
                console.log(successMsg(`listening port ${PORT}`))
        })
    }
    catch (err){
        console.log(errorMsg(err))
    }
}
start()
    .then((res)=>{console.log(successMsg('Server started'))})
    .catch((error)=>console.log(errorMsg(error)))



