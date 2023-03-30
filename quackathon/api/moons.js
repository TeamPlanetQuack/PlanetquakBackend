const express = require("express");
const { getAllMoons, getMoonById, getMoonByName, getMoonsByPlanetId, getPlanetById, getMoonsSmallerThan, getMoonsBiggerThan } = require("../db");
const moonRouter = express.Router();

moonRouter.use((req, res, next) => {
  console.log("A request is being made to moons")
    next();
})

moonRouter.get("/", async(req, res, next) => {
  try {
    console.log("In here?")
  const allMoons = await getAllMoons();

    res.send(allMoons);
  } catch ({ name, message, error }) {
    next({
      name: "NoMoons",
      message: "Couldn't get Moons",
      error: "NoMoons",
    });
  }
  });

moonRouter.get("/name/:name", async (req, res, next)=>{
  const {name}=req.params;
  try {
    const moonName=await getMoonByName(name);
    res.send(moonName)
  } catch (error) {
    next({
      name:"NoMoonName",
      message: `Couldn't find moon by ${name}`,
      error:"no moon Name"
    })
  }
});

  moonRouter.get("/:id", async (req, res, next)=>{
    const {id}=req.params;
    try {
      const moonId=await getMoonById(id);
      res.send(moonId)
    } catch (error) {
      console.log(error)
      next({
        name:"NoMoonId",
        message: `Couldn't find moon by ${id}`,
        error:"no moonId"
      })
    }
  })

  moonRouter.get("/planet/:planet_id", async(req,res, next)=>{
    const {planet_id}=req.params;
    const planet=await getPlanetById(planet_id)
    if(!planet){
      next({
        name:"NoPlanetFound",
        message: `Couldn't find any  planets by id${planet_id}`,
        name:"NoPlanet"
    })}
    try {
      const planetsMoons= await getMoonsByPlanetId(planet_id)

      res.send(planetsMoons)
    } catch (error) {
      next({
        name:"NoMoonsOnPlanet",
        message: `Couldn't find moons on planet id ${planet_id}`,
        error:"no moons"
      })
    }
  })

  moonRouter.get("/smallerthan/:num", async (req, res, next) => {
    const { num } = req.params;
    try {
      const moons = await getMoonsSmallerThan(num);
      res.send(moons);
    } catch (error) {
      next({
        name: "MoonsSmallerThanError",
        message: `Error retrieving moons smaller than ${num}`,
        error: error.message,
      });
    }
  });

  moonRouter.get("/biggerthan/:num", async (req, res, next) => {
    const { num } = req.params;
    try {
      const moons = await getMoonsBiggerThan(num);
      res.send(moons);
    } catch (error) {
      next({
        name: "MoonsSmallerThanError",
        message: `Error retrieving moons bigger than ${num}`,
        error: error.message,
      });
    }
  });




module.exports = moonRouter;
