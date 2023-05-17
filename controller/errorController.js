import CustomError from "../Utils/CustomError.js"

const castErrorHandler = (err) => {
    const msg = `Invalid value for ${err.path}: ${err.value}`
    return new CustomError(msg, 400)
}

const validationErrorHandler = (err) => {
    let errMsg = Object.values(err.errors).map(val => val.message).join('. ')
    errMsg = `Invalid input: ${errMsg}`
    return new CustomError(errMsg, 400)
}

export const globalErrorHandler = (error, req, res, next) => {
    error.statusCode = error.statusCode || 500
    // Invalid Id Value
    if (error.name === 'CastError') {
        error = castErrorHandler(error)
    }
    // Mongoose Validation Error
    if (error.name === 'ValidationError') {
        error = validationErrorHandler(error)
    }
    res.status(error.statusCode).json({
        status: error.statusCode,
        message: error.message
    })
}