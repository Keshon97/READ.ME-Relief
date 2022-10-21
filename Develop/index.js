const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//An array of objects for my questions.
const questions = [
    {//the type is how the user can respond. For this it is input so the user has to type their answer.
        type: 'input',
        //The question the user sees.
        message: 'What is the title of your project?',
        //what the answer is stored as
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
        name: 'installation',
    },   
    {
        type: 'input',
        message: 'Please write instructions or examples of how to use your project.',
        name: 'usage',
    },   
    {// Will give a list of options instead of user input
        type: 'list',
        message: 'Please select a license:',
        name: 'license',
        //the selections the user can choose from
        choices: ['MIT', 'Mozilla', 'ISC', 'IBM', 'none'],
    },   
    {
        type: 'input',
        message: 'Please write instructions on how others can contribute to your project.',
        name: 'contributing',
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

function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) => {
        if(err)
        return (err);
    })
}

// when called it will return a readme file based on the questions and answers from the inquier prompts
function init() {
    return inquirer.prompt(questions)
    .then(function(data) {
        console.log(data)
        writeToFile('README.md', generateMarkdown(data));

    })
}

// Function call to initialize app
init();
