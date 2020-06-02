function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Description-
  ${data.description}

  ### Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation:
  \`\`\` ${data.installation} \`\`\` 

  ## Usage-
   ${data.usage}

  ## License-
  License used: ![license](https://img.shields.io/badge/license-${data.license}-GREEN)

  ## Contribution-
   ${data.contributing}

  ## Tests:
  ${data.tests}
    
  ## Questions-
  > ${data.questions}
  `;
}

module.exports = generateMarkdown;
