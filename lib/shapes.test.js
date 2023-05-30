const {Circle, Triangle, Square} = require('./shapes');

describe('Circle', () => {
    it('should return a circle logo with the correct text, text color, and background color chosen by user', () => {
        var circle = new Circle({
            shapeColor: 'black',
            text: 'AAB',
            textColor: 'pink'
        });
        expect(circle.createShape()).toEqual(
            `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="115" r="80" fill="black" />
        <text x="150" y="135" font-size="70" text-anchor="middle" fill="pink">AAB</text>
    </svg>`
        );
    });
});
//^^ Tests the circle class to ensure it is returning correct info
describe('Triangle', () => {
    it('should return a triangle logo with the correct text, text color, and background color chosen by user', () => {
        var triangle = new Triangle({
            shapeColor: '#333',
            text: 'A',
            textColor: 'yellow'
        });
        expect(triangle.createShape()).toEqual(
            `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="#333" />
        <text x="150" y="135" font-size="70" text-anchor="middle" fill="yellow">A</text>
    </svg>`
        );
    });
});
//^^ Tests the triangle class to ensure it is returning correct info
describe('Square', () => {
    it('should return a square logo with the correct text, text color, and background color chosen by user', () => {
        var square = new Square({
            shapeColor: 'gray',
            text: 'AB',
            textColor: 'black'
        });
        expect(square.createShape()).toEqual(
            `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect x="73" y="40" width="160" height="160" fill="gray" />
        <text x="150" y="135" font-size="70" text-anchor="middle" fill="black">AB</text>
    </svg>`
        );
    });
});
//^^ Tests the square class to ensure it is returning correct info
