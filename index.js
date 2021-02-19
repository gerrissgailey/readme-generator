const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Please enter a description for your project."
        },
        {
            type: "input",
            name: "installation",
            message: "Please enter installation instructions for your application. (NOTE: If there are no instructions, enter 'None'."
        },
        {
            type: "input",
            name: "usage",
            message: "How is your application used?"
        },
        {
            type: "input",
            name: "contributing",
            message: "How can someone else contribute to your project?"
        },
        {
            type: "input",
            name: "tests",
            message: "What are the test instructions for your application?"
        },
        {
            type: "list",
            name: "license",
            message: "Please select which license you used for your application",
            choices: ["APACHE", "MIT", "GPL", "BSD", "None"]
        },
        {
            type: "input",
            name: "github",
            message: "Please enter your GitHub username."
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address."
        },
    ])
    .then((data) => {
        const filename = `README.md`
        

        fs.writeFile(filename, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
    })