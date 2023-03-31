const { client } = require("./client");

async function getAllDwarfPlanets() {

  try {
    const { rows } = await client.query(
      `SELECT *
            FROM dwarf;
          `
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

async function createDwarfPlanet({
  name,
  name_origin,
  radius,
  orbit,
  rotation,
  sun_distance,
  type,
  facts,
}) {
  try {
    const {
      rows: [dwarf_planet],
    } = await client.query(
      `INSERT into dwarf(name, name_origin, radius, orbit, rotation, sun_distance, type, facts)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
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
        facts,
      ]
    );

    return dwarf_planet;
  } catch (error) {
    throw error;
  }
}

async function getDwarfPlanetById(dwarf_id) {
  const {
    rows: [dwarf_planet],
  } = await client.query(`
    SELECT *
    FROM dwarf
    WHERE id=$1
    `, [dwarf_id]);
  ;
  if (!dwarf_planet) {
    console.log("No planet id found");
  } else {
    return dwarf_planet;
  }
}

async function getDwarfPlanetByName(dwarfName) {
const { rows: [dwarf_planet] } = await client.query(
    `
      SELECT *
      FROM dwarf
      WHERE name=$1
      `,
    [dwarfName]
  );
  if (!dwarf_planet) {
    console.log("No planet name found");
  } else {
    return dwarf_planet;
  }
}

module.exports = {
    getAllDwarfPlanets,
    createDwarfPlanet,
    getDwarfPlanetById,
    getDwarfPlanetByName
};
