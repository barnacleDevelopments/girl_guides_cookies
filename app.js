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



class Guide {
    constructor(name, boxesSold) {
        this.name = name
        this.boxesSold = boxesSold
        this.singleBoxSellers
    }
}

class GuideGroup {
  constructor(guideArray) {
    this.group = guideArray
    this.totalBoxes = 0
    this.averageBoxes = 0
    this.noBoxSellers = []
    this.averageGuides = []
    this.superGuides = []
  }

  getTotalBoxes = () => {
    let totalBoxes = 0
    this.group.forEach(guide => {
      return totalBoxes += guide.boxesSold
    })
    this.totalBoxes = totalBoxes
    return totalBoxes
  }

  getAverageBoxes = () => {
    let totalBoxes = this.getTotalBoxes()
    let averageBoxes = totalBoxes / this.group.length;
    this.averageBoxes = averageBoxes;
    return averageBoxes
  }

  getMostBoxesSold = () => {
    let mostBoxes = 0
    this.group.forEach(guide => {
      if(guide.boxesSold > mostBoxes) {
        mostBoxes = guide.boxesSold
      }
    });
    return mostBoxes
  }

  checkDoubles = () => {
    let lastGuide = {}
    this.group = this.group.map(guide => {
      if(lastGuide.prize === "Trip to Girl Guide Jamboree in Aruba") {
        guide.prize = "Tie for the trip"
        return guide
      }
      lastGuide = guide
      return guide
    })
  } 

  setPrizes() {
   this.group = this.group.map(guide => {
    if(guide.boxesSold <= 0) {
      guide.prize = ""
      return guide
     }

    if(guide.boxesSold === this.getMostBoxesSold()) {
      guide.prize = "Trip to Girl Guide Jamboree in Aruba"
      return guide
    }

    if(guide.boxesSold > this.getAverageBoxes()) {
      guide.prize = "Super Seller Badge"
      return guide
    }

    if(guide.boxesSold >= 1) {
      guide.prize = "Left Over Cookies"
      return guide
    }
     return guide
   })
   this.checkDoubles()
  }

  logPrizes = () => {
    let table = `Guide:        Prizes Won: \n----------------------------------------------\n`
    this.setPrizes()
    this.group.forEach(guide => {
     table = table.concat(`${guide.name}     - ${guide.prize} \n`)
    })
    console.log(table)
  }
 
}

/**
 *   @param {string} anwser a string to validate 
 *   @param {string} typeExpect a string defining the type of anwser to expect 
 */


const validateType = (anwser, expectType) => {
    if (expectType === "number") {
      return isNaN(anwser);
    }
  
    if (expectType === "string") {
      return !isNaN(anwser);
    }
  };


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

const askQuestion = (question, typeExpect) => {
    let anwser = readlineSync.question(question);
    while(validateType(anwser, typeExpect)) {
      console.log(`"${anwser}" is not a ${typeExpect}!`)
      anwser = readlineSync.question(question);
    }
    if(anwser.toLocaleLowerCase() === "quit") {
      console.clear()
      process.exit()
    }
    if(typeExpect === "number") {
      anwser = parseInt(anwser)
    }
    return anwser;
  };

/**
 *  @param {number} num the question number
 *  @param {object} questions a object containing quide questions
 *  @summary This function asks two guide questions 
 */

const askGuideQuestions = (num, questions) => {
    let questionOne = questions.one.name.concat(num);
    let anwser1 = askQuestion(`${questionOne}: `, "string")
    let questionTwo = questions.two.name.concat(" " + anwser1);
    let anwser2 = askQuestion( `${questionTwo}: `, "number");
    return {
        anwser1,
        anwser2
    } 
 }

/**
 *  @param {array} anwsers takes an array of question answers
 *  @summary This function asks two guide questions 
 */
const createGuides = (anwsers) => {
  let group = []
  anwsers.forEach(an => {
    group.push(new Guide(an.anwser1, an.anwser2))
  })
  return group
}

let numberOfGuides = readlineSync.question("Enter the number of guides selling cookies: ")

let anwsers = doItAndGather(numberOfGuides, (num) => {
  return askGuideQuestions(num + 1, guideQuestions)
})


// create a new guides group
const guidesGroup = new GuideGroup(createGuides(anwsers))

// log report to the console
guidesGroup.logPrizes()















