// import mongoose from "mongoose"
// import 'dotenv/config'
// import {errorMsg, successMsg} from "../helpers/chalk_helper";
//
// const DB_PASS = process.env.DB_PASS
// const DB_NAME = process.env.DB_NAME
// const DB_USER = process.env.DB_USER
//
// const url = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.62zak.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
//
// export const mongooseConnect = () => {
//     //, {useUnifiedTopology: true, useNewUrlParser: true}
//     mongoose.connect(url)
//         .then(() => console.log(successMsg('Connect to DB')))
//         .catch((error) => console.log(errorMsg(error)) )
// }