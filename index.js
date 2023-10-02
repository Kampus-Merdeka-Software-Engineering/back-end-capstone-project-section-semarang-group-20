const express = require("express");
const { consola } = require("consola");
const cors = require("cors");
const http = require("http");
const { getVariables } = require("./src/utils/getEnv");
const router = require("./src/routes")

const app = express();
const PORT = getVariables("PORT");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// api route
app.use('/api', router)

const server = http.createServer(app);
const onListening = () => {
  const address = server.address();
  consola.start(
    `Server running on port ${PORT}, http://localhost:${address.port}`
  );
};

server.listen(PORT);
server.on("listening", onListening);