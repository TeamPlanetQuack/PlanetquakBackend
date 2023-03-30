const { client } = require("./client");
const bcrypt = require("bcrypt");
const {getAllPlanets, createPlanet, getPlanetByName} = require("./index");
const { createMoon, getMoonById, getAllMoons, getMoonsByPlanetId, getMoonByName, getMoonsSmallerThan, getMoonsBiggerThan, countMoonsByPlanetId } = require("./moons");
const { planetData, moonData } = require("./moonsandplanets");
const { quizQuestions } = require("./quizdata");
const { createQuestion } = require("./questions");



async function dropTables() {
  try {
    console.log("Starting to drop tables...");
    await client.query(`
    DROP TABLE IF EXISTS questions;
    DROP TABLE IF EXISTS dwarf;
    DROP TABLE IF EXISTS moons;
    DROP TABLE IF EXISTS planets;
    DROP TYPE IF EXISTS dwarf_name;
    DROP TYPE IF EXISTS dwarf_type;
    DROP TYPE IF EXISTS planet_name;
    DROP TYPE IF EXISTS planet_type;
    `);
    console.log("Finished dropping tables");
  } catch (error) {
    console.log("Error dropping tables");
    throw error;
  }
}

async function createTables(){
  try {
    console.log("Starting to build tables...");
    await client.query(`
    CREATE TYPE planet_name AS ENUM ('Mercury', 'Mars', 'Earth', 'Venus', 'Jupiter', 'Saturn', 'Uranus', 'Neptune');
    CREATE TYPE planet_type AS ENUM ('gas', 'rocky');
    CREATE TYPE dwarf_name AS ENUM ('Pluto', 'Ceres', 'Makemake', 'Haumea', 'Eris');
    CREATE TYPE dwarf_type AS ENUM ('gas', 'rocky');

    CREATE TABLE planets (
      id SERIAL PRIMARY KEY,
      name planet_name,
      name_origin VARCHAR(255),
      radius DECIMAL(10,2),
      orbit VARCHAR(255),
      rotation VARCHAR(255),
      sun_distance VARCHAR(255),
      type planet_type,
      moon_num INT NOT NULL DEFAULT(0),
      facts TEXT[]
  );

    CREATE TABLE moons (
      id SERIAL PRIMARY KEY,
      planet_id INTEGER REFERENCES planets(id),
      moon_name VARCHAR(255),
      discovered TEXT,
      history TEXT,
      moon_radius DECIMAL(10,2)
    );

    CREATE TABLE dwarf (
      id SERIAL PRIMARY KEY,
      name dwarf_name,
      name_origin VARCHAR(255),
      radius DECIMAL(10,2),
      orbit VARCHAR(255),
      rotation VARCHAR(255),
      sun_distance VARCHAR(255),
      type planet_type,
      facts TEXT[]
  );

    CREATE TABLE questions (
      id SERIAL PRIMARY KEY,
      question text NOT NULL,
      correct_answer text NOT NULL,
      incorrect_answers TEXT [] NOT NULL
    );


    `);
    console.log("Finished building tables");
  } catch (error) {
    console.error("Error building tables");
    throw error;
  }
}

async function createInitialPlanets() {
  try {

    console.log("Starting to create planets...");
    await Promise.all(planetData.map(createPlanet))
    console.log("Finished creating planets!");

  } catch (error) {
    console.error("Error creating planets!");
    throw error;
  }
}
async function createInitialMoons(){
  try {

    console.log("Starting to create moons")
    await Promise.all(moonData.map(createMoon))
    console.log("Finished creating moons")

  } catch (error) {
throw error;
  }
}
async function createInitialQuestions(){
  try {

    console.log("Starting to create quiz questions")
    await Promise.all(quizQuestions.map(createQuestion))
    console.log("Finished creating questions")

  } catch (error) {
throw error;
  }
}

async function buildingDB() {
  try {
    client.connect();
    await dropTables();
    await createTables();
    await createInitialPlanets();
    await createInitialMoons();
    await createInitialQuestions();
  } catch (error) {
    console.log("error during building");
    throw error;
  }
}
async function testDB(){
  console.log("Starting to test database");

  console.log("all planets");
  const allPlanets= await getAllPlanets()
  console.log(allPlanets, "All the planets")

  console.log("planet name");
  const planetName= await getPlanetByName("Mercury")
  console.log(planetName, "Planet name")

  console.log("getting moon by id");
  const moonId= await getMoonById(2)
  console.log(moonId, "this is moon 2")

  console.log("all the moons");
  const allMoons= await getAllMoons()
  console.log(allMoons, "All the moons")

  console.log("Get moons by planet id")
  const planetMoon= await getMoonsByPlanetId(4)
  console.log(planetMoon, "moons for mars")

  console.log("get moon by name")
  const moonName= await getMoonByName("Moon")
  console.log(moonName, "should be our moon")

  console.log("getting small moons")
  const smallMoons= await getMoonsSmallerThan(2)
  console.log(smallMoons, "moons smaller then 2km")

  console.log("getting large moons")
  const largeMoons= await getMoonsBiggerThan(1000)
  console.log(largeMoons, "moons bigger then 1000km")

  console.log("Counting moons on planets")
  const jupCount= await countMoonsByPlanetId(5)
  console.log(jupCount, "are how many moons Jupiter has")

  console.log("Counting moons on planets")
  const satCount= await countMoonsByPlanetId(6)
  console.log(satCount, "are how many moons Saturn has")
}

buildingDB()
  .then(testDB)
  .catch(console.error)
  .finally(() => client.end());
