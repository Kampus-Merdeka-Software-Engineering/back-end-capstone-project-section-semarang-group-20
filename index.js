const http = require('node:http')
const express = require('express')
const { consola } = require('consola')
const cors = require('cors')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const httpStatus = require('http-status')
const { getVariables } = require('./src/utils/getEnv')
const router = require('./src/routes')
const optionsDocs = require('./src/config/docs')
const { ValidationError } = require('./src/utils/validator')

const app = express()
const PORT = getVariables('PORT') || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// api route
app.use('/api', router)

// api validation checker
app.use((err, req, res, next) => {
  if (err instanceof ValidationError)
    return res.status(err.statusCode).json(err)

  return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err)
})

// docs
const specs = swaggerJsdoc(optionsDocs)
app.use(
  '/api/docs',
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true }),
)

const server = http.createServer(app)
function onListening() {
  const address = server.address()
  consola.start(
    `Server running on port ${PORT}, http://localhost:${address.port}`,
  )
}

server.listen(PORT)
server.on('listening', onListening)
