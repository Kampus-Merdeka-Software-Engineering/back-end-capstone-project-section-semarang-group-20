const { getVariables } = require('../utils/getEnv')

exports.config = {
  env: getVariables('NODE_ENV'),
  DATABASE: {
    username: getVariables('USERNAME'),
    password: getVariables('PASSWORD'),
    database: getVariables('DATABASE'),
    host: getVariables('HOST'),
    port: getVariables('DATABASE_PORT'),
    dialect: 'mysql',
  },
}
