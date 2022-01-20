const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Where are you from?',
    },
    
  ]);
} ;
function generateREADME  ({ title, description, deployed, github, installation, license, usage, credits, contribute, tests, email }) {


  return `
  #${title}
  ## Table of Contents
  1.[Description](#Description)
  2.[Installation](#Installation)
  3.[Usage](#Usage)
  4.[Credits](#Credits)
  5.[License](#License)
  6.[Badges](#Badges)
  7.[Contribute](#Contribute)
  8.[Tests](#Tests)
  
  ## Description
  ${description}`;
}  
//   .then((answers) => {
//     const htmlPageContent = generateREADME(answers);

//     fs.writeFile('index.html', htmlPageContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created index.html!')
//     );
//   });

  
  
  // This is the init function using writefileSync to create the README file
// TODO: Create a function to write README file
// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then((answers) => fs.writeFileSync('generatedREADME.md', generateREADME(answers)))
        .then(() => console.log('Successfully wrote to readme.md'))
        .then(() => console.log('Successfully wrote to LICENSE.md'))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();