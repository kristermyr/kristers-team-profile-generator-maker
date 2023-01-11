const inquirer = require("inquirer");
const Employee = require('./lib/Employee')
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const generateMarkdown = require("./src/generateMarkdown")
const fs = require ('fs');
const path = require("path");




const Team = [];

const menu = () => {
     inquirer.prompt (
        {
            type: "list",
            message: "Select the Employee you would like to add",
            name: "selectEmployee",
            choices: ["Manager","Engineer", "intern","Completed"],
            validate:(value) =>{if(value){return true} else {return 'I need an answer to continue'}}
        }),
        .then((answer) => {
            if(answer.selectEmployee ==="Manager"){
                addManager();
            }
            if (answer.selectEmployee ==="Engineer"){
                addEngineer();
            }
            if (answer.selectEmployee ==="Intern"){
                addIntern();
            }
            if (answer.selectEmployee ==="Completed"){
                console.log(employees)
                writeFile(generateMarkdown(employees))
            }
        });


        const addManager = () => {
            inquirer.prompt ([
         {
            type: "input",
            message:"What is the managers name?",
            name: "id",
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

const writeFile = (data) => {
    fs.writeFile('./dist/index.html', data, err => {
      if(err) {
        console.log(err)
        return;
      } else {
        console.log("Success! Your HTML file has been created.")   //message to user when readme file has been created
      }
    })
  }
 /* function init() {
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
  */