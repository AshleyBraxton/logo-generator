var inquirer = require('inquirer');
var shapes = require('./lib/shapes');
var fs = require('fs');

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

function writeToFile(data) {
    fs.writeFile('./examples/logo.svg', data, (err) => 
    err ? console.error(err) : console.log('Generated logo.svg'))
}

async function createLogo() {
let data = await inquirer.prompt(logoPrompts);
writeToFile(data);

}

createLogo();