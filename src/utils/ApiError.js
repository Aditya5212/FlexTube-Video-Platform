/**
 * ApiError.js
 * 
 * This file defines a custom error class, ApiError, that extends the built-in Error class.
 * It provides a way to create error objects with a status code, message, and optional error details.
 */

// Import the built-in Error class
const { Error } = require("mongoose");

/**
 * ApiError class
 * 
 * This class represents a custom error object that can be used to handle API errors.
 * It extends the built-in Error class and adds additional properties for status code, message, and error details.
 */
class ApiError extends Error {
  /**
   * Constructor
   * 
   * Creates a new ApiError instance with the specified status code, message, and optional error details.
   * 
   * @param {number} statusCode - The HTTP status code for the error (e.g. 404, 500, etc.)
   * @param {string} message - A brief description of the error
   * @param {array} errors - An optional array of error details (e.g. validation errors, etc.)
   * @param {string} stack - An optional stack trace for the error
   */
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    // Call the parent Error class constructor to set the error message
    super(message);

    // Set the status code, data, and success properties
    this.statusCode = statusCode;
    this.data = null;
    this.success = false;

    // Set the error message and errors array
    this.message = message;
    this.errors = errors;

    // Set the stack trace if provided
    if (stack) {
      this.stack = stack;
    } else {
      // Otherwise, use the default Error class stack trace
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

// Export the ApiError class
module.exports = ApiError;
