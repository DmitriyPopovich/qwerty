module.exports = class UserDto{
    id;
    email;
    isActivated;
    roles;
    constructor(model) {
        const {_id} = model;
        this.id = _id
        this.email = model.email
        this.isActivated = model.isActivated
        this.roles = model.roles
    }
}