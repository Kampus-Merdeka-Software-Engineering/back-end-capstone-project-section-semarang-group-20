const express = require('express')
const router = express.Router()

router.use('/contact-us', require("./contactus.router"))
router.use('/order', require("./order.router"))

module.exports = router