const express = require("express");
const cors = require("cors");
const server = express();
const helmet = require("helmet");
const morgan = require("morgan");
const usersRouter = require("./users/users-router");
const totalsRouter = require("./totals/totals-router");
const monthTotalsRouter = require("./month/month-router");

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan("tiny"));
server.use("/api/users", usersRouter);
server.use("/api/totals", totalsRouter);
server.use("/api/month", monthTotalsRouter);

server.get("/", (req, res) => {
  res.send("The Server Is Running Chase!!!");
});

module.exports = server;
