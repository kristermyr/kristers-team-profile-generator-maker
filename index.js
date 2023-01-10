const inquirer = require("inquirer");
const Employee = require('./lib/Employee')
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const generateMarkdown = require("./generateMarkdown")
const fs = require ('fs');
const path = require("path");




const Team = [];

const addManager = () => {
    return inquirer.prompt ([
        {
            type: "input",
            message: "Who is the team Manager?",
            name: "name",
            validate:(value) =>{if(value){return true} else {return 'I need an answer to continue'}}

        },
        {
            type: "input",
            message:"Please enter the manager's ID.",
            name: "id",
            validate:(value) =>{if(value){return true} else {return 'I need an answer to continue'}}

        },
        {
            type: "input",
            message:"What is the manager's e-mail address?",
            name: "email",
            validate:(value) =>{if(value){return true} else {return 'I need an answer to continue'}}

        },
        {
            type: "input",
            message:"What is the manager's Office Number?",
            name: "officeNumber",
            validate:(value) =>{if(value){return true} else {return 'I need an answer to continue'}}

        },
    ])
    .then (managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        Team.push(managerInput);
    })
};

    const promtMenu = () => {
        return inquirer.prompt([
            {
                type: "list",
                message: "Select what you want to do next.",
                name: "menu",
                choices: ['add an engineer', 'add an intern', 'complete my team']
            },
        ])
    }

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
      if(err) {
        console.log(err)
        return;
      } else {
        console.log("Success! Your HTML file has been created.")   //message to user when readme file has been created
      }
    })
  }
  function init() {
    addManager()
        .then(Team => {
            return generateMarkdown(Team);
        })
      .then(function(Team) {
        writeFile('Index.HTML', generateMarkdown(Team));      //writes content of GeneratemarkDown function to readme
        console.log("Success! Check your HTML file")
      })
  }
  init();