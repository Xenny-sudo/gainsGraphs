const AppError = require("../utils/appError");

const sendErrorDev = (error, res) => {
    const statusCode = error.statusCode || 500;
    const status = error.status || 500;
    const message = error.message;
    const stack = error.stack;

    res.status(statusCode).json({
        status,
        message,
        stack,
    });
};

const sendErrorProd = (error, res) => {
    const statusCode = error.statusCode || 500;
    const status = error.status || 500;
    const message = error.message;
    const stack = error.stack;

    if (error.isOperational) {
        res.status(statusCode).json({
          status,
          message,
        });
    }

    console.log(error.name, error.message, stack);
    return res.status(500).json({
        status: 'error',
        message: 'Something went wrong'
    })
};

const globalErrorHandler = (err, req, res, next) => {
    if (err.name === "SequelizeValidationError") {
        err = new AppError((err.errors[0].message),400);
    }
    if (err.name === "SequelizeUniqueConstraintError") {
        err = new AppError((err.errors[0].message[0].toUpperCase() + err.errors[0].message.substring(1)),400);
    }
    if (process.env.CURR_ENV === 'development') {
        return sendErrorDev(err, res);
    }
    sendErrorProd(err, res);
}

module.exports = globalErrorHandler;