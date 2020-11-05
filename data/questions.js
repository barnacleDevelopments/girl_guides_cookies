/*
==========================================
Assignment_3: Program 3
Author: Devin Davis
Date: November 5h, 2020
File: questions.js
===========================================
*/

const Question = require("../classes/Question")

let guideQuestions = {
    one: new Question("string", `Enter the name of guide #`, ),
    two: new Question("number", `Enter the number of boxes sold by`)
}

module.exports = guideQuestions