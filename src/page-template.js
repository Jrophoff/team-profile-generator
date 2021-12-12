

const generateTeamlead = function (teamlead) {
    return `
    <div class="card m-4 shadow-lg" style="width: 15rem;">
      <div class="card-header bg-secondary text-light">
       <h3>${teamlead.name}</h3>
       <h4>${teamlead.getRole()}</h4>
      </div>
      <ul class="list-group list-group-flush border rounded m-3">
        <li class="list-group-item">ID: ${teamlead.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${teamlead.email}">${teamlead.email}</a></li>
        <li class="list-group-item">Office Number: ${teamlead.officeNumber}</li>
        </ul>
    </div>
`
}

const generateEngineer = function (engineer) {
    return `
    <div class="card m-4 shadow-lg" style="width: 15rem;">
      <div class="card-header bg-secondary text-light">
       <h3>${engineer.name}</h3>
       <h4>${engineer.getRole()}</h4>
      </div>
      <ul class="list-group list-group-flush border rounded m-3">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">Github</a></li>
      </ul>
    </div>
`
}

const generateIntern = function (intern) {
    return `
    <div class="card m-4 shadow-lg" style="width: 15rem;">
      <div class="card-header bg-secondary text-light">
        <h3>${intern.name}</h3>
        <h4>${intern.getRole()}</h4>
      </div>
      <ul class="list-group list-group-flush border rounded m-3">
       <li class="list-group-item">ID: ${intern.id}</li>
       <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
       <li class="list-group-item">School: <a href="https://github.com/${intern.github}">Github</a></li>
      </ul>
    </div>
`
}
generateMarkdown = (data)  => {
    teamArray = [];


    for (let i = 0; i < data.length; i++) {
        const teamMember = data[i];
        const role = teamMember.getRole();

        if (role === 'Teamlead') {
            const teamleadCard = generateTeamlead(teamMember);
            
            teamArray.push(teamleadCard);
        }
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(teamMember);

            teamArray.push(engineerCard);
        }
        if (role === 'Intern') {
            const internCard = generateIntern(teamMember);

            teamArray.push(internCard);
        }

    }

const teamMemberCards = teamArray.join('')

const generateTeam = generatePage(teamMemberCards);
return generateTeam;
};

const generatePage = function(teamMemberCards) {

    
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
    <header class="bg-secondary py-3">
       <h1 class="d-flex justify-content-center bg-secondary text-light my-10">My Team</h1>
    </header>
    <body>
     <div class="d-flex flex-wrap justify-content-center mt-5">
      ${teamMemberCards}
     </div>
    </body>
    </html>
    `;
}

module.exports = generateMarkdown;