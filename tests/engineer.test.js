const Engineer = require ('../lib/Engineer');

test ('Engineer value test', () => {
const engineer = new Engineer ('Krister', '4343', 'krister90@gmail.com','kristermyr')

expect(engineer.name).toEqual(expect.any(String));
});