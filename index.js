const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/page-template');

const addManager = () => {

    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Enter the name of your team manager?(required)',
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log("Please enter manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: "Enter the team manager's ID?(required)",
            validate: managerIdInput => {
                if (managerIdInput) {
                    return true;
                } else {
                    console.log("Please enter manager's ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Enter the team manager's Email?(required)",
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true;
                } else {
                    console.log("Please enter manager's Email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOfficeNum',
            message: "Enter the team manager's office number?(required)",
            validate: managerOfficeNumInput => {
                if (managerOfficeNumInput) {
                    return true;
                } else {
                    console.log("Please enter manager's office number!");
                    return false;
                }
            }
        }
    ])
    .then(employeeData => console.log(employeeData));
};       

const addEmployee = employeeData => {

    if (!employeeData.data) {
        employeeData.data = []
    }
    console.log(`
    =====================
    Add employees to team
    =====================
    `);
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeePosition',
            message: 'what is the position of your employee?',
            choice: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "Enter the team employee's ID?(required)",
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log("Please enter employee's ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: "Enter the team employee's Email?(required)",
            validate: employeeEmailInput => {
                if (employeeEmailInput) {
                    return true;
                } else {
                    console.log("Please enter employee's Email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the Engineer's GitHub?(required)",
            when: (input) => input.EngineerPosition === 'Engineer',
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
            when: (input) => input.InternPosition === 'Intern',
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
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }
    ]) 
    .then(teamData => {
        employeeData.data.push(teamData);
        if (teamData.confirmAddEmployee) {
            return addEmployee(employeeData);
        } else {
            return employeeData;
        }  
    
    }); 
};

addManager()
// .then(addEmployee)
// .then(function(info) {
//     var dataString = generateMarkdown(info)
//     console.log(dataString);
// });