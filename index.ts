#!/usr/bin/env node

// npm i inquirer
// npm i @types/inquirer -D
// npm i @types/node -D
import inquirer from "inquirer";

function isValidSingleDigit(input: string): boolean {
  const regex = /^[0-9]$/;
  return regex.test(input);
}

function getNumber(): number {
  return Math.floor(Math.random() * 10);
}

async function isPlayAgain(): Promise<boolean> {
  const answer = await inquirer.prompt({
    type: "list",
    name: "choice",
    message: "Do you want to play again? :",
    choices: ["Yes", "No"],
  });
  return answer.choice === "Yes" ? true : false;
}

// Main function to handle user inputyou
async function main() {
  // Interactive menu
  let numberToGuess = getNumber();
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
      const playAgain = await isPlayAgain();
      if (playAgain) {
        numberToGuess = getNumber();
      } else {
        break;
      }
      // break;
    } else {
      console.log(`Oops! The number you have guessed is incorrect.Try Again.`);
    }
  }
}

// Start the application
main().catch(console.error);
