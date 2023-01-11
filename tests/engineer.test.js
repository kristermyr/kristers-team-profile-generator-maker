const Engineer = require ('../lib/Engineer');

test ('Engineer properties test', () => {
    const engineer = new Engineer ('Krister', '4343',   'krister90@gmail.com','kristermyr');
  
     expect(engineer.Name).toBe('Krister');
     expect(engineer.Id).toBe('4343');
     expect(engineer.Email).toBe('krister90@gmail.com')
     expect(engineer.github).toBe('kristermyr')
  });