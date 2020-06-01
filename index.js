const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown")

const questions = [
    {
        type: "input",
        message: "Title of the project?",
        name: "title"
    },
    {
        type: "input",
        message: "Description of the project",
        name: "description"
    },
    {
        type: "input",
        message: "Installation",
        name: "installation"
    },
    {
        type: "input",
        message: "Usage",
        name: "usage"
    },
    {
        type: "list",
        message: "License",
        name: "license",
        choices: [
            "MIT",
            "GPLv2",
            "Apache",
            "GPLv3",
            "BSD3-clause",
            "Other",
        ]
    },
    {
        type: "input",
        message: "Contributing",
        name: "contributing"
    },
    {
        type: "input",
        message: "Tests:",
        name: "tests"
    },
    {
        type: "input",
        message: "Questions:",
        name: "questions"
    },
    {
        type: "input",
        message: "Please enter your github username:",
        name: "username"
    }
];

function writeToFile(fileName, data) {
}

function init() {

}

init();
