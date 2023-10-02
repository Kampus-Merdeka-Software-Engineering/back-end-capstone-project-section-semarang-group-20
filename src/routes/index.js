const express = require('express')
const router = express.Router()

router.use('/contact-us', require("./contactus.router"))

module.exports = router