const { client } = require("./client");

async function createMoon({
  planet_id,
  moon_name,
  discovered,
  history,
  moon_radius}){
    try {
      const {rows:[moons]}= await client.query(
        `
        INSERT INTO moons (planet_id, moon_name, discovered, history, moon_radius)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;`
      , [planet_id, moon_name, discovered, history, moon_radius]);
      return moons
    } catch (error) {
      throw error;
    }
  }

  async function getAllMoons(){
    try {
      const {rows: moons}= await client.query(`
      SELECT *
      FROM moons
      `);
      return moons;
    } catch (error) {
      throw error
    }
  }

  async function getMoonById(id){
    try {
      const{rows:[moon]}= await client.query(`
      SELECT *
      FROM moons
      WHERE id=$1
      `, [id]);
      if(!moon){
        throw {
          name: "MoonNotFound",
          message: `Could not find a moon with that ${id}`,
        };
      }
      return moon;
    } catch (error) {
      throw error
    }
  }

async function getMoonByName(moonName) {
  try {
    const { rows: [moon] } = await client.query(`
      SELECT *
      FROM moons
      WHERE moon_name=$1
    `, [moonName]);

    if (!moon) {
      throw {
        name: "MoonNotFound",
        message: `Could not find a moon with the name ${moonName}`,
      };
    }

    return moon;
  } catch (error) {
    throw error;
  }
}


  async function getMoonsByPlanetId(planet_id){
    try {
      const {rows: moons}= await client.query(`
      SELECT *
      FROM moons
      WHERE planet_id=${planet_id}
      `);
      if (moons.length === 0) {
        throw {
          name: "NoMoonsOnPlanet",
          message: `Couldn't find any moons for planet ${planet_id}`,
        };
      }
      return moons;
    } catch (error) {
      throw error
    }
  }
  async function getMoonsSmallerThan(num) {
    try {
      const { rows: moons } = await client.query(
        `
        SELECT *
        FROM moons
        WHERE moon_radius < $1
        `,
        [num]
      );
      if(moons.length==0){return "No moons that small"}
      return moons;
    } catch (error) {
      throw error;
    }
  }
  async function getMoonsBiggerThan(num) {
    try {
      const { rows: moons } = await client.query(
        `
        SELECT *
        FROM moons
        WHERE moon_radius > $1
        `,
        [num]
      );
      if(moons.length==0){return "No moons that big"}
      return moons;
    } catch (error) {
      throw error;
    }
  }

  async function countMoonsByPlanetId(planet_id) {
    try {
      const { rows } = await client.query(
        `
        SELECT COUNT(*)
        FROM moons
        WHERE planet_id = $1
        `,
        [planet_id]
      );
      return rows[0].count;
    } catch (error) {
      throw error;
    }
  }



module.exports={
createMoon,
getAllMoons,
getMoonById,
getMoonsByPlanetId,
getMoonByName,
getMoonsBiggerThan,
getMoonsSmallerThan,
countMoonsByPlanetId
}
