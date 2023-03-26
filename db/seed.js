const { client } = require("./client");
const bcrypt = require("bcrypt");
const {createPlanet} = require("./index");
const { createMoon, getMoonById, getAllMoons, getMoonsByPlanetId, getMoonByName } = require("./moons");



async function dropTables() {
  try {
    console.log("Starting to drop tables...");
    await client.query(`
    DROP TABLE IF EXISTS moons;
    DROP TABLE IF EXISTS planets;
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

    CREATE TABLE planets(
      id SERIAL PRIMARY KEY,
      name planet_name,
      name_origin VARCHAR(255),
      radius DECIMAL(10,2),
      orbit VARCHAR(255),
      rotation VARCHAR(255),
      sun_distance VARCHAR(255),
      type planet_type,
      moon_num INT NOT NULL DEFAULT(0),
      fact_one TEXT,
      fact_two TEXT,
      fact_three TEXT
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

async function createInitialPlanets() {
  try {
    console.log("Starting to create planets...");

    const Mercury = await createPlanet({
      name: "Mercury",
      name_origin: "Mercury is named after the Roman God of swift travel, as it is the fastest moving planet in the night sky.",
      radius: 2440.00,
      orbit: "88 Earth Days",
      rotation: "59 Hours",
      sun_distance: "58 million km",
      type: "rocky",
      moon_num: 0,
      fact_one: "Mercury has almost no atmosphere. It gets blown away by solar wind. Instead, it has a very thin exosphere.",
      fact_two: "Mercury is covered in craters, like our moon. This is because it doesn't have an atmosphere to break up meteors and protect the surface from the barrage of impacts.",
      fact_three: "Mercury orbits the fastest of all the planets around the sun at 47 km/second. "
    })

    const Venus = await createPlanet({
      name: "Venus",
      name_origin: "Venus is named after the Roman God of love and beauty due to it being the brightest object in the sky aside from the Sun and the Moon.",
      radius: 6050.00,
      orbit: "225 Earth Days",
      rotation: "243 Earth Days",
      sun_distance: "108 million km",
      type: "rocky",
      moon_num: 0,
      fact_one: "Venus has an atmosphere thick with greenhouse gases, such as carbon dioxide. Venus is the hottest planet. Even though Mercury is closer to the sun, Venus has an atmosphere that holds on to the heat from the sun making it the most hot.",
      fact_two: "Venuss surface is covered in active volcanoes.",
      fact_three: "Venus is the only planet that rotates counterclockwise around its own axis. This means that sunset and sunrise would be opposite of what we see on Earth. The sun would rise in the west and set in the east. It also rotates very slowly making a day on Venus longer than a year on Venus."
    })

    const Earth = await createPlanet({
      name: "Earth",
      name_origin: "Earth is a Germanic word meaning “the ground”. It is the only planet that is not named after a Greek or Roman God.",
      radius: 6371,
      orbit: "365 Earth Days",
      rotation: "24 Hours",
      sun_distance: "150 million km",
      type: "rocky",
      moon_num: 1,
      fact_one: "Earth resides within the “habitable zone” of the Sun. This is the perfect distance from the Sun in which the temperatures are just right for liquid water to exist on the surface.",
      fact_two: "Earth is the only planet in our solar system with liquid water on the surface. This is what makes it the most unique and capable of sustaining life.",
      fact_three: "Earth is the only planet in our solar system with liquid water on the surface. This is what makes it the most unique and capable of sustaining life."
    })

    const Mars = await createPlanet({
      name: "Mars",
      name_origin: "Mars is named after the Roman God of war.",
      radius: 3390.00,
      orbit: "687 Earth Days",
      rotation: "24.6 Hours",
      sun_distance: "228 million km",
      type: "rocky",
      moon_num: 2,
      fact_one: "Mars is colloquially known as the Red Planet due to its red appearance. It gets its red color from the oxidation of iron in its soil. ",
      fact_two: "Mars has the largest volcano in our solar system called Olympus Mons. ",
      fact_three: "Mars used to have liquid water. This is evidenced by the existence of ancient river valleys and floodplains, deltas, lakebeds, and sedimentary rock and mineral deposits. Today, all of Mars's water is frozen at its polar ice caps. "
    })


    console.log(Mercury);
    console.log(Venus);
    console.log(Earth);
    console.log(Mars);


    console.log("Finished creating planets!");

  } catch (error) {
    console.error("Error creating planets!");
    throw error;
  }
}
async function createInitialMoons(){
  try {
    console.log("Starting to create moons")
   //earth's moon
    await createMoon({
      planet_id:3,
      moon_name:"Moon",
      history: "In Latin, the Moon is called Luna, which is the main adjective for all things Moon-related: lunar.",
      moon_radius:1740
    })
    // end of Earth's moon
    // mars moons
    await createMoon({
      planet_id:4,
      moon_name:"Phobos",
      history: "Ares is the Greek counterpart of the Roman god, Mars. Phobos is one of Ares sons and means fear.",
      moon_radius:11
    })
    await createMoon({
      planet_id:4,
      moon_name:"Deimos",
      history: "Ares is the Greek counterpart of the Roman god, Mars. Deimos is one of Ares sons and means dread.",
      moon_radius:6.2
    })
    // end of mars moons

    console.log("Finished creating moons")
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
  } catch (error) {
    console.log("error during building");
    throw error;
  }
}
async function testDB(){
  console.log("Starting to test database");

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
}

buildingDB()
  .then(testDB)
  .catch(console.error)
  .finally(() => client.end());
