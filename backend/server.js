require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.listen(port, () => console.log(`\n=== API up on port: ${port} ===\n`));

module.exports = server;
