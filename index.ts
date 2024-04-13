#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber);

const answers = await inquirer.prompt([
  {
    name: "UserGuessNumber",
    type: "Number",
    message: "Please guess a number between 1 and 6:  ",
  },
]);

if (answers.UserGuessNumber === randomNumber) {
  console.log("Congratulations! You guessed correctly.");
} else {
  console.log("You guessed wrong number.");
}
