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
    nama_pengirim: Joi.string().required(),
    nama_penerima: Joi.string().required(),
    alamat_asal: Joi.string().required(),
    no_telpon: Joi.string().required(),
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
 *                       status:
 *                         type: string
 *                         description: The status of the order.
 *                         example: "proses"
 *                       tanggal_pengiriman:
 *                         type: string
 *                         description: The date and time of shipment.
 *                         example: "2023-10-06T10:16:49.000Z"
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
 *                       nama_pengirim:
 *                         type: string
 *                         description: The name of the sender.
 *                         example: "Satya"
 *                       nama_penerima:
 *                         type: string
 *                         description: The name of the recipient.
 *                         example: "Gita"
 *                       alamat_asal:
 *                         type: string
 *                         description: The origin address.
 *                         example: "Jakarta"
 *                       no_telpon:
 *                         type: string
 *                         description: The contact number.
 *                         example: "08221234542"
 *                       createdAt:
 *                         type: string
 *                         format: date
 *                         description: The date and time when the order entry was created.
 *                         example: "2023-10-06T10:16:49.000Z"
 *                       updatedAt:
 *                         type: string
 *                         format: date
 *                         description: The date and time when the order entry was last updated.
 *                         example: "2023-10-06T10:16:49.000Z"
 *               example:
 *                 success: true
 *                 code: 200
 *                 message: "Success retrieve order data"
 *                 data:
 *                   - id: "6877717b-64c0-4899-b494-92efd85fd41a"
 *                     jenis_layanan: "kilat"
 *                     status: "proses"
 *                     tanggal_pengiriman: "2023-10-06T10:16:49.000Z"
 *                     nomor_resi: "RVS-1234567890"
 *                     alamat: "Denpasar"
 *                     berat_barang: "20"
 *                     harga_pengiriman: "20"
 *                     nama_pengirim: "Satya"
 *                     nama_penerima: "Gita"
 *                     alamat_asal: "Jakarta"
 *                     no_telpon: "08221234542"
 *                     createdAt: "2023-10-06T10:16:49.000Z"
 *                     updatedAt: "2023-10-06T10:16:49.000Z"
 *                   - id: "a9fdb463-6d8c-45ee-94e1-0d0bc5403e0d"
 *                     jenis_layanan: "kilat"
 *                     status: "proses"
 *                     tanggal_pengiriman: "2023-10-06T10:43:18.000Z"
 *                     nomor_resi: "RSV-15273133212017312826"
 *                     alamat: "Denpasar"
 *                     berat_barang: "20"
 *                     harga_pengiriman: "200000"
 *                     nama_pengirim: "Gita"
 *                     nama_penerima: "Satya"
 *                     alamat_asal: "Jakarta"
 *                     no_telpon: "08213472364"
 *                     createdAt: "2023-10-06T10:43:18.000Z"
 *                     updatedAt: "2023-10-06T10:43:18.000Z"
 */
router.route('/').get(list)

/**
 * @swagger
 * /api/order/:receiptId:
 *   get:
 *     summary: Get order data by receipt ID.
 *     description: Retrieve order data for a specific order entry by its receipt ID.
 *     tags:
 *       - Order
 *     parameters:
 *       - in: path
 *         name: receiptId
 *         schema:
 *           type: string
 *         required: true
 *         description: The unique receipt identifier of the order entry.
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
 *                     status:
 *                       type: string
 *                       description: The status of the order.
 *                       example: "proses"
 *                     tanggal_pengiriman:
 *                       type: string
 *                       description: The date and time of shipment.
 *                       example: "2023-10-06T10:16:49.000Z"
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
 *                     nama_pengirim:
 *                       type: string
 *                       description: The name of the sender.
 *                       example: "Satya"
 *                     nama_penerima:
 *                       type: string
 *                       description: The name of the recipient.
 *                       example: "Gita"
 *                     alamat_asal:
 *                       type: string
 *                       description: The origin address.
 *                       example: "Jakarta"
 *                     no_telpon:
 *                       type: string
 *                       description: The contact number.
 *                       example: "08221234542"
 *                     createdAt:
 *                       type: string
 *                       format: date
 *                       description: The date and time when the order entry was created.
 *                       example: "2023-10-06T10:16:49.000Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date
 *                       description: The date and time when the order entry was last updated.
 *                       example: "2023-10-06T10:16:49.000Z"
 *               example:
 *                 success: true
 *                 code: 200
 *                 message: "Success get data order"
 *                 data:
 *                   id: "6877717b-64c0-4899-b494-92efd85fd41a"
 *                   jenis_layanan: "kilat"
 *                   status: "proses"
 *                   tanggal_pengiriman: "2023-10-06T10:16:49.000Z"
 *                   nomor_resi: "RVS-1234567890"
 *                   alamat: "Denpasar"
 *                   berat_barang: "20"
 *                   harga_pengiriman: "20"
 *                   nama_pengirim: "Satya"
 *                   nama_penerima: "Gita"
 *                   alamat_asal: "Jakarta"
 *                   no_telpon: "08221234542"
 *                   createdAt: "2023-10-06T10:16:49.000Z"
 *                   updatedAt: "2023-10-06T10:16:49.000Z"
 */
router.route('/:receiptId').get(get)

/**
 * @swagger
 * /order:
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
 *               alamat:
 *                 type: string
 *                 description: The delivery address.
 *               berat_barang:
 *                 type: number
 *                 description: The weight of the items.
 *               harga_pengiriman:
 *                 type: number
 *                 description: The shipping cost.
 *               nama_pengirim:
 *                 type: string
 *                 description: The name of the sender.
 *               nama_penerima:
 *                 type: string
 *                 description: The name of the recipient.
 *               alamat_asal:
 *                 type: string
 *                 description: The origin address.
 *               no_telpon:
 *                 type: string
 *                 description: The contact number.
 *               status:
 *                 type: string
 *                 enum:
 *                   - proses
 *                   - selesai
 *                 description: The status of the order.
 *             example:
 *               jenis_layanan: "kilat"
 *               alamat: "Denpasar"
 *               berat_barang: 20
 *               harga_pengiriman: 200000
 *               nama_pengirim: "Gita"
 *               nama_penerima: "Satya"
 *               alamat_asal: "Jakarta"
 *               no_telpon: "08213472364"
 *               status: "proses"
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
 *                       example: "6f83d06c-a240-4988-97a6-5db9627bf34b"
 *                     jenis_layanan:
 *                       type: string
 *                       description: The type of service.
 *                       example: "kilat"
 *                     tanggal_pengiriman:
 *                       type: string
 *                       description: The date and time of shipment.
 *                       example: "2023-10-06T10:57:50.389Z"
 *                     nomor_resi:
 *                       type: string
 *                       description: The shipment tracking number.
 *                       example: "RSV-32273191922323335140"
 *                     status:
 *                       type: string
 *                       enum:
 *                         - proses
 *                         - selesai
 *                       description: The status of the order.
 *                       example: "proses"
 *                     alamat:
 *                       type: string
 *                       description: The delivery address.
 *                       example: "Denpasar"
 *                     berat_barang:
 *                       type: number
 *                       description: The weight of the items.
 *                       example: 20
 *                     harga_pengiriman:
 *                       type: number
 *                       description: The shipping cost.
 *                       example: 200000
 *                     nama_pengirim:
 *                       type: string
 *                       description: The name of the sender.
 *                       example: "Gita"
 *                     nama_penerima:
 *                       type: string
 *                       description: The name of the recipient.
 *                       example: "Satya"
 *                     alamat_asal:
 *                       type: string
 *                       description: The origin address.
 *                       example: "Jakarta"
 *                     no_telpon:
 *                       type: string
 *                       description: The contact number.
 *                       example: "08213472364"
 *                     createdAt:
 *                       type: string
 *                       format: date
 *                       description: The date and time when the order entry was created.
 *                       example: "2023-10-06T10:57:50.391Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date
 *                       description: The date and time when the order entry was last updated.
 *                       example: "2023-10-06T10:57:50.391Z"
 *               example:
 *                 success: true
 *                 code: 201
 *                 message: "Successfully send data"
 *                 data:
 *                   id: "6f83d06c-a240-4988-97a6-5db9627bf34b"
 *                   jenis_layanan: "kilat"
 *                   tanggal_pengiriman: "2023-10-06T10:57:50.389Z"
 *                   nomor_resi: "RSV-32273191922323335140"
 *                   status: "proses"
 *                   alamat: "Denpasar"
 *                   berat_barang: 20
 *                   harga_pengiriman: 200000
 *                   nama_pengirim: "Gita"
 *                   nama_penerima: "Satya"
 *                   alamat_asal: "Jakarta"
 *                   no_telpon: "08213472364"
 *                   createdAt: "2023-10-06T10:57:50.391Z"
 *                   updatedAt: "2023-10-06T10:57:50.391Z"
 */
router.route('/').post(validator(paramValidation), add)

module.exports = router
