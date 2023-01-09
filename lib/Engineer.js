const Engineer = require("./Employee");

class Engineer extends Employee {
    constructor(Github){
    this.Github = Github;
    }  

    getGithub(){
        return this.Github;
    }
    
    getRole(){
        return this.Engineer;
    } 


}
module.exports = Engineer;