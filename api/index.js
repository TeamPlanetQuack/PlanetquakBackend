const express = require("express");
const apiRouter = express.Router();

apiRouter.use("/", async(req, res, next) => {
  console.log("find some Space info");
  next();
});

apiRouter.get("/", (req, res, next) => {
  console.log("A get request was made to /api");
  res.send({ message: "success" });
});



const planetRouter = require("./planets");
apiRouter.use("/planets", planetRouter);

// const moonRouter = require("./moons");
// apiRouter.use("/moons", moonRouter);

module.exports = apiRouter;
