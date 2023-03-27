const express = require("express");

const {createPlanet, getAllPlanets} = require("../db/planets");
const planetRouter = express.Router();

planetRouter.use("/", (req, res, next) => {
    next();
})

planetRouter.get("/", async (req, res) => {
  try {
  const planets = await getAllPlanets();
  
    res.send({
      planets,
    });
  } catch (err) {
    console.log(err.message);
    next();
  }
  });

module.exports = planetRouter;