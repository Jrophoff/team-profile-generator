const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Jordan', 2, 'test@test.com', 'MSU');

    expect(intern.name).toBe('Jordan');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('test@test.com');
    expect(intern.school).toBe('MSU');
});