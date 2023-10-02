const ContactUs = require("../models/contactus.model");
const httpStatus = require("http-status");
const { nanoid } = require("nanoid");
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
    return res.status(httpStatus["OK"]).json(data);
  } catch (e) {
    /**
     * @type {APIError}
     */
    const err = createAPIError(httpStatus["INTERNAL_SERVER_ERROR"], e.message);
    return Promise.reject(err);
  }
};

const add = async (req, res) => {
  const { name, email, company_name, message } = req.body;
  try {
    const data = {
      id: nanoid(30),
      name,
      email,
      company_name,
      message,
      created_at: new Date(),
    };

    const createdData = await ContactUsModel.create(data);

    return res
      .status(httpStatus["CREATED"])
      .json(
        resHandler(
          true,
          httpStatus["CREATED"],
          "Successfully send data",
          createdData
        )
      );
  } catch (e) {
    /**
     * @type {APIError}
     */
    const err = createAPIError(httpStatus[500], e.message);
    return Promise.reject(err);
  }
};

module.exports = { list, add };
