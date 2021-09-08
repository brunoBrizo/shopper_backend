class AppError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
    this.isOperational = true;

    //get stack trace
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
