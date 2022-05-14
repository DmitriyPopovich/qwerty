const ApiError = require('../exceptions/api-error')
const {errorMsg} = require('../helpers/chalk_helper')


module.exports = function (err, req, res, next){
    console.log(errorMsg(err))
    if(err instanceof ApiError){
        return res.status(err.status).json({message: err.message, errors: err.errors})
    }
    return res.status(500).json({message: 'Unexpected error'})
}