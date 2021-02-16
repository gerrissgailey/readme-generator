const inquirer = require("inquirer");
const fs = require('fs');

inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message:
        },
        {
            type: "input",
            name: "description",
            message:
        },
        {
            type: "input",
            name: "installation",
            message:
        },
        {
            type: "input",
            name: "usage",
            message:
        },
        {
            type: "input",
            name: "contributing",
            message:
        },
        {
            type: "input",
            name: "tests",
            message:
        },
        {
            type: "list"
            name: "license",
            message:
        },
        {
            type: "input",
            name: "github",
            message:
        },
        {
            type: "input",
            name: "email",
            message:
        },
    ])
    .then()