/**
 * apiResponse.js
 * 
 * This file defines a utility class, apiResponse, that represents a response object
 * for API responses.
 */

/**
 * apiResponse class
 * 
 * This class represents a response object for API responses. It has properties for
 * the status code, data, and message.
 */
class apiResponse {
    /**
     * Constructor
     * 
     * Creates a new apiResponse instance with the specified status code, data, and message.
     * 
     * @param {number} statusCode - The HTTP status code for the response
     * @param {any} data - The response data
     * @param {string} message - A brief description of the response
     */
    constructor(statusCode, data, message = "Success") {
      this.statusCode = statusCode;
      this.data = data;
      this.message = message;
      this.success = statusCode < 400;
    }
  }
  
  module.exports = apiResponse;
