const inquirer = require('inquirer');
var {Circle, Triangle, Square} = require('./lib/shapes');
var fs = require('fs');
//^^Sets up the initial requirements
var logoPrompts = [
    {
        type: 'input',
        name: 'text',
        message: 'What is the text for your logo? (must be 3 characters or less)'
    },{
        type: 'input',
        name: 'textColor',
        message: 'What color would you like the text to be?'
    },{
        type: 'list',
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        choices: ['Circle', 'Square', 'Triangle']
    },{
        type: 'input',
        name: 'shapeColor',
        message: 'What would you like the shape background color to be?'
    }
]
//^^Creates the questions that the user will answer

function setShape(answers) {

    if (answers.shape === 'Circle') {
        let logoShape = new Circle (answers)
        return logoShape.createShape()
    }

    if (answers.shape === 'Square') {
        let logoShape = new Square (answers)
        return logoShape.createShape()
    }

    if (answers.shape === 'Triangle') {
        let logoShape = new Triangle (answers)
        return logoShape.createShape()
    }
};
//^^generates the correct svg code based on user chosen shape and other info
async function createLogo() {
    await inquirer
    .prompt(logoPrompts)
    .then((answers) => {
     
      if (answers.text.length > 3) {
        console.log('Logo text must be no more than 3 characters!');
        createLogo();
      } else {
        var svgCode = setShape(answers)
        fs.writeFile('./examples/logo.svg', svgCode, (err) => 
        err ? console.error(err) : console.log('Generated logo.svg'))
      }
    })
    
}
//^^Function to run the program, also includes err that catches if user text is over 3 characters and restarts the program
createLogo();