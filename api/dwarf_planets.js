const express = require("express");

const { getAllDwarfPlanets, getDwarfPlanetById, getDwarfPlanetByName } = require("../db/dwarf_planets");
const dwarfRouter = express.Router();

dwarfRouter.use((req, res, next) => {
  console.log("A request is being made to planets");
  next();
});

dwarfRouter.get("/", async (req, res, next) => {
  try {
    const dwarf_planets = await getAllDwarfPlanets();

    res.send(dwarf_planets);
  } catch ({ name, message, error }) {
    next({
      name: "NoDwarfPlanets",
      message: "Couldn't get DwarfPlanets",
      error: "NoDwarfPlanets",
    });
  }
});

dwarfRouter.get("/:id", async (req, res, next) =>  {
  const {id} = req.params

  try {
    const dwarfPlanetId = await getDwarfPlanetById(id); 

    res.send({dwarfPlanetId}
      
    );
  } catch ({ name, message }) {
    next({
      name:"NoDwarfPlanetId",
      message: `Couldn't find dwarf planet by ${id}`,
      error:"no dwarfplanetId"
    })
  }

})

dwarfRouter.get("/name/:name", async (req, res, next) =>  {
  const {name} = req.params
  try {
    const dwarfPlanetName = await getDwarfPlanetByName(name); 

    res.send({dwarfPlanetName}
      
    );
  } catch ({ name, message }) {
    next({
      name:"NoDwarfPlanetName",
      message: `Couldn't find dwarf planet by ${name}`,
      error:"no dwarf planet name"
    });
  }

})

module.exports = dwarfRouter;
