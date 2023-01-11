const Employee = require ('../lib/Employee');

test ('employee value test', () => {
const employee = new Employee ('Krister', '4343', 'krister90@gmail.com')

expect(employee.name).toEqual(expect.any(String));
expect(employee.id).toEqual(expect.any(String));
expect(employee.email).toEqual(expect.any(String));

})