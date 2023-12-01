// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  else if (license === "Boost") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  }
  else if (license === "Eclipse") {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  }
  else if (license === "Unlicense") {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let stringToReturn = "## License\n";
  if (license === "Apache") {
    stringToReturn += "This Open Source software is released under the [Apache](https://opensource.org/licenses/Apache-2.0) license.";
    return stringToReturn;
  }
  else if (license === "MIT") {
    stringToReturn += "This Open Source software is released under the [MIT](https://opensource.org/licenses/MIT) license.";
    return stringToReturn;
  }
  else if (license === "Boost") {
    stringToReturn += "This Open Source software is released under the [Boost](https://www.boost.org/LICENSE_1_0.txt) license.";
    return stringToReturn;
  }
  else if (license === "Eclipse") {
    stringToReturn += "This Open Source software is released under the [Eclipse](https://opensource.org/licenses/EPL-1.0) license.";
    return stringToReturn;
  }
  else if (license === "Unlicense") {
    stringToReturn += "This Open Source software is released under the [Unlicense](http://unlicense.org/).";
    return stringToReturn;
  }
  else {
    return "";
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'No License') {
    return renderLicenseLink(license);
  }
  else {
    return "";
  }
}
//renders table of contents
function renderTableOfContents(data) {
tableOfContents = "## Table of Contents";
tableOfContents += "\n[Description](#description)  \n[Usage](#usage)  \n[Credits](#credits)  \n";
if (data.license != "No License") {
  tableOfContents += "[License](#license)  \n";
}
tableOfContents += "[Tests](#tests)  \n[Questions](#questions)  \n";
return tableOfContents;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n` + renderLicenseBadge(data.license) + "\n" + renderTableOfContents(data) + `## Description\n${data.description}\n## Installation\n${data.installation}\n## Usage\n${data.usage}\n## Credits\n${data.contributions}\n` + renderLicenseSection(data.license) + `\n## Tests\n${data.tests}\n## Questions\nPlease reach out to me if you have any questions.  \nGitHub Username: ${data.username}  \nEmail: ${data.email}`;
}

module.exports = generateMarkdown;
