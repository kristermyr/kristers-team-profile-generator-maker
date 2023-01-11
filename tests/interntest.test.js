const Intern = require ('../lib/Intern');

test ('Intern value test', () => {
const employee = new Intern ('Krister', '4343', 'krister90@gmail.com','Minnetonka')

expect(employee.school).tobe('kristermyr')
expect(employee.addschool()).toBe('Minnetonka')
})