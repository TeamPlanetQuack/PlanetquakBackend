const express = require("express");

const {getAllPlanets} = require("../db/planets");
const planetRouter = express.Router();

planetRouter.use((req, res, next) => {
  console.log("A request is being made to planets")
    next();
})

planetRouter.get("/", async(req, res, next) => {
  try {
  const planets = await getAllPlanets();

    res.send(
      planets
    );
  } catch ({ name, message, error }) {
    next({
      name: "NoPlanets",
      message: "Couldn't get Planets",
      error: "NoPlanets",
    });
  }
  });

module.exports = planetRouter;
