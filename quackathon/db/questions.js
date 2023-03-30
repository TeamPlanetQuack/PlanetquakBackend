const { client } = require("./client");

async function createQuestion({
  question,
  correct_answer,
  incorrect_answers,}){
    try {
      const {rows:[questions]}= await client.query(
        `
        INSERT INTO questions (question, correct_answer, incorrect_answers)
        VALUES ($1, $2, $3)
        RETURNING *;`
      , [question, correct_answer, incorrect_answers]);
      return questions
    } catch (error) {
      throw error;
    }
  }

  async function getAllQuestions(){
    try {
      const {rows: questions}= await client.query(`
      SELECT *
      FROM questions
      `);
      return questions;
    } catch (error) {
      throw error
    }
  }

  async function getTenQuestions(){
    try {
      const {rows: questions}= await client.query(`
      SELECT *
      FROM questions
      ORDER BY random()
      LIMIT 10;

      `);
      return questions;
    } catch (error) {
      throw error
    }
  }



  module.exports = {
    createQuestion,
    getAllQuestions,
    getTenQuestions
  };
