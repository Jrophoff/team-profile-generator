const TeamMember = require('./TeamMember')

class Teamlead extends TeamMember{

    constructor(name, id, email, officeNumber) {

        super(name, id, email)

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return 'Teamlead'
    }
};   

module.exports = Teamlead;