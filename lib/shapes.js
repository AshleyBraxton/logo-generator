class Shape {
    constructor(answers) {
        this.color = answers.shapeColor;
        this.text = answers.text;
        this.textColor = answers.textColor;
    }
}
//^^Parent class, collects user input that is common to all shapes
class Circle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }
    createShape(){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="115" r="80" fill="${this.color}" />
        <text x="150" y="135" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`
    }
}
//^^The circle class returns the correct svg code complete with user input applied
class Triangle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }
    createShape(){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
        <text x="150" y="135" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`
    }
}
//^^The triange class returns the correct svg code complete with user input applied
class Square extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }
    createShape(){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect x="73" y="40" width="160" height="160" fill="${this.color}" />
        <text x="150" y="135" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`
    }
}
//^^The square class returns the correct svg code complete with user input applied
module.exports = {Circle, Triangle, Square};