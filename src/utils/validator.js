const { validate: expressValidate , Joi} = require("express-validation");

const validator = (schema) =>
  expressValidate(schema, { keyByField: true }, { abortEarly: false });

module.exports = { validator, Joi };
