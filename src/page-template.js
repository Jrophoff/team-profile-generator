module.exports = templateData => {
    console.log(templateData);

    //
console.log(templateData[0].getRole())



return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Team Profile</title>
    </head>    
    <header>
        <span>My Team</span>
    </header>
    <body>
    <!-- Team Member cards -->
    </body>
    </html>
    `;

};

// module.exports = generateMarkdown;