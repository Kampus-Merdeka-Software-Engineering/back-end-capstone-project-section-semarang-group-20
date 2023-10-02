const express = require('express')
const { list } = require("../controllers")

const router = express.Router()

/** @route      GET /api/contact-us
 *  @desc       fetch all contact us data
 */
router.route("/").get(list)

module.exports = router