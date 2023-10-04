const express = require("express");
const { consola } = require("consola");
const cors = require("cors");
const http = require("http");
const { getVariables } = require("./src/utils/getEnv");
const router = require("./src/routes");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const optionsDocs = require("./src/config/docs");

const app = express();
const PORT = getVariables("PORT") || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// api route
app.use("/api", router);

// docs
const specs = swaggerJsdoc(optionsDocs);
app.use(
  "/api/docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

const server = http.createServer(app);
const onListening = () => {
  const address = server.address();
  consola.start(
    `Server running on port ${PORT}, http://localhost:${address.port}`
  );
};

server.listen(PORT);
server.on("listening", onListening);
