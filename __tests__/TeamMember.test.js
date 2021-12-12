const TeamMember = require('../lib/TeamMember');

test('creates a team member object', () => {
    const teamMember = new TeamMember('Jordan', 2, 'test@test.com',);

    expect(teamMember.name).toBe('Jordan');
    expect(teamMember.id).toEqual(expect.any(Number));
    expect(teamMember.email).toBe('test@test.com');
});