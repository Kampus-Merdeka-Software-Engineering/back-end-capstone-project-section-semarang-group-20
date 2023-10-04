const { consola } = require('consola')
/**
 * Custom error class for API errors.
 */
class APIError extends Error {
  constructor(statusCode, message) {
    super(message)
    this.statusCode = statusCode
    this.name = 'APIError'
  }
}

/**
 * Create an API error with the specified status code and message.
 *
 * @param {number} statusCode - The HTTP status code for the error.
 * @param {string} message - The error message.
 * @returns {import("../utils/ApiError").APIError} An instance of the APIError class.
 */
function createAPIError(statusCode, message) {
  return new APIError(statusCode, consola.error(message))
}

module.exports = {
  APIError,
  createAPIError,
}
