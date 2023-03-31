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


const questionsRouter = require("./questions");
apiRouter.use("/questions", questionsRouter);

const planetRouter = require("./planets");
apiRouter.use("/planets", planetRouter);

const moonRouter = require("./moons");
apiRouter.use("/moons", moonRouter);

const dwarfRouter = require("./dwarf_planets");
apiRouter.use("/dwarf_planets", dwarfRouter);

apiRouter.use((error, req, res, next) => {
  error.error == "Unauthorized" && res.status(401);
  const errorObj = {
    error: error.name,
    name: error.name,
    message: error.message,
  };
  res.send(errorObj);
});

module.exports = apiRouter;
