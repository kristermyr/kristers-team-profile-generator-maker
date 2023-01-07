const inquirer = require("inquirer");
const fs = require ('fs');




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
        const manager = 
    })

}
