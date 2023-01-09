const Employee = require("./Employee")

class Intern extends Employee  {
    constructor(School) {
        this.School = School;
    }

    getSchool(){
        return this.School;
    }
    
    getRole(){
        return this.Intern;
    }
}
module.exports = Intern;