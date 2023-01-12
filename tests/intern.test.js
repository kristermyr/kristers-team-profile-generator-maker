const Intern = require ('../lib/Intern');

test ('Intern properties test', () => {
    const intern = new Intern ('Krister', '4343','krister90@gmail.com','Minnetonka');
  
     expect(intern.school).toBe('Minnetonka');
     expect(intern.Name).toBe('Krister');
     expect(intern.Id).toBe('4343');
     expect(intern.Email).toBe('krister90@gmail.com')
  
  });