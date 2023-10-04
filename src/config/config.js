const { config } = require('./db.config.js')

const { DATABASE: db } = config

module.exports = {
  development: db,
}
