const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "title",
        message: "Title of the project?"
    },
    {
        type: "input",
        name: "description",
        message: "Description of the project?"
    },
    {
        type: "input",
        name: "installation",
        message: "Installations required: "
    },
    {
        type: "input",
        name: "usage",
        message: "Usage: "
    },
    {
        type: "list",
        name: "license",
        message: "License: ",
        choices: [
            "MIT",
            "Apache",
            "GPLv3",
            "BSD3-clause",
            "Other",
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Contribution: "
    },
    {
        type: "input",
        name: "tests",
        message: "Tests: "
    },
    {
        type: "input",
        name: "questions",
        message: "Questions: "
    }
];

function writeToFile(fileName, data) {

    fs.writeFile(fileName, generateMarkdown(data), err => err ? console.log(err) : console.log("Success! File created."));
};

function init() {

    inquirer.prompt(questions)
        .then(data => {
            writeToFile("newReadMe.md", data);
        })
        .catch(error => {
            console.log(error);
        });
};

init();
