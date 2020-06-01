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

  ## <a name="installation"></a> Installation:
  \`\`\` ${data.installation} \`\`\` 

  ## <a name="usage"></a> Usage-
   ${data.usage}

  ## <a name="license"></a> License-
  License used: ![license](https://img.shields.io/badge/license-${data.license}-GREEN)

  ## <a name="contributing"></a> Contribution-
   ${data.contributing}

  ## <a name="tests"></a> Tests:
  \`\`\` ${data.tests} \`\`\` 
    
  ## <a name="questions"></a> Questions-
  > ${data.questions}
  `;
}

module.exports = generateMarkdown;
