
module.exports = class ApiError extends Error{
    status;
    errors;
    constructor(status, message, errors = []) {
        super(message);
        this.status = status
        this.errors = errors
    }
    static UnauthorizedError(){
        return new ApiError(401, 'Unauthorized user')
    }
    static UnactivatedError(){
        return new ApiError(401, 'User must be activated')
    }
    static AccessDenied(){
        return new ApiError(403, 'AccessDenied')
    }
    static BadRequest(message="Bad request", errors){
        return new ApiError(400, "API ERROR::"+message, errors)
    }

}