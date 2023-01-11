const inquirer = require("inquirer");
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern")

const generateMarkdown = require("./src/generateMarkdown")
const fs = require ('fs');
const path = require("path");




const employees = [];

const menu = () => {
     inquirer.prompt (
        {
            type: "list",
            message: "Select the Employee you would like to add",
            name: "selectEmployee",
            choices: ["Manager","Engineer", "intern","Completed"],
            validate:(value) =>{if(value){return true} else {return 'I need an answer to continue'}}
        })
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
                writeFileSync(generateMarkdown(employees))
            }
        });
    }

        const addManager = () => {
            inquirer.prompt ([
         {
            type: "input",
            message:"What is the managers name?",
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
    .then (answers => {
        const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber)
        employees.push(manager)
        menu()
    })
};

const addEngineer = () => {
    inquirer.prompt ([
        {
            type: "input",
            message:"What is the Engineer's name?",
            name: "name",
            validate:(value) =>{if(value){return true} else {return 'I need an answer to continue'}}
        
        },
        {
            type: "input",
            message:"Please enter the Engineer's ID.",
            name: "id",
            validate:(value) =>{if(value){return true} else {return 'I need an answer to continue'}}

        },
        {
            type: "input",
            message:"What is the Engineer's e-mail address?",
            name: "email",
            validate:(value) =>{if(value){return true} else {return 'I need an answer to continue'}}

        },
        {
            type: "input",
            message:"What is the Engineer's Office Number?",
            name: "officeNumber",
            validate:(value) =>{if(value){return true} else {return 'I need an answer to continue'}}

        },
        {
            type: "input",
            message:"What is the Engineers's github username?",
            name: "github",
            validate:(value) =>{if(value){return true} else {return 'I need an answer to continue'}}

        },
        ])
    .then (answers => {
        const engineer = new Engineer (answers.name, answers.id, answers.email, answers.officeNumber)
        employees.push(engineer)
        menu()
    })
};
const addIntern = () => {
    inquirer.prompt([
      { type: "input", name: "name", message: "Enter engineer name" },
      { type: "input", name: "id", message: "Enter employee id" },
      { type: "input", name: "email", message: "Enter employee email" },
      { type: "input", name: "school", message: "Enter employee school" },
    ])
    .then(answers => {
        const intern = new Intern(
            answers.name, 
            answers.id, 
            answers.email,
            answers.school)
        employees.push(intern)
        mainMenu()
      })
  };

        menu()


const writeFileSync = (data) => {
    return new Promise ((resolve, reject) => {
    fs.writeFile('./dist/index.html', data, err => {
      if(err) {
        reject(err);
        return;
      }
      resolve({
        good:true,
        message:'HTML File Created'
      });
      
      
    });
});
};