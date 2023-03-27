const express = require("express");
const apiRouter = express.Router();

const planetRouter = require("./planets");
apiRouter.use("/planets", planetRouter);

const moonRouter = require("./moons");
apiRouter.use("/moons", moonRouter);

apiRouter.get("*", (req, res, next) => {
  res.status(404);
  res.send({
    message: "Not Found",
  });
});

apiRouter.use((error, req, res, next) => {
  res.send({
    name: error.name,
    message: error.message,
  });
});

module.exports = apiRouter;