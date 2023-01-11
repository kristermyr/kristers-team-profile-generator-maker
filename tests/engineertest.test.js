const Engineer = require ('../lib/Engineer');

test ('Engineer value test', () => {
const employee = new Engineer ('Krister', '4343', 'krister90@gmail.com','kristermyr')

expect(employee.github).tobe('kristermyr')
expect(employee.addGithub()).toBe('kristermyr')
})