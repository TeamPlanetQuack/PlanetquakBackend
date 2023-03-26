const { client } = require("./client");

async function createMoon({
  planet_id,
  moon_name,
  history,
  moon_radius}){
    try {
      const {rows:[moons]}= await client.query(
        `
        INSERT INTO moons (planet_id, moon_name, history, moon_radius)
        VALUES ($1, $2, $3, $4)
        RETURNING *;`
      , [planet_id, moon_name, history, moon_radius]);
      return moons
    } catch (error) {
      throw error;
    }
  }


module.exports={
createMoon
}
