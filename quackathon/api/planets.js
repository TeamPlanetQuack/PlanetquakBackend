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

planetRouter.get("/:id", async (req, res, next) =>  {
  const {id} = req.params

  try {
    const planetId = await getPlanetById(id); 

    res.send({planetId}
      
    );
  } catch ({ name, message }) {
    next({
      name:"NoPlanetId",
      message: `Couldn't find planet by ${id}`,
      error:"no planetId"
    })
  }

})

planetRouter.get("/name/:name", async (req, res, next) =>  {
  const {name} = req.params
  try {
    const planetName = await getPlanetByName(name); 

    res.send({planetName}
      
    );
  } catch ({ name, message }) {
    next({
      name:"NoPlanetName",
      message: `Couldn't find planet by ${name}`,
      error:"no planet name"
    });
  }

})

module.exports = planetRouter;
