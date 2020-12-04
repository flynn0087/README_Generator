const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function userInput = () =>
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of the project?",
        },
        {
            type: "input",
            name: "description",
            message: "What is the description of the project?",
        },
        {
            type: "input",
            name: "installation",
            message: "What installation steps are needed to make the project usable?",
        },
        {
            type: "input",
            name: "usage",
            message: "What is the intended use of the project?",
        },
        {
            type: "list",
            name: "license",
            message: "What license does the project operate under?",
            choices: [
                "MIT",
                "GPLv2",
                "Apache",
                "GPLv3",
                "BSD 3=clause",
                "Other",
            ],
        },
        {
            type: "input",
            name: "contribution",
            message: "Are there any contributors or websites that need to be acknowledged?",
        },
        {
            type: "input",
            name: "test",
            message: "Are there any tests included?",
        },
        {
            type: "input",
            name: "issues",
            message: "How should issues with the project be submitted?",
        },
    ]);