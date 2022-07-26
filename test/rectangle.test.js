import DrawAction from '../src/Actions/DrawAction.js';
import Constants from '../src/Enums/Constants.js'
import RectangleCommand from '../src/Commands/RectangleCommand.js';

test('Rectangle Command should return "Invalid Command" when no parameter is passed in', () => {
    try {
        let rectangleCommand = new RectangleCommand();
        // Fail test if above expression doesn't throw anything.
        expect(rectangleCommand).toBe(false);
    } catch (e) {
        expect(e.message).toBe(Constants.error.invalidCommand);
    }
});

test('Rectangle Command should return "Invalid Command" when wrong number of paramters is passed in', () => {
    try {
        let rectangleCommand = new RectangleCommand("R 3 4 5 4 6 78");
        // Fail test if above expression doesn't throw anything.
        expect(rectangleCommand).toBe(false);
    } catch (e) {
        expect(e.message).toBe(Constants.error.invalidCommand);
    }
});

test('Rectangle Command should return "Invalid Command" when empty string is passed in', () => {
    try {
        let rectangleCommand = new RectangleCommand(" ");
        // Fail test if above expression doesn't throw anything.
        expect(rectangleCommand).toBe(false);
    } catch (e) {
        expect(e.message).toBe(Constants.error.invalidCommand);
    }
});

test('Rectangle Command should return "Invalid Command" when invalid string is passed in', () => {
    try {
        let rectangleCommand = new RectangleCommand("asd123");
        // Fail test if above expression doesn't throw anything.
        expect(rectangleCommand).toBe(false);
    } catch (e) {
        expect(e.message).toBe(Constants.error.invalidCommand);
    }
});

test('Rectangle Command should return "Canvas not created. Please create a canvas first." when rectangle creation is triggered before canvas is created', () => {
    try {
        let rectangleCommand = new RectangleCommand("R 3 4 5 4");
        // Fail test if above expression doesn't throw anything.
        expect(rectangleCommand).toBe(false);
    } catch (e) {
        expect(e.message).toBe(Constants.error.canvasNotCreated);
    }
});

test('Draw rectangle should return correct drawing of rectangle when expected parameter for rectangle is entered', () => {
    DrawAction.createCanvas(10, 5);
    DrawAction.drawRectangle(3, 2, 5, 5);
    expect(DrawAction.getCanvas()).toEqual([
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        ['|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
        ['|', ' ', ' ', 'x', 'x', 'x', ' ', ' ', ' ', ' ', ' ', '|'],
        ['|', ' ', ' ', 'x', ' ', 'x', ' ', ' ', ' ', ' ', ' ', '|'],
        ['|', ' ', ' ', 'x', ' ', 'x', ' ', ' ', ' ', ' ', ' ', '|'],
        ['|', ' ', ' ', 'x', 'x', 'x', ' ', ' ', ' ', ' ', ' ', '|'],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ])
});

test('Draw rectangle should return return "The coordinate is out of bound" when input rectangle coordinate is outside of the canvas created', () => {
    try {
        DrawAction.createCanvas(10, 5);
        DrawAction.drawRectangle(3, 2, 5, 6);
    } catch (e) {
        expect(e.message).toBe(Constants.error.outOfBound);
    }
});

test('Draw rectangle should return return "Invalid Parameter to draw a rectangle" when input rectangle coordinate is not a rectangle or square format (eg: straight line)', () => {
    try {
        DrawAction.createCanvas(10, 5);
        DrawAction.drawLine(3, 2, 3, 5);
    } catch (e) {
        expect(e.message).toBe(Constants.error.invalidRectangleParameter);
    }
});