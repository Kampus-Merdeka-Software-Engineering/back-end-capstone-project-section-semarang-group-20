const express = require('express')
const { list, add, get } = require('../controllers/order.controller')
const { validator, Joi } = require('../utils/validator')

const router = express.Router()

const paramValidation = {
  body: Joi.object({
    jenis_layanan: Joi.string().valid('kilat', 'reguler').required(),
    alamat: Joi.string().required(),
    berat_barang: Joi.number().required(),
    harga_pengiriman: Joi.number().required(),
  }),
}

/**
 * @swagger
 * /api/order:
 *   get:
 *     summary: Get order data.
 *     description: Retrieve order data.
 *     tags:
 *       - Order
 *     responses:
 *       200:
 *         description: Successful response with order data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates the success of the operation.
 *                   example: true
 *                 code:
 *                   type: integer
 *                   description: HTTP status code indicating the result.
 *                   example: 200
 *                 message:
 *                   type: string
 *                   description: A message describing the result.
 *                   example: "Success retrieve order data"
 *                 data:
 *                   type: array
 *                   description: An array of order entries.
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: The unique identifier for the order entry.
 *                         example: "6877717b-64c0-4899-b494-92efd85fd41a"
 *                       jenis_layanan:
 *                         type: string
 *                         description: The type of service.
 *                         example: "kilat"
 *                       tanggal_pengiriman:
 *                         type: string
 *                         description: The date and time of shipment.
 *                         example: "2023-10-04T10:07:05.000Z"
 *                       nomor_resi:
 *                         type: string
 *                         description: The shipment tracking number.
 *                         example: "RVS-1234567890"
 *                       alamat:
 *                         type: string
 *                         description: The delivery address.
 *                         example: "Denpasar"
 *                       berat_barang:
 *                         type: string
 *                         description: The weight of the items.
 *                         example: "20"
 *                       harga_pengiriman:
 *                         type: string
 *                         description: The shipping cost.
 *                         example: "20"
 *                       createdAt:
 *                         type: string
 *                         format: date
 *                         description: The date and time when the order entry was created.
 *                         example: "2023-10-04T10:07:05.000Z"
 *                       updatedAt:
 *                         type: string
 *                         format: date
 *                         description: The date and time when the order entry was last updated.
 *                         example: "2023-10-04T10:07:05.000Z"
 *               example:
 *                 success: true
 *                 code: 200
 *                 message: "Success retrieve order data"
 *                 data:
 *                   - id: "6877717b-64c0-4899-b494-92efd85fd41a"
 *                     jenis_layanan: "kilat"
 *                     tanggal_pengiriman: "2023-10-04T10:07:05.000Z"
 *                     nomor_resi: "RVS-1234567890"
 *                     alamat: "Denpasar"
 *                     berat_barang: "20"
 *                     harga_pengiriman: "20"
 *                     createdAt: "2023-10-04T10:07:05.000Z"
 *                     updatedAt: "2023-10-04T10:07:05.000Z"
 *                   - id: "RZ2ndeFGuRI7YkE5Ku-r9bJQzsX7i4"
 *                     jenis_layanan: "kilat"
 *                     tanggal_pengiriman: "2023-10-04T10:29:02.000Z"
 *                     nomor_resi: "RSV-23434117266023232"
 *                     alamat: "denpasar"
 *                     berat_barang: "20"
 *                     harga_pengiriman: "2000000"
 *                     createdAt: "2023-10-04T10:29:02.000Z"
 *                     updatedAt: "2023-10-04T10:29:02.000Z"
 */
router.route('/').get(list)

/**
 * @swagger
 * /api/order/{id}:
 *   get:
 *     summary: Get order data by ID.
 *     description: Retrieve order data for a specific order entry by its ID.
 *     tags:
 *       - Order
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The unique identifier of the order entry.
 *     responses:
 *       200:
 *         description: Successful response with order data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates the success of the operation.
 *                   example: true
 *                 code:
 *                   type: integer
 *                   description: HTTP status code indicating the result.
 *                   example: 200
 *                 message:
 *                   type: string
 *                   description: A message describing the result.
 *                   example: "Success get data order"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: The unique identifier for the order entry.
 *                       example: "6877717b-64c0-4899-b494-92efd85fd41a"
 *                     jenis_layanan:
 *                       type: string
 *                       description: The type of service.
 *                       example: "kilat"
 *                     tanggal_pengiriman:
 *                       type: string
 *                       description: The date and time of shipment.
 *                       example: "2023-10-04T10:07:05.000Z"
 *                     nomor_resi:
 *                       type: string
 *                       description: The shipment tracking number.
 *                       example: "RVS-1234567890"
 *                     alamat:
 *                       type: string
 *                       description: The delivery address.
 *                       example: "Denpasar"
 *                     berat_barang:
 *                       type: string
 *                       description: The weight of the items.
 *                       example: "20"
 *                     harga_pengiriman:
 *                       type: string
 *                       description: The shipping cost.
 *                       example: "20"
 *                     createdAt:
 *                       type: string
 *                       format: date
 *                       description: The date and time when the order entry was created.
 *                       example: "2023-10-04T10:07:05.000Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date
 *                       description: The date and time when the order entry was last updated.
 *                       example: "2023-10-04T10:07:05.000Z"
 *               example:
 *                 success: true
 *                 code: 200
 *                 message: "Success get data order"
 *                 data:
 *                   id: "6877717b-64c0-4899-b494-92efd85fd41a"
 *                   jenis_layanan: "kilat"
 *                   tanggal_pengiriman: "2023-10-04T10:07:05.000Z"
 *                   nomor_resi: "RVS-1234567890"
 *                   alamat: "Denpasar"
 *                   berat_barang: "20"
 *                   harga_pengiriman: "20"
 *                   createdAt: "2023-10-04T10:07:05.000Z"
 *                   updatedAt: "2023-10-04T10:07:05.000Z"
 */
router.route('/:id').get(get)

/**
 * @swagger
 * /api/order:
 *   post:
 *     summary: Create a new order.
 *     description: Create a new order entry with the provided information.
 *     tags:
 *       - Order
 *     requestBody:
 *       description: JSON object containing order information.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               jenis_layanan:
 *                 type: string
 *                 description: The type of service.
 *               berat_barang:
 *                 type: number
 *                 description: The weight of the items.
 *               harga_pengiriman:
 *                 type: number
 *                 description: The shipping cost.
 *               alamat:
 *                 type: string
 *                 description: The delivery address.
 *             example:
 *               jenis_layanan: "reguler"
 *               berat_barang: 20
 *               harga_pengiriman: 2000000
 *               alamat: "denpasar"
 *     responses:
 *       201:
 *         description: Order entry created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates the success of the operation.
 *                   example: true
 *                 code:
 *                   type: integer
 *                   description: HTTP status code indicating the result.
 *                   example: 201
 *                 message:
 *                   type: string
 *                   description: A message describing the result.
 *                   example: "Successfully send data"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: The unique identifier for the order entry.
 *                       example: "KKyivFFO2HmmkWXpVIWk3sVOb6Rfl4"
 *                     jenis_layanan:
 *                       type: string
 *                       description: The type of service.
 *                       example: "reguler"
 *                     tanggal_pengiriman:
 *                       type: string
 *                       description: The date and time of shipment.
 *                       example: "2023-10-04T15:23:54.056Z"
 *                     nomor_resi:
 *                       type: string
 *                       description: The shipment tracking number.
 *                       example: "RSV-29323112150241212634"
 *                     alamat:
 *                       type: string
 *                       description: The delivery address.
 *                       example: "denpasar"
 *                     berat_barang:
 *                       type: number
 *                       description: The weight of the items.
 *                       example: 20
 *                     harga_pengiriman:
 *                       type: number
 *                       description: The shipping cost.
 *                       example: 2000000
 *                     createdAt:
 *                       type: string
 *                       format: date
 *                       description: The date and time when the order entry was created.
 *                       example: "2023-10-04T15:23:54.057Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date
 *                       description: The date and time when the order entry was last updated.
 *                       example: "2023-10-04T15:23:54.057Z"
 *               example:
 *                 success: true
 *                 code: 201
 *                 message: "Successfully send data"
 *                 data:
 *                   id: "KKyivFFO2HmmkWXpVIWk3sVOb6Rfl4"
 *                   jenis_layanan: "reguler"
 *                   tanggal_pengiriman: "2023-10-04T15:23:54.056Z"
 *                   nomor_resi: "RSV-29323112150241212634"
 *                   alamat: "denpasar"
 *                   berat_barang: 20
 *                   harga_pengiriman: 2000000
 *                   createdAt: "2023-10-04T15:23:54.057Z"
 *                   updatedAt: "2023-10-04T15:23:54.057Z"
 */
router.route('/').post(validator(paramValidation), add)

module.exports = router
