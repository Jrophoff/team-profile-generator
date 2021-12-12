function generateMarkdown(data) {

const generateTeamlead = function (teamlead) {
    return `
    <div class="card" style="width: 18rem;">
     <div class="card-header">
     <h3>${teamlead.name}</h3>
     <h4>${teamlead.getRole()}</h4>
     </div>    
     <ul class="list-group list-group-flush">
     <li class="list-group-item">${teamlead.id}</li>
     <li class="list-group-item">${teamlead.email}</li>
     <li class="list-group-item">${teamlead.officeNumber}</li>
   </ul>
    </div>
`
}

const generateEngineer = function (engineer) {
    return `
    <div class="card" style="width: 18rem;">
     <div class="card-header">
     <h3>${engineer.name}</h3>
     <h4>${engineer.getRole()}</h4>
     </div>    
     <ul class="list-group list-group-flush">
     <li class="list-group-item">${engineer.id}</li>
     <li class="list-group-item">${engineer.email}</li>
     <li class="list-group-item"><a href="https://github.com/${engineer.github}">Github</a></li>
   </ul>
    </div>
`
}

const generateIntern = function (intern) {
    console.log(intern.name);
    return `
    <div class="card" style="width: 18rem;">
     <div class="card-header">
     <h3>${intern.name}</h3>
     <h4>${intern.getRole()}</h4>
     </div>    
     <ul class="list-group list-group-flush">
     <li class="list-group-item">${intern.id}</li>
     <li class="list-group-item">${intern.email}</li>
     <li class="list-group-item">${intern.school}</li>
   </ul>
    </div>
`
}

// module.exports = template Data => {
    

    for (let i = 0; i < data.length; i++) {
        const teamMember = data[i];
        const role = teamMember.getRole();

        if (role === 'Teamlead') {
            const teamleadCard = generateTeamlead(teamMember);

        }
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(teamMember);

        }
        if (role === 'Intern') {
            const internCard = generateIntern(teamMember);

        }

    }


    console.log(`   
    ======================
    See Console logs below
    ======================
    `
    );

    // // console log for Teamlead    
    // console.log(data[0].getRole())
    // console.log(data[0].getName())
    // console.log(data[0].getId())
    // console.log(data[0].getEmail())
    // console.log(data[0].getOfficeNumber())
    // // console log for Engineer
    // console.log(data[1].getRole())
    // console.log(data[1].getName())
    // console.log(data[1].getId())
    // console.log(data[1].getEmail())
    // console.log(data[1].getGithub())
    // // console log for Intern
    // console.log(data[2].getRole())
    // console.log(data[2].getName())
    // console.log(data[2].getId())
    // console.log(data[2].getEmail())
    // console.log(data[2].getSchool())



    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>    
    <header>
        <span>My Team</span>
    </header>
    <body>
    <!-- Team Member cards -->
    ${generateTeamlead}
    ${generateEngineer}
    ${generateIntern}
    </body>
    </html>
    `;

};

module.exports = generateMarkdown;