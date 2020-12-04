const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const userInput = () =>
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
        name: "contributions",
        message: "Are there any contributors or websites that need to be acknowledged?",
    },
    {
        type: "input",
        name: "tests",
        message: "Are there any tests included?",
    },
    {
        type: "input",
        name: "githubUser",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the contact email for the project?",
    },
]);

const generateReadme = (response) =>
`
# ${response.title} ![License](https://img.shields.io/badge/License-${response.license}-blue.svg "License Badge")
    
# Table of Contens
    - [Description](##description)
    - [Installation](##installation)
    - [Usage](##usage)
    - [License](##license)
    - [Contributions](##contributions)
    - [Tests](#tests)
    - [Questions](#questions)
        
## Description:
    ${response.description}
            
## Installation:
    ${response.installation}
        
## Usage:
    ${response.usage}

## License:
    ${response.license}
    
## Contributions:
    ${response.contributions}

## Tests:
    ${response.tests}

## Questions:
    Questions about the project can either be directed to:
    [GitHub Profile](https://github.com/${response.username})
    ${response.email}
`;

