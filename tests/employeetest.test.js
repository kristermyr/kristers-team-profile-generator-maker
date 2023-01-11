const Employee = require ('../lib/Employee');

test ('employee value test', () => {
const employee = new Employee ('Krister', '4343', 'krister90@gmail.com')

expect(employee.name).tobe('Krister')
expect(employee.id).tobe('4343')
expect(employee.email).tobe('krister90@gmail.com')
expect(employee.addName()).tobe('Krister')
expect(employee.addId()).tobe('4343')
expect(employee.addEmail()).tobe('krister90@gmail.com')
})