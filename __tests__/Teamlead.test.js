const Teamlead = require('../lib/Teamlead');

test('creates a teamlead object', () => {
    const teamlead = new Teamlead('Jordan', 2, 'test@test.com', 2);

    expect(teamlead.name).toBe('Jordan');
    expect(teamlead.id).toEqual(expect.any(Number));
    expect(teamlead.email).toBe('test@test.com');
    expect(teamlead.officeNumber).toEqual(expect.any(Number));
});