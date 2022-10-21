//If it is one of the licenses listed it will generate the badge, and links to that license.
function renderLicenseBadge(license) {
  if (license === 'MIT' || 'Mozilla' || 'ISC' || 'IBM') {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-green.svg)] (${renderLicenseLink(license)})`
  }
  else {
    return ;
  }
}

// links to the licenses' information
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`;
  }
  if (license === 'Mozilla') {
    return `https://www.mozilla.org/en-US/MPL/2.0/`;
}

  if (license === 'ISC'){
    return `https://opensource.org/licenses/ISC`;
  }
  if (license === 'IBM')
    return `https://www-40.ibm.com/software/sla/sladb.nsf/sla/software_policies/`;
}
//if one of these licenses are selected a 'license' section will be generated based on where it is called.
function renderLicenseSection(license) {
  if (license === 'MIT' || 'Mozilla' || 'ISC' || 'IBM') {
    return `##License ${license}`;
  }else {
    return;
  }
}

// function to create markdown for readme.
//Uses the user input from inquirer prompt in the index.js in order to fill out each section
function generateMarkdown(data) {
  return `# ${data.title} <br>
  ${renderLicenseBadge(data.license)} <br>
    ## Table of Contents <br>
    [Description](#description)  
    [Installation](#installation)  
    [Usage](#usage)  
    [License](#license)  
    [Contributing](#contributing)  
    [Tests](#tests)  
    [Questions](#questions)  
    
    ## Description:
    ${data.description}  

    ___  

    ## Installation:
    ${data.installation}  

    ___  
    ## Usage:
    ${data.usage}  

    ___  

    ${renderLicenseSection (data.license)}  

    ___  

    ## Contributing:
    ${data.contributing}  

    ___  

    ## Tests:
    ${data.tests}  

    ___  

    ## Questions:
    <https://github.com/${data.username}>  
    ${data.email}
`
};
//exports this file in order to be used for index.js
module.exports = generateMarkdown;
