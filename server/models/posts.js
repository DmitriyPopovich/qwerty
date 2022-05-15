const {Schema, model} = require('mongoose')

const postsSchema = new Schema({
    isActivated: {type: Boolean, default: true},
    title: {type: String, required: true},
    text: {type: String, required: true},
    author: [{type: Object, ref: 'User'}] //TODO проверить поле
})
module.exports = model('User', postsSchema)