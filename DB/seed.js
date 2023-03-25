const { client } = require("./client");
const bcrypt = require("bcrypt");

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
      role planet_name NOT NULL,
      name_origin VARCHAR(255),
      fact_one VARCHAR(255),
      fact_two VARCHAR(255),
      fact_three VARCHAR(255),
      radius DECIMAL(10,2),
      orbit VARCHAR(255),
      rotation VARCHAR(255),
      sun_distance VARCHAR(255),
      planet_type_gas BOOLEAN DEFAULT false,
      moon_num INT NOT NULL DEFAULT(0)
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
