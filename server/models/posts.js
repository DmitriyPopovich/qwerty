const {Schema, model} = require('mongoose')

const postsSchema = new Schema({
    isActivated: {type: Boolean, default: true},
    title: {type: String, required: true},
    text: {type: String, required: true},
    author: [{type: Schema.Types.ObjectId, ref: 'User'}]
})
module.exports = model('Posts', postsSchema)