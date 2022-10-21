// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license) {
    return //link to license , not sure if need one for all or need one for each. Regardless think i need to call render license link here.
  }
}

// links for the licenses
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`
  }
  if (license === 'Mozilla') {
    return `https://www.mozilla.org/en-US/MPL/2.0/`
}

  if (license === 'ISC'){
    return `https://opensource.org/licenses/ISC`
  }
  if (license === 'IBM')
    return `https://www-40.ibm.com/software/sla/sladb.nsf/sla/software_policies/`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //
}

// function to create markdown for readme.
function generateMarkdown(data) {
  return `# ${data.title}
    //table of contents for each section(currently the links are not working and is not generating properly)
    ##Table of Contents
    [Descritpion](#description)
    [Installation](#installation)
    [Usage](#usage)
    [License](#license)
    [Contributing](#contributing)
    [Tests](#tests)
    [Questions](#questions)

    //Uses the user input in order to fill out each section
    ##Description:
    ${data.description}
    ##Installation:
    ${data.installation}
    ##Usage:
    ${data.usage}
    ##License:
    ${data.license}
    ##Contributing:
    ${data.contributing}
    ##Tests:
    ${data.tests}
    ##Questions:
    //need to add url for github
    ${data.username}
    ${data.email}
`
};
//exports this file in order to be used for index.js
module.exports = generateMarkdown;
