const Intern = require ('../lib/Intern');

test ('Intern School test', () => {
const intern = new Intern ('Krister', '4343', 'krister90@gmail.com','Minnetonka');

expect(intern.school).toEqual(expect.any(String));


});

