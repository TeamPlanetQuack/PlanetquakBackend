const { client } = require("./client");

async function getAllPlanets() {
  try {
    const { rows } = await client.query(
      `SELECT *
            FROM planets;
          `
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

async function createPlanet({
  name,
  name_origin,
  radius,
  orbit,
  rotation,
  sun_distance,
  type,
  moon_num,
  facts,
}) {
  try {
    const {
      rows: [planet],
    } = await client.query(
      `INSERT into planets(name, name_origin, radius, orbit, rotation, sun_distance, type, moon_num, facts)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING *;
        `,
      [
        name,
        name_origin,
        radius,
        orbit,
        rotation,
        sun_distance,
        type,
        moon_num,
        facts,
      ]
    );

    return planet;
  } catch (error) {
    throw error;
  }
}

async function getPlanetById(planet_id) {
  const {
    rows: [planet],
  } = await client.query(`
    SELECT *
    FROM planets
    WHERE id=$1
    `, [planet_id]);
  ;
  if (!planet) {
    console.log("No planet id found");
  } else {
    return planet;
  }
}

async function getPlanetByName(planetName) {
const { rows: [planet] } = await client.query(
    `
      SELECT *
      FROM planets
      WHERE name=$1
      `,
    [planetName]
  );
  if (!planet) {
    console.log("No planet name found");
  } else {
    return planet;
  }
}

module.exports = {
  getAllPlanets,
  createPlanet,
  getPlanetById,
  getPlanetByName
};
