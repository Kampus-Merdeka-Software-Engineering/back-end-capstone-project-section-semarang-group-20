const { Sequelize } = require('sequelize')
const { consola } = require('consola')
const { config } = require('./db.config.js')

const { DATABASE: dbConfig } = config

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    dialect: dbConfig.dialect,
    host: dbConfig.host,
    port: dbConfig.port,
    define: {
      timestamps: false,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
)

sequelize
  .authenticate()
  .then(() => {
    consola.start('Connection has been established successfully!')
  })
  .catch((err) => {
    consola.error('Unable to connect to the database', err)
  })

exports.sequelize = sequelize
