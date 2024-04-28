#!/usr/bin/env node

// npm i inquirer
// npm i @types/inquirer -D
// npm i @types/node -D
import inquirer from "inquirer";

const numberToGuess = Math.floor(Math.random() * 10);
function isValidSingleDigit(input: string): boolean {
  const regex = /^[0-9]$/;
  return regex.test(input);
}
// console.log("numberToGuess :>> ", numberToGuess);

// Main function to handle user input
async function main() {
  // Interactive menu
  while (true) {
    const answers = await inquirer.prompt([
      {
        name: "num",
        message: "Guess the number (0-9): ",
        type: "input",
        validate: function (input) {
          if (!isNaN(input) && isValidSingleDigit(input)) {
            return true;
          } else {
            return "Please enter a valid number";
          }
        },
      },
    ]);

    if (Number(answers.num) === numberToGuess) {
      console.log(`Congratulations! The number you have guessed is correct.`);
      break;
    } else {
      console.log(`Oops! The number you have guessed is incorrect.Try Again.`);
    }
  }
}

// Start the application
main().catch(console.error);
