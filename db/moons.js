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

  async function getMoonById(moon_id){
    try {
      const{rows:[moon]}= await client.query(`
      SELECT *
      FROM moons
      WHERE id=${moon_id}
      `);
      if(!moon){
        return null;
      }
      return moon;
    } catch (error) {
      throw error
    }
  }

  async function getMoonByName(moonName){
    try {
      const{rows:moon}= await client.query(`
      SELECT *
      FROM moons
      WHERE moon_name=$1
      `, [moonName]) ;
      if(!moon){
        return null;
      }
      return moon;
    } catch (error) {
      throw error
    }
  }

  async function getMoonsByPlanetId(planet_id){
    try {
      const {rows: moons}= await client.query(`
      SELECT *
      FROM moons
      WHERE planet_id=${planet_id}
      `);
      return moons;
    } catch (error) {
      throw error
    }
  }

module.exports={
createMoon,
getAllMoons,
getMoonById,
getMoonsByPlanetId,
getMoonByName
}
