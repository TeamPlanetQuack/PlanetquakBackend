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
      discovered TEXT,
      history TEXT,
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

    const Jupiter = await createPlanet({
      name: "Jupiter",
      name_origin: "Jupiter is named after the Roman King of the Gods and God of the sky and thunder. This is appropriate as it is the largest planet. ",
      radius: 71495,
      orbit: "4333 Earth Days",
      rotation: "9.93 Hours",
      sun_distance: "740 million km",
      type: "gas",
      moon_num: 80,
      fact_one: "Jupiter is the fastest rotating planet; the surface is moving at about 30 times the speed of Earth's surface. Due to its fast rotation, it has the shortest day of all the planets.",
      fact_two: "Jupiter's surface is marked by the Great Red Spot, a giant storm that has been blowing for over 300 years. The bands of different colors around Jupiter are clouds separated by jet streams, often spawning large cyclonic and anticyclonic storms that can last long periods of time.",
      fact_three: "Jupiter has rings, like the other Jovian planets, held in by its massive gravitational pull. Jupiter's rings are very faint and hard to observe."
    })


    console.log(Mercury);
    console.log(Venus);
    console.log(Earth);
    console.log(Mars);
    console.log(Jupiter);


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
      discovered:"Earth's only natural satellite is simply called the Moon because people didn't know other moons existed until Galileo Galilei discovered four moons orbiting Jupiter in 1610.",
      history: "In Latin, the Moon is called Luna, which is the main adjective for all things Moon-related: lunar.",
      moon_radius:1737.5
    })
    // end of Earth's moon
    // mars moons
    await createMoon({
      planet_id:4,
      moon_name:"Phobos",
      discovered:"Phobos was discovered on Aug. 17, 1877 by Asaph Hall.",
      history: "Ares is the Greek counterpart of the Roman god, Mars. Phobos is one of Ares sons and means fear.",
      moon_radius:11.1
    })
    await createMoon({
      planet_id:4,
      moon_name:"Deimos",
      discovered:"Deimos was discovered on Aug. 11, 1877 by Asaph Hall.",
      history: "Ares is the Greek counterpart of the Roman god, Mars. Deimos is one of Ares sons and means dread.",
      moon_radius:6.2
    })
    // end of mars moons
    //Jupiter's moons
    await createMoon({
      planet_id:5,
      moon_name:"Adrastea",
      discovered:"Adrastea was discovered in July 1979 by the Voyager science team.",
      history: "Adrastea is named after the Cretian nymph who took care of Zeus for his mother Rhea. Rhea entrusted her child to Adrastea to save him from her husband Cronus who would eat his children in order to maintain his rule.​",
      moon_radius:8.2
    })
    await createMoon({
      planet_id:5,
      moon_name:"Aitne",
      discovered:"Aitne was discovered on 9 December 2001 by Scott S. Sheppard, David C. Jewitt and Jan T. Kleyna at the Mauna Kea Observatory in Hawaii.",
      history: "Originally called S/2001 J11, Aitne was named for a Sicilian nymph said to have been raped by the Roman god Jupiter, while he was in the form of a vulture. The name derives from the Greek for 'I burn', and is associated with Sicily's volcano, Mount Etna.​",
      moon_radius:1.5
    })
    await createMoon({
      planet_id:5,
      moon_name:"Amalthea",
      discovered:"Amalthea was discovered Sept. 9, 1892 by Edward Emerson Barnard.",
      history: "Originally designated Jupiter V, Camille Flammarion suggested the name Amalthea for this moon. Amalthea is named for a naiad who nursed the newborn Jupiter. Amalthea is often depicted with a goat, whose milk is said to have fed the infant Jupiter.​",
      moon_radius:83.45
    })
    await createMoon({
      planet_id:5,
      moon_name:"Anake",
      discovered:"Ananke was discovered on Sept. 28, 1951 by Seth Barnes Nicholson on a photograph made with the 100-inch (2.5 m) Hooker telescope at the Mount Wilson Observatory in California.",
      history: "Ananke was named for the mother of Adrastea by Zeus, the Greek equivalent of the Roman god Jupiter. In other accounts, Adrastea is described as a nymph of Crete who was one of the nursemaids of the infant Zeus. Ananke is the personification of fate or necessity in ancient Greek literature, who rewards or punishes people for their deeds.​​",
      moon_radius:14
    })
    await createMoon({
      planet_id:5,
      moon_name:"Aoede",
      discovered:"Aoede was discovered Feb. 8, 2003 by Scott S. Sheppard, David C. Jewitt, Jan T. Kleyna, Yanga R. Fernandez, and Henry H. Hsieh at the Mauna Kea Observatory in Hawaii.",
      history: "Originally called S/2003 J7, Aoede was named for one of the Muses, who were daughters of Zeus, the Greek equivalent of the Roman god Jupiter. Aoede means song.",
      moon_radius:2
    })
    await createMoon({
      planet_id:5,
      moon_name:"Arche",
      discovered:"Arche was discovered Oct. 31, 2002, by Scott S. Sheppard at the Mauna Kea Observatory in Hawaii.",
      history: "Originally called S/2002 J1, Arche was named for one of the Muses, who were daughters of Zeus, the Greek equivalent of the Roman god Jupiter. Her name means 'beginning.'",
      moon_radius:1.5
    })
    await createMoon({
      planet_id:5,
      moon_name:"Autonoe",
      discovered:"Autonoe was discovered Dec. 10, 2001 by Scott S. Sheppard, David C. Jewitt, and Jan T. Kleyna at the Mauna Kea Observatory in Hawaii.",
      history: "Originally called S/2001 J1, Autonoe was named for the mother of the Graces by Jupiter, according to some authors.",
      moon_radius:2
    })
    await createMoon({
      planet_id:5,
      moon_name:"Callirrhoe",
      discovered:"Callirrhoe was discovered Oct. 19, 1999 via the 36-inch telescope on Kitt Peak, in the course of observations by the Spacewatch program of the University of Arizona. It was initially thought to be an asteroid, but calculations of its orbit by the Minor Planet Center at the Smithsonian Astrophysical Observatory revealed it to be a satellite of Jupiter.",
      history: "This object was originally called asteroid 1999 UX18 and then renamed S/1999 J1 upon discovery that it is a satellite of Jupiter. Ultimately, it was named 'Callirrhoe' after the daughter of the river god, Achelous, who persuaded Zeus (the Greek equivalent of the Roman god Jupiter) to instantly change her young sons into grown men so they could avenge the murder of their father.",
      moon_radius:4.3
    })
    await createMoon({
      planet_id:5,
      moon_name:"Callisto",
      discovered:"Callisto was discovered Jan. 7, 1610, by Italian scientist Galileo Galilei along with Jupiter’s three other largest moons: Ganymede, Europa and Io.",
      history: "Callisto is named for a woman turned into a bear by Zeus in Greek mythology. Zeus is identical to the Roman god Jupiter.",
      moon_radius:2410.3
    })

    //end of Jupiter's moons

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
