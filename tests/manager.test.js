const Manager = require ('../lib/Manager');

test ('manager value test', () => {
const manager = new Manager ('Krister', '4343', 'krister90@gmail.com','6565')

expect(manager.name).toEqual(expect.any(String));
expect(manager.id).toEqual(expect.any(String));
expect(manager.email).toEqual(expect.any(String));
});