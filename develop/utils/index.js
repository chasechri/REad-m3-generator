// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = (readmeData) => {
  console.log(`
  README information 
  `);
  return prompt([
    {
      type: "input",
      name: "title",
      message: "Please enter the title of your project",
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
