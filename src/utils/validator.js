const { validate: expressValidate, Joi } = require('express-validation')

function validator(schema) {
  return expressValidate(schema, { keyByField: true }, { abortEarly: false })
}

module.exports = { validator, Joi }
