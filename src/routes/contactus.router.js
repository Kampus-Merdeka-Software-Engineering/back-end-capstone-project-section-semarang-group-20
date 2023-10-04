const express = require("express");
const { list, add, get } = require("../controllers/contactus.controller");
const { validator, Joi } = require("../utils/validator");

const router = express.Router();

const paramValidation = {
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    company_name: Joi.string().required(),
    message: Joi.string().required(),
  }),
};

/**
 * @swagger
 * /api/contact-us:
 *   get:
 *     summary: Get contact information.
 *     tags:
 *       - Contact Us
 *     description: Retrieve contact information for the Contact Us page.
 *     responses:
 *       200:
 *         description: Successful response with contact information.
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
 *                   example: "Success retrieve contact us data"
 *                 data:
 *                   type: array
 *                   description: An array of contact entries.
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: The unique identifier for the contact entry.
 *                         example: "6877717b-64c0-4899-b494-92efd85fd41a"
 *                       name:
 *                         type: string
 *                         description: The name of the person or entity contacting you.
 *                         example: "Gita Sekar"
 *                       email:
 *                         type: string
 *                         description: The email address of the contact.
 *                         example: "gitasekar@gmail.com"
 *                       company_name:
 *                         type: string
 *                         description: The name of the company (if applicable).
 *                         example: "company X"
 *                       message:
 *                         type: string
 *                         description: The message or inquiry.
 *                         example: "This is seeder message"
 *                       createdAt:
 *                         type: string
 *                         format: date
 *                         description: The date and time when the contact entry was created.
 *                         example: "2023-10-04T10:07:05.000Z"
 *                       updatedAt:
 *                         type: string
 *                         format: date
 *                         description: The date and time when the contact entry was last updated.
 *                         example: "2023-10-04T10:07:05.000Z"
 *               example:
 *                 success: true
 *                 code: 200
 *                 message: "Success retrieve contact us data"
 *                 data:
 *                   - id: "6877717b-64c0-4899-b494-92efd85fd41a"
 *                     name: "Gita Sekar"
 *                     email: "gitasekar@gmail.com"
 *                     company_name: "company X"
 *                     message: "This is seeder message"
 *                     createdAt: "2023-10-04T10:07:05.000Z"
 *                     updatedAt: "2023-10-04T10:07:05.000Z"
 */
router.route("/").get(list);

/**
 * @swagger
 * /api/contact-us/{id}:
 *   get:
 *     summary: Get contact information.
 *     tags:
 *       - Contact Us
 *     description: Retrieve contact information for the Contact Us page.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The unique identifier of the contact entry.
 *     responses:
 *       200:
 *         description: Successful response with contact information.
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
 *                   example: "Success get data contact us"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: The unique identifier for the contact entry.
 *                       example: "6877717b-64c0-4899-b494-92efd85fd41a"
 *                     name:
 *                       type: string
 *                       description: The name of the person or entity contacting you.
 *                       example: "Gita Sekar"
 *                     email:
 *                       type: string
 *                       description: The email address of the contact.
 *                       example: "gitasekar@gmail.com"
 *                     company_name:
 *                       type: string
 *                       description: The name of the company (if applicable).
 *                       example: "company X"
 *                     message:
 *                       type: string
 *                       description: The message or inquiry.
 *                       example: "This is seeder message"
 *                     createdAt:
 *                       type: string
 *                       format: date
 *                       description: The date and time when the contact entry was created.
 *                       example: "2023-10-04T10:07:05.000Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date
 *                       description: The date and time when the contact entry was last updated.
 *                       example: "2023-10-04T10:07:05.000Z"
 *               example:
 *                 success: true
 *                 code: 200
 *                 message: "Success get data contact us"
 *                 data:
 *                   id: "6877717b-64c0-4899-b494-92efd85fd41a"
 *                   name: "Gita Sekar"
 *                   email: "gitasekar@gmail.com"
 *                   company_name: "company X"
 *                   message: "This is seeder message"
 *                   createdAt: "2023-10-04T10:07:05.000Z"
 *                   updatedAt: "2023-10-04T10:07:05.000Z"
 */
router.route("/:id").get(get);

/**
 * @swagger
 * /api/contact-us:
 *   post:
 *     summary: Create a new contact entry.
 *     tags:
 *       - Contact Us
 *     description: Create a new contact entry with the provided information.
 *     requestBody:
 *       description: JSON object containing contact information.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the person or entity contacting you.
 *               email:
 *                 type: string
 *                 description: The email address of the contact.
 *               company_name:
 *                 type: string
 *                 description: The name of the company (if applicable).
 *               message:
 *                 type: string
 *                 description: The message or inquiry.
 *             example:
 *               name: "Marsha"
 *               email: "marsha@jkt48.com"
 *               company_name: "jkt48"
 *               message: "test"
 *     responses:
 *       201:
 *         description: Contact entry created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The unique identifier for the contact entry.
 *                 name:
 *                   type: string
 *                   description: The name of the person or entity contacting you.
 *                 email:
 *                   type: string
 *                   description: The email address of the contact.
 *                 company_name:
 *                   type: string
 *                   description: The name of the company (if applicable).
 *                 message:
 *                   type: string
 *                   description: The message or inquiry.
 *                 createdAt:
 *                   type: string
 *                   format: date
 *                   description: The date and time when the contact entry was created.
 *                 updatedAt:
 *                   type: string
 *                   format: date
 *                   description: The date and time when the contact entry was last updated.
 *               example:
 *                 success: true
 *                 code: 201
 *                 message: "Successfully send data"
 *                 data:
 *                    id: "NJb5wdhgCEzOY3aUwZAY6gFY85dA-4"
 *                    name: "Marsha"
 *                    email: "marsha@jkt48.com"
 *                    company_name: "jkt48"
 *                    message: "test"
 *                    createdAt: "2023-10-04T10:07:05.000Z"
 *                    updatedAt: "2023-10-04T10:07:05.000Z"
 */
router.route("/").post(validator(paramValidation), add);

module.exports = router;
