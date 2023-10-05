const { DataTypes } = require('sequelize')
const httpStatus = require('http-status')
const { createAPIError } = require('../utils/ApiError')
const { resHandler } = require('../utils/handlers')
const { sequelize: db } = require('../config/db.js')

const OrderModel = db.define(
  'order',
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    jenis_layanan: {
      type: DataTypes.ENUM(['reguler', 'kilat']),
      allowNull: false,
    },
    tanggal_pengiriman: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    nomor_resi: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    alamat: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    berat_barang: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    harga_pengiriman: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    nama_pengirim: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    nama_penerima: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    alamat_asal: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    no_telpon: {
      type: DataTypes.STRING(20),
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
    tableName: 'order',
    underscored: true,
    timestamps: true,
  },
)

/**
 * Retrieve a list of Order records with optional pagination.
 *
 * @async
 * @param {object} options - Options for pagination.
 * @param {number} [options.skip] - The number of records to skip.
 * @param {number} [options.limit] - The maximum number of records to return.
 * @returns {Promise<Array>} A Promise that resolves to an array of Order records.
 * @throws {import("../utils/ApiError").APIError} If an error occurs while retrieving the records.
 */
async function retrieveAll({ skip = 0, limit = 10 }) {
  try {
    const data = await OrderModel.findAll({
      limit,
      offset: skip,
    })

    return resHandler(
      true,
      httpStatus.OK,
      'Success retrieve order data',
      data,
    )
  }
  catch (e) {
    /**
     * @type {import("../utils/ApiError").APIError}
     */
    const err = createAPIError(httpStatus.INTERNAL_SERVER_ERROR, e.message)
    throw err
  }
}

/**
 * Retrieve a single Order record by its ID.
 *
 * @async
 * @param {string} id - The unique identifier of the Order record to retrieve.
 * @returns {Promise<object>} A Promise that resolves to a response object containing the retrieved Order record.
 * @throws {import("../utils/ApiError").APIError} If an error occurs while retrieving the record or if the record is not found.
 */
async function getOneData(id) {
  try {
    const data = await OrderModel.findOne({
      where: { id },
    })

    if (!data) {
      return resHandler(
        false,
        httpStatus.NOT_FOUND,
        'Contact us data not found!',
      )
    }

    return resHandler(true, httpStatus.OK, 'Success get data order', data)
  }
  catch (e) {
    /**
     * @type {import("../utils/ApiError").APIError}
     */
    const err = createAPIError(httpStatus.BAD_REQUEST, e.message)
    throw err
  }
}

/**
 * @typedef {import('sequelize').Model} OrderModel
 */

module.exports = { OrderModel, retrieveAll, getOneData }
