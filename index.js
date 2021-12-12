const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/page-template');
const Engineer = require('./lib/Engineer')
const Teamlead = require('./lib/Teamlead')
const Intern = require('./lib/Intern')



const teamMembers = []

const addTeamlead = () => {

   return inquirer.prompt([
        {
            type: 'input',
            name: 'teamleadName',
            message: 'Enter the name of your teamlead?(required)',
            validate: teamleadNameInput => {
                if (teamleadNameInput) {
                    return true;
                } else {
                    console.log("Please enter your teamlead's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'teamleadId',
            message: "Enter the teamlead's ID?(required)",
            validate: teamleadIdInput => {
                if (teamleadIdInput) {
                    return true;
                } else {
                    console.log("Please enter your teamlead's ID!");
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'teamleadEmail',
            message: "Enter the teamlead's Email?(required)",
            validate: teamleadEmailInput => {
                if (teamleadEmailInput) {
                    return true;
                } else {
                    console.log("Please enter your teamlead's Email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'teamleadOfficeNumber',
            message: "Enter the teamlead's office number?(required)",
            validate: teamleadOfficeNumberInput => {
                if (teamleadOfficeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter your teamlead's office number!");
                    return false;
                }
            }
        }
    ])
    .then(teamMemberData => {
        const teamlead = new Teamlead(
            teamMemberData.teamleadName,
            teamMemberData.teamleadId,
            teamMemberData.teamleadEmail,
            teamMemberData.teamleadNum
            )
            teamMembers.push(teamlead) 
            addTeamMember()   
    })

    
};       

const addTeamMember = teamMemberData => {

    // if (!teamMemberData.data) {
    //     teamMemberData.data = []
    // }
    console.log(`
    ========================
    Add team members to team
    ========================
    `);
    return inquirer.prompt([
        {
            type: 'list',
            name: 'teamMemberPosition',
            message: 'what is the position of your teamMember?',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'teamMemberName',
            message: "Enter teamMember's name?(required)",
            validate: teamMemberIdInput => {
                if (teamMemberIdInput) {
                    return true;
                } else {
                    console.log("Please enter teamMember's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'teamMemberId',
            message: "Enter the teamMember's ID?(required)",
            validate: teamMemberIdInput => {
                if (teamMemberIdInput) {
                    return true;
                } else {
                    console.log("Please enter teamMember's ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'teamMemberEmail',
            message: "Enter the teamMember's Email?(required)",
            validate: teamMemberEmailInput => {
                if (teamMemberEmailInput) {
                    return true;
                } else {
                    console.log("Please enter teamMember's Email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the Engineer's GitHub?(required)",
            when: (input) => input.teamMemberPosition === 'Engineer',
            validate: engineerGithubInput => {
                if (engineerGithubInput) {
                    return true;
                } else {
                    console.log("Please enter Engineer's GitHub!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the Intern's School?(required)",
            when: (input) => input.teamMemberPosition === 'Intern',
            validate: internSchoolInput => {
                if (internSchoolInput) {
                    return true;
                } else {
                    console.log("Please enter Intern's School!");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddTeamMember',
            message: 'Would you like to add another teamMember?',
            default: false
        }
    ]) 
    .then(teamData => {
        // teamMemberData.data.push(teamData);
        if (teamData.teamMemberPosition === 'Engineer') { 
        const engineer = new Engineer(
            teamData.teamMemberName,
            teamData.teamMemberId,
            teamData.teamMemberEmail,
            teamData.github
            )
            teamMembers.push(engineer) 
        }

        if (teamData.teamMemberPosition === 'Intern') {
        const intern = new Intern(
            teamData.teamMemberName,
            teamData.teamMemberId,
            teamData.teamMemberEmail,
            teamData.school
            )
            teamMembers.push(intern) 
        }


        if (teamData.confirmAddTeamMember) {
            return addTeamMember();
        } else { generateMarkdown(teamMembers);
            return teamMemberData; 
        }
    });
};
addTeamlead()
// generateMarkdown(teamMembers);

// .then(teamMemberData => {
//     console.log(teamMembers)
//     return generateMarkdown(teamMembers);
// });
