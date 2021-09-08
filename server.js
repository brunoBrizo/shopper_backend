const http = require("http");
const app = require("./src/app");
const server = http.createServer(app);
require("dotenv").config();

const port = process.env.port || 3000;

server.listen(port);
