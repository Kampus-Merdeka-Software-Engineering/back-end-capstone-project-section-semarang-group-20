const { DataTypes } = require("sequelize");
const httpStatus = require("http-status");
const { createAPIError } = require("../utils/ApiError");
const { resHandler } = require("../utils/handlers");
const { sequelize: db } = require("../config/db.js");

const ContactUsModel = db.define(
  "contactus",
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    company_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    db,
    tableName: "contact-us",
    underscored: true,
    timestamps: true,
  }
);

/**
 * Retrieve a list of ContactUs records with optional pagination.
 *
 * @async
 * @param {Object} options - Options for pagination.
 * @param {number} [options.skip=0] - The number of records to skip.
 * @param {number} [options.limit=10] - The maximum number of records to return.
 * @returns {Promise<Array>} A Promise that resolves to an array of ContactUs records.
 * @throws {APIError} If an error occurs while retrieving the records.
 */
const retrieveAll = async ({ skip = 0, limit = 10 }) => {
  try {
    const data = await ContactUsModel.findAll({
      limit,
      offset: skip,
    });

    return resHandler(
      true,
      httpStatus["OK"],
      "Success retrieve contact us data",
      data
    );
  } catch (e) {
    /**
     * @type {APIError}
     */
    const err = createAPIError(httpStatus["BAD_REQUEST"], e.message);
    throw err;
  }
};

/**
 * @typedef {import('sequelize').Model} ContactUsModel
 */
module.exports = { ContactUsModel, retrieveAll };
