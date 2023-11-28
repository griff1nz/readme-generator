// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
// Function call to initialize app
init('generated-file/README.md');
// TODO: Create an array of questions for user input
const questions = ["Enter Title: ", "Enter Description: ", "Enter Installation Instructions: ", "Enter Usage Information: ", "Enter Contributions: ", "Enter Test Instructions: ", "License Type: ", "GitHub Username: ", "Email Address: "];

inquirer
    .prompt([
        {
            type: 'input',
            message: questions.shift(),
            name: 'title',
        },
        {
            type: 'input',
            message: questions.shift(),
            name: 'description',
        },
        {
            type: 'input',
            message: questions.shift(),
            name: 'installation',
        },
        {
            type: 'input',
            message: questions.shift(),
            name: 'usage',
        },
        {
            type: 'input',
            message: questions.shift(),
            name: 'contributions',
        },
        {
            type: 'input',
            message: questions.shift(),
            name: 'tests',
        },
        {
            type: 'list',
            message: questions.shift(),
            name: 'license',
            choices: ['Apache', 'MIT', 'Boost', 'Eclipse', 'Unlicense']
        },
        {
            type: 'input',
            message: questions.shift(),
            name: 'username',
        },
        {
            type: 'input',
            message: questions.shift(),
            name: 'email',
        }
    ])
    .then ((answers) => {
        // writeToFile("generated-file/README.md", answers);
        writeToFile("generated-file/README.md", answers);
        
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init(fileName) {
    fs.writeFile(fileName, " ", (err) =>
    err ? console.error(err) : console.log('Initialized!'));
}


