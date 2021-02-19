// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ## Description
    ![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")
    
    ${data.description}
    ## Table of Contents:
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ## Contributing
    ${data.contributing}
    ## Tests
    ${data.tests}
    ## Questions
    For any questions, feel free to contact me  on [GitHub](https://github.com/${data.github}) or email me at ${data.email}
`;
}

module.exports = generateMarkdown;
