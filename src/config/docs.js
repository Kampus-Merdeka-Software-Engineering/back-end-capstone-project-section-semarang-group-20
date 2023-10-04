const { getVariables } = require('../utils/getEnv')

const PORT = getVariables('PORT')

module.exports = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'RevoShip API',
      version: '1.0.0',
      description: 'RevoShip Documentation API',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
      {
        url: 'https://be-semarang-20-production.up.railway.app',
      },
    ],
  },
  apis: ['./src/routes/*.router.js'],
}
