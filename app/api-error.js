class ApiError extends Error {
    constructor(stateCode, message) {
        super();
        this.statusCode = stateCode;
        this.message = message;
    }
}

module.exports = ApiError;