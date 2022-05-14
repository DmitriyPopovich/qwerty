const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
    roles: [{type: String, ref: 'Roles'}]
})

module.exports = model('User', userSchema)