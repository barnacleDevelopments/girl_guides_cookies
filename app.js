/*
==========================================
Assignment_3: Program 3
Author: Devin Davis
Date: November 5h, 2020
File: questions.js
===========================================
*/

const Question = require("./classes/Question")
const guideQuestions = require("./data/questions")
const readlineSync = require("readline-sync")

/**
 * // create a guide class // 
Properties: name, boxesSold 

// functions // 
checkPrize(cookieBoxesSold) - gets the prize according to cookies sold

getAverage(cookieBoxesSold) - calculates the average amount of boxes sold

createQuestionSet() { - function that asks a set of questions
    askQuestion1()
    askQuestion2()
}

askMultiQuestionSet(numOfGuides) - takes the number of guides and asks
                                   a set of questions for each 

 */


class Guide {
    constructor(name, boxesSold) {
        this.name = name
        this.boxesSold = boxesSold

    }
}

/**
 *   @param {string} anwser a string to validate 
 *   @param {string} typeExpect a string defining the type of anwser to expect 
 */

 // function validate anwser type
const validateType = (anwser, expectType) => {
    if (expectType === "number") {
      return isNaN(anwser);
    }
  
    if (expectType === "string") {
      return !isNaN(anwser);
    }
  };

/**
 *   @param {string} anwser a string to validate 
 *   @param {string} typeExpect a string defining the type of anwser to expect 
 */

const getAverage = (num, devider) => {
    return num / devider
}

/**
 *  @param {number} the number of times to run a function
 *  @param {function} func a function to excute at each loop
 *  @summary This function excutes a callback a certain amount of times and gathers the results into an array.
 */

const doItAndGather = (amount, func) => {
    let results = []
   for(let i = 0; i < amount; i++) {
       results.push(func(i))
   }
   return results
}

/**
  *  @param {object} question a single question 
  *  @param {string} typeExpect a string defining the type of anwser to expect
  */

// function - ask question
const askQuestion = (question, typeExpect) => {
    let anwser = readlineSync.question(question);
    while(validateType(anwser, typeExpect)) {
        anwser = readlineSync.question(question);
    }
    if(anwser.toLocaleLowerCase() === "quit") {
      console.clear()
      process.exit()
    }
    return anwser;
  };

/**
 *  @param {number} num the question number
 *  @param {object} questions a object containing quide questions
 * @summary This function asks two guide questions 
 */

const askGuideQuestions = (num, questions) => {
    let questionOne = questions.one.name.concat(num);
    let anwser1 = askQuestion(`${questionOne}: `, "string")
    let questionTwo = questions.two.name.concat(" " + anwser1, "number");
    let anwser2 = askQuestion( `${questionTwo}: `);
    return {
        anwser1,
        anwser2
    } 
 }


 let anwsers = doItAndGather(5, (num) => {
     askGuideQuestions(num + 1, guideQuestions)
 })







