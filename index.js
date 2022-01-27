const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Brief description of your project?',
    },
    {
      type: 'input',
      name: 'deployed',
      message: 'Add link to deployed application.'
    },
    {
      type: 'input',
      name: 'Github',
      message: 'Provide a link to your Github Repo',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'What are the steps require to install your project?'
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Provide Instructions/Examples for use. Add Screenshots.',
    },
    {
      type: 'input',
      name: 'Credits',
      message: 'List any collaborators or references used.',
    },
    {
      type: 'list',
      name: 'License',
      message: 'Select a license.',
      choices: ['MIT', 'Apache 2.0', 'GNU GPL 3.0']
    },
    {
      type: 'input',
      name: 'Contribute',
      message: 'How to contribute to this project.',
    },
    {
      type: 'input',
      name: 'Tests',
      message: 'Write tests for the application and examples how to run them here',
    },
    {
      type: 'input',
      name: 'Email',
      message: 'Enter email address here.',
    },

  ]);
};
function generateREADME({ title, description, deployed, github, installation, license, usage, credits, contribute, tests, email }) {


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