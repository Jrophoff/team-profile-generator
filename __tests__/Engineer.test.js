const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Jordan', 2, 'test@test.com', 'test');

    expect(engineer.name).toBe('Jordan');
    expect(engineer.id).toEqual(expect.any(Number));;
    expect(engineer.email).toBe('test@test.com');
    expect(engineer.github).toBe('test');
})