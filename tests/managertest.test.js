const Manager = require ('../lib/Manager');

test ('manager value test', () => {
const employee = new Manager ('Krister', '4343', 'krister90@gmail.com','6565')

expect(employee.officeNumber).tobe('6565')
expect(employee.getOfficeNumber()).toBe('6565')
})