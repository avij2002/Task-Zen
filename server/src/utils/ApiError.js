class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong!",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
    this.success = null;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.message);
    }
  }
}

export { ApiError };
