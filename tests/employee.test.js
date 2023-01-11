const Employee = require ('../lib/Employee');

test ('Employee properties test', () => {
    const employee = new Employee ('Krister', '4343',   'krister90@gmail.com','Minnetonka');
  
     expect(employee.Name).toBe('Krister');
     expect(employee.Id).toBe('4343');
     expect(employee.Email).toBe('krister90@gmail.com')
  
  });