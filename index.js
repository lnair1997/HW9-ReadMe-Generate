const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
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
        message: "Usage"
    },
    {
        type: "list",
        name: "license",
        message: "License: ",
        choices: [
            "MIT",
            "Apache",
            "GPL v3",
            "BSD 3-clause",
            "Other",
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Contribution"
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
}

function init() {

}

init();
