module.exports = class PostDto{
    id;
    user;
    title;
    text;
    constructor(model) {
        const {_id} = model;
        this.id = _id
        this.user = model.user
        this.title = model.title
        this.text = model.text
    }
}