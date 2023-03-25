const { client } = require("./client");
const bcrypt = require("bcrypt");
const {createPlanet} = require("./index");

async function createInitialPlanets() {
  try {
    console.log("Starting to create planets...");

    const Mars = await createPlanet({
      planet_name: "Mars",
      name_origin: "Mars is named after the Roman God of war.",
      radius: "3390",
      orbit: "687 Earth Days",
      rotation: "24.6 Hours",
      sun_distance: "228 million km",
      planet_type: true, 
      moon_num: 2,
      fact_one: "Mars is colloquially known as the Red Planet due to its red appearance. It gets its red color from the oxidation of iron in its soil. ",
      fact_two: "Mars has the largest volcano in our solar system called Olympus Mons. ",
      fact_three: "Mars used to have liquid water. This is evidenced by the existence of ancient river valleys and floodplains, deltas, lakebeds, and sedimentary rock and mineral deposits. Today, all of Mars's water is frozen at its polar ice caps. "
    })

    console.log(Mars);

    console.log("Finished creating planets!");

  } catch (error) {
    console.error("Error creating planets!");
    throw error;
  }
}

async function dropTables() {
  try {
    console.log("Starting to drop tables...");
    await client.query(`
    DROP TABLE IF EXISTS moons;
    DROP TABLE IF EXISTS planets;
    DROP TYPE IF EXISTS planet_name;
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

    CREATE TABLE planets(
      id SERIAL PRIMARY KEY,
      planet_name VARCHAR(255),
      name_origin VARCHAR(255),
      radius DECIMAL(10,2),
      orbit VARCHAR(255),
      rotation VARCHAR(255),
      sun_distance VARCHAR(255),
      planet_type_gas BOOLEAN DEFAULT false,
      moon_num INT NOT NULL DEFAULT(0),
      fact_one VARCHAR(255),
      fact_two VARCHAR(255),
      fact_three VARCHAR(255)
    );

    CREATE TABLE moons (
      id SERIAL PRIMARY KEY,
      planet_id INTEGER REFERENCES planets(id),
      moon_name VARCHAR(255),
      history VARCHAR(255),
      moon_radius DECIMAL(10,2)
    );
    `);
    console.log("Finished building tables");
  } catch (error) {
    console.error("Error building tables");
    throw error;
  }
}

async function buildingDB() {
  try {
    client.connect();
    await dropTables();
    await createTables();
    await createInitialPlanets();
  } catch (error) {
    console.log("error during building");
    throw error;
  }
}
async function testDB(){
  console.log("coming soon")
}

buildingDB()
  .then(testDB)
  .catch(console.error)
  .finally(() => client.end());
