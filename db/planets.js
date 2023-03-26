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

module.exports = {
  getAllPlanets,
  createPlanet,
};
