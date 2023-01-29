
const { setLicense, renderLicenseBadge} = require('./licenseHandler');
const { setContributing } = require('./contributingHandler');


// TODO: Create an array of questions for user input

// Question 1: project title   (name = project title, msg = What is your project called?)
// Question 2: description                 (section title = Description,    name = description,    msg = "Describe the what, why, and how of your project in a few words.")
// Question 3: installation instructions   (section title = Installation,   name = installation,   msg = "Provide step by step instructions on installing your project.")
// Question 4: usage information           (section title = Usage,          name = usage,          msg = "Provide step by step instructions for running and using your project ")
// Question 5: contribution guidelines     (section title = Contributing,   name = contributing,   msg = "Describe your project in a few words.")
// Question 6: test instructions           (section title = License,        name = license,        msg = "Which license would you like to use?")
// Question 7: github username             (section title = Questions?,     name = username,       msg = "What is your GitHub username?")
// Question 8: email                       (section title = Questions?,     name = email,          msg = "What is your email? (this will be a point of contact for people with questions about the repo.)


// function which will generate the entire readMe file from the users answers using template literals. then it will write to file using fs. function. (this is better than writing the fs function to create a file then append each response to it one by one.)
const generateReadMe = async ({ projectTitle, description, installation, usage, contributing, license, gitUsername, email }) => {

contributing = await setContributing(contributing);
licenseBadge = await renderLicenseBadge(license);
license = await setLicense(license);

return `
# ${projectTitle}

${licenseBadge}

## Description
*the what, why, and how of my project:*  
<br/>
${description}
<br/><br/>

## Table of Contents
- [Installation](#installation)  
- [Usage](#usage)  
- [Contributing Guidelines](#contributing)  
- [License](#license)  
- [Contact](#questions)
<br/><br/>

## Installation
*how to install my project and begin running the development environment:*  
<br/>
${installation}
<br/><br/>

## Usage
*instructions and examples for use.*  
<br/>
${usage}
<br/><br/>

## Contributing
*my project's contribution guidelines*  
<br/>
${contributing}
<br/><br/>

## License
*project license*  
<br/>
${license}
<br/><br/>

## Questions?
*questions about this project? contact me with the below*  
Github Profile: [${gitUsername}](https://github.com/${username})  
Email: ${email}  
---`
};

exports.generateReadMe = generateReadMe;
