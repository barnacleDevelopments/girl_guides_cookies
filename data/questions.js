/*
==========================================
Assignment_3: Program 2
Author: Devin Davis
Date: October 30th, 2020
File: questions.js
===========================================
*/

const Question = require("../classes/Question")

let questions = [
new Question("string", `Type a phrase (or quit to exit program)`, "phrase"), 
new Question("any", "type a comman seperated list if letters to redact", "replacers"), 
new Question("any", "Enter a replacement string", "symbole")
]
module.exports = questions