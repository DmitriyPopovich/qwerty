const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const authRouter = require('./router/auth-router')
const userRouter = require('./router/user-router')
const postRouter = require('./router/post-router')
const {errorMsg, successMsg} = require('./helpers/chalk_helper')
const errorMiddleware = require('./middlewares/error-middleware')
const mongooseConnect = require('./connectDB/mongoDB')

const PORT = process.env.PORT || 5000

const app = express()
const cors_opts = {
    credentials: true,
    origin: process.env.CLIENT_URL,
}
app.use(
    cors(cors_opts)
)


// app.use(cors({ origin: process.env.CLIENT_URL, credentials :  true}));
app.options(`*`, cors(cors_opts))

// app.use((req, res, next) => {
//     res.append('Access-Control-Allow-Origin', [process.env.CLIENT_URL]);
//     res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.append('Access-Control-Allow-Headers', 'Content-Type');
//     res.append('Access-Control-Allow-Credentials', true);
//     next();
// });


app.use(express.json())
app.use(cookieParser())
app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/posts', postRouter)

app.use(errorMiddleware)

const start = async () => {
    try{
        await mongooseConnect()
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



