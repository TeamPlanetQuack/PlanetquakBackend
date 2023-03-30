const express = require("express");
const { getAllQuestions, getTenQuestions } = require("../db/questions");
const questionsRouter = express.Router();

questionsRouter.use((req, res, next) => {
  console.log("A request is being made to questions")
    next();
})
questionsRouter.get("/", async(req, res, next) => {
  try {
  const allQuestions = await getAllQuestions();

    res.send(allQuestions);
  } catch ({ name, message, error }) {
    next({
      name: "NoQuestions",
      message: "Couldn't get Questions",
      error: "NoQuestions",
    });
  }
  });

  questionsRouter.get("/ten", async(req, res, next) => {
    try {
    const tenQuestions = await getTenQuestions();

      res.send(tenQuestions);
    } catch ({ name, message, error }) {
      next({
        name: "NoQuestions",
        message: "Couldn't get Questions",
        error: "NoQuestions",
      });
    }
    });


  module.exports = questionsRouter;
