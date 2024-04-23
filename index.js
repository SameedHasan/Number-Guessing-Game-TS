#!/usr/bin/env node
// npm i inquirer
// npm i @types/inquirer -D
// npm i @types/node -D
import inquirer from "inquirer";
const numberToGuess = Math.floor(Math.random() * 10);
function isValidSingleDigit(input) {
    const regex = /^[0-9]$/;
    return regex.test(input);
}
// console.log("numberToGuess :>> ", numberToGuess);
inquirer
    .prompt([
    {
        name: "num",
        message: "Guess the number (0-9): ",
        type: "input",
        validate: function (input) {
            if (!isNaN(input) && isValidSingleDigit(input)) {
                return true;
            }
            else {
                return "Please enter a valid number";
            }
        },
    },
])
    .then((answers) => {
    if (Number(answers.num) === numberToGuess) {
        console.log(`Congratulations! The number you have guessed is correct.`);
    }
    else {
        console.log(`Oops! The number you have guessed is incorrect.`);
    }
})
    .catch((error) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    }
    else {
        // Something else went wrong
    }
});
