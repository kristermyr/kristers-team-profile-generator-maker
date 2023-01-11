const Manager = require ('../lib/Manager');

test ('Manager properties test', () => {
    const manager = new Manager ('Krister', '4343',   'krister90@gmail.com','555');
  
     expect(manager.Name).toBe('Krister');
     expect(manager.Id).toBe('4343');
     expect(manager.Email).toBe('krister90@gmail.com')
     expect(manager.officeNumber).toBe('555')
  });