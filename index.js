const generateMarkdown = require("./src/generateMarkdown")
const fs = require ('fs');
const path = require("path");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern")

const menu = () => {                                //prompts questions asking which employee you would like to add
     inquirer.prompt (
        {
            type: "list",
            message: "Select the Employee you would like to add",
            name: "selectEmployee",
            choices: ["Manager","Engineer", "Intern","Completed"],
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
    const employees = [];                           // array of the selected classes
        const addManager = () => {                
            inquirer.prompt ([                      //prompts questions
         {
            type: "input",                                              // moves forward with the appropriate questions for the selected class
            message:"What is the managers name?",
            name: "name",
            validate:(value) =>{if(value){return true} else {return 'I need an answer to continue'}}   // validates, need an answer to continue
        
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
        const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber)       // pushes the new information to the array
        employees.push(manager)
        menu()
    })
};

const addEngineer = () => {                     
    inquirer.prompt ([                                  //promps questions
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
        employees.push(engineer)  // pushes the new information to the array
        menu()
    })
};
const addIntern = () => {
    inquirer.prompt ([     //prompts questions
        {
            type: "input",
            message:"What is the Intern's name?",
            name: "name",
            validate:(value) =>{if(value){return true} else {return 'I need an answer to continue'}}
        
        },
        {
            type: "input",
            message:"Please enter the Intern's ID.",
            name: "id",
            validate:(value) =>{if(value){return true} else {return 'I need an answer to continue'}}

        },
        {
            type: "input",
            message:"What is the Intern's e-mail address?",
            name: "email",
            validate:(value) =>{if(value){return true} else {return 'I need an answer to continue'}}

        },
        {
            type: "input",
            message:"What is the Intern's School?",
            name: "school",
            validate:(value) =>{if(value){return true} else {return 'I need an answer to continue'}}

        },
        ])
    .then (answers => {
        const intern = new Intern (answers.name, answers.id, answers.email, answers.school)
        employees.push(intern)  // pushes the new information to the array
        menu()
    })
};

        menu()     //executes menu function


const writeFileSync = (data) => {                               //creates the new HTMl file and send information to the generate markdown file
    return new Promise ((resolve, reject) => {
    fs.writeFile('./dist/index.html', data, err => {
      if(err) {
        reject(err);
        return;
      }else
      resolve({
        good:true,
        message:'HTML File Created'
      });
      
      
    });
});
};