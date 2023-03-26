const { client } = require("./client");

async function getAllPlanets() {
  const { rows } = await client.query(
    `SELECT id, planet_name
            FROM planets;
          `
  );

  return rows;
}

async function createPlanet({
  planet_name,
  name_origin,
  radius,
  orbit,
  rotation,
  sun_distance,
  planet_type_gas,
  moon_num,
  fact_one,
  fact_two,
  fact_three,
}) {
  try {
    const {
      rows: [planet],
    } = await client.query(
      `INSERT into planets(planet_name, name_origin, radius, orbit, rotation, sun_distance, planet_type_gas, moon_num, fact_one, fact_two, fact_three)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        RETURNING *;
        `,
      [
        planet_name,
        name_origin,
        radius,
        orbit,
        rotation,
        sun_distance,
        planet_type_gas,
        moon_num,
        fact_one,
        fact_two,
        fact_three,
      ]
    );

    return planet;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllPlanets,
  createPlanet,
};
