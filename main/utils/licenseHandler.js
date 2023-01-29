const setLicense = (license) => {
    switch (license) {
        case 'MIT License':
            license = "[here](./assets/mitlicense)"
        break;
        case 'Apache License':
            license = "[here](./assets/apachelicense)"
        break;
        case 'GPLv3':
            license = "[here](./assets/gnugpl3license)"
        break;
        case 'Unlicensed':
            license = "[here](./assets/unlicense)"
        break;
    }
    
    return license;
}

const renderLicenseBadge = (license) => {
    let licenseBadge = ""
    switch (license) {
        case 'MIT License':
           licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        break;
        case 'Apache License':
            licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        break;
        case 'GPLv3':
            licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        break;
        case 'Unlicensed':
            licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
        break;
    }
    return licenseBadge;
  }
  
  exports.setLicense = setLicense;
  exports.renderLicenseBadge = renderLicenseBadge;

