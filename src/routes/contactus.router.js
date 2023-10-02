const express = require("express");
const { list, add } = require("../controllers");
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

/** @route      GET /api/contact-us
 *  @desc       fetch all contact us data
 */
router.route("/").get(list);

/** @route      POST /api/contact-us
 *  @desc       post contact us data
 */
router.route("/").post(validator(paramValidation), add);

module.exports = router;
