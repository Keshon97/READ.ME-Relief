// TODO: Create an array of questions for user input
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents (href), Installation, Usage, License, Contributing, Tests, and Questions
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },   
    {
        type: 'input',
        message: 'Please write the description for your project.',
        name: 'description',
    },   
    {
        type: 'input',
        message: 'Please write the installation process for your project if necessary.',
        name: 'Installation',
    },   
    {
        type: 'input',
        message: 'Please write instructions or examples of how to use your project.',
        name: 'usage',
    },   
    {
        type: 'list',
        message: 'Please select a license:',
        name: 'license',
        choices: ['MIT', 'Mozilla', 'ISC', 'IBM', 'none'],
    },   
    {
        type: 'input',
        message: 'Please write instructions on how others can contribute to your project.',
        name: 'contrtibuting',
    },   
    {
        type: 'input',
        message: 'Please write any tests if necessary.',
        name: 'tests'
    },   
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },   
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
