const express = require("express");

const { getAllPlanets, getPlanetById, getPlanetByName } = require("../db/planets");
const planetRouter = express.Router();

planetRouter.use((req, res, next) => {
  console.log("A request is being made to planets");
  next();
});

planetRouter.get("/", async (req, res, next) => {
  try {
    const planets = await getAllPlanets();

    res.send(planets);
  } catch ({ name, message, error }) {
    next({
      name: "NoPlanets",
      message: "Couldn't get Planets",
      error: "NoPlanets",
    });
  }
});

planetRouter.get("/:planet_id", async (req, res, next) =>  {
  const {planet_id} = req.params

  try {
    const planets = await getPlanetById(planet_id); 

    res.send({planets}
      
    );
  } catch ({ name, message }) {
    next({ name, message });
  }

})

planetRouter.get("/:planetName", async (req, res, next) =>  {
  const {planetName} = req.params

  try {
    const planets = await getPlanetByName(planetName); 

    res.send({planets}
      
    );
  } catch ({ name, message }) {
    next({ name, message });
  }

})

module.exports = planetRouter;
