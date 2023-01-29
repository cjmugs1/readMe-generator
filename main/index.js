// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const { generateReadMe } = require('./utils/generateReadMe')

// TODO: Create an array of questions for user input

// Question 1: project title   (name = projectTitle, msg = What is your project called?)
// Question 2: description                 (section title = Description,    name = description,    msg = "Describe the what, why, and how of your project in a few words.")
// Question 3: installation instructions   (section title = Installation,   name = installation,   msg = "Provide step by step instructions on installing your project.")
// Question 4: usage information           (section title = Usage,          name = usage,          msg = "Provide step by step instructions for running and using your project ")
// Question 5: contribution guidelines     (section title = Contributing,   name = contributing,   msg = "Describe your project in a few words.")
// Question 6: license                     (section title = License,        name = license,        msg = "Which license would you like to use?")
// Question 7: github username             (section title = Questions?,     name = username,       msg = "What is your GitHub username?")
// Question 8: email                       (section title = Questions?,     name = email,          msg = "What is your email? (this will be a point of contact for people with questions about the repo.)


const readMeGenerator = () => {
inquirer
  .prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is your project called?",
    },
    {
      type: "input",
      name: "description",
      message: "Describe the what, why, and how of your project in a few words.",
    },
    {
      type: "input",
      name: "installation",
      message: "Provide step by step instructions on installing your project.",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide step by step instructions for running and using your project.",
    },
    {
      type: "list",
      name: "contributing",
      message: "How would you like to tell users how to contribute to your project?",
      choices: [
        'Standardized contribution guideline',
        'Write it myself'
      ]
    },
    {
      type: "list",
      name: "license",
      message: "Which license would you like to use?",
      choices: [
        'MIT License',
        'Apache License',
        'GPLv3',
        'Unlicensed'
      ]
    },
    {
      type: "input",
      name: "gitUsername",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message:
        "What is your email? (this will be a point of contact for people with questions about the repo.)",
    },
  ])
  .then(async (answers) => {
    const generatedReadMe = await generateReadMe(answers);

    fs.writeFile("generatedREADME.md", generatedReadMe, (err) =>
      err
        ? console.log(err)
        : console.log("Successfully created your projects README!")
    );
  });
}

readMeGenerator();







// TEST INQUIRERS:



// inquirer
//   .prompt([
//     {
//       type: 'expand',
//       message: 'Conflict on `file.js`: ',
//       name: 'overwrite',
//       choices: [
//         {
//           key: 'y',
//           name: 'Overwrite',
//           value: 'overwrite',
//         },
//         {
//           key: 'a',
//           name: 'Overwrite this one and all next',
//           value: 'overwrite_all',
//         },
//         {
//           key: 'd',
//           name: 'Show diff',
//           value: 'diff',
//         },
//         new inquirer.Separator(),
//         {
//           key: 'x',
//           name: 'Abort',
//           value: 'abort',
//         },
//       ],
//     },
//   ])
//   .then((answers) => {
//     console.log(JSON.stringify(answers, null, '  '));
//   });





// var { Observable } = require("rxjs");
// let emitter;

// var prompts = Observable.create(function(e) {
//   emitter = e;
//   // need to start with at least one question here
//   emitter.next({
//     type: "list",
//     name: "fruits",
//     message: "What is your favorite fruit?",
//     choices: [
//       {
//         name: "Banana"
//       },
//       {
//         name: "Apple"
//       },
//       {
//         name: "Pear"
//       }
//     ]
//   });
// });

// let times = 0;

// inquirer.prompt(prompts).ui.process.subscribe(
//   (q) => {
//     let dots = new Array(times).fill(".").join("");

//     if (q.answer.toLowerCase() === "pear") {
//       console.log("That's Great. I would never forget a Pear-eater.");
//       emitter.complete();
//     }

//     emitter.next({
//       type: "list",
//       name: "fruits",
//       message:
//         "Sorry, what is your favorite fruit? I forgot, was it " +
//         q.answer +
//         ", or something else?",
//       choices: [
//         {
//           name: "Uh, Banana.." + dots,
//           value: "banana"
//         },
//         {
//           name: "Uh, Apple.." + dots,
//           value: "apple"
//         },
//         {
//           name: "Pear!",
//           value: "pear"
//         }
//       ]
//     });

//     times++;
//   },
//   error => {
//     console.log("Hm, an error happened. Why?");
//   },
//   complete => {
//     console.log("I think we are done now.");
//   }
// );