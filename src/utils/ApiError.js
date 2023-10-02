/**
 * Custom error class for API errors.
 */
class APIError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.name = "APIError";
  }
}

/**
 * Create an API error with the specified status code and message.
 *
 * @param {number} statusCode - The HTTP status code for the error.
 * @param {string} message - The error message.
 * @returns {APIError} An instance of the APIError class.
 */
const createAPIError = (statusCode, message) => {
  return new APIError(statusCode, message);
};

module.exports = {
  APIError,
  createAPIError,
};
