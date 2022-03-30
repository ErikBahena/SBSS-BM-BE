const express = require("express");
const server = express();
const helmet = require("helmet");
const cors = require("cors");

server.use(express.json());
server.use(helmet());
server.use(cors());

const authRouter = require("./auth/auth-router");
const userRouter = require("./user/user-router");
const clientRouter = require("./client/client-router");
const employeeRouter = require("./employee/employee-router");
const jobRouter = require("./job/job-router");

server.use("/api/auth", authRouter);
server.use("/api/user", userRouter);
server.use("/api/client", clientRouter);
server.use("/api/employee", employeeRouter);
server.use("/api/job", jobRouter);

server.use((err, req, res, next) => {
  console.log(err.stack, err.status, "message:", err.message);
  res.status(err.status || 500).json({ ...err, stack: err.stack });
});

module.exports = server;
