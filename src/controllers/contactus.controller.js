const ContactUs = require("../models/contactus.model");
const { consola } = require("consola")
const httpStatus = require("http-status");
const { createAPIError } = require("../utils/ApiError");
const { resHandler } = require("../utils/handlers");

const { ContactUsModel, retrieveAll } = ContactUs;

/**
 * Handle an HTTP GET request to retrieve a list of items with optional pagination.
 *
 * @param {Express.Request} req - The Express request object.
 * @param {Express.Response} res - The Express response object.
 * @returns {Promise<void>} A Promise that resolves when the response is sent.
 */
const list = async (req, res) => {
  const { limit = 10, skip = 0 } = req.query;
  try {
    const data = await retrieveAll({ skip, limit });
    return res.json(data);
  } catch (e) {
    /**
     * @type {APIError}
     */
    const err = createAPIError(httpStatus[500], consola.error(e.message));
    return Promise.reject(err);
  }
};

module.exports = { list }
