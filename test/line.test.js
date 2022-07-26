import DrawAction from '../src/Actions/DrawAction.js';
import Constants from '../src/Enums/Constants.js'
import LineCommand from '../src/Commands/LineCommand.js';

test('Line Command should return "Invalid Command" when no parameter is passed in', () => {
    try {
        let lineCommand = new LineCommand();
        // Fail test if above expression doesn't throw anything.
        expect(lineCommand).toBe(false);
    } catch (e) {
        expect(e.message).toBe(Constants.error.invalidCommand);
    }
});

test('Line Command should return "Invalid Command" when wrong number of paramters is passed in', () => {
    try {
        let lineCommand = new LineCommand("L 3 4 5 4 6");
        // Fail test if above expression doesn't throw anything.
        expect(lineCommand).toBe(false);
    } catch (e) {
        expect(e.message).toBe(Constants.error.invalidCommand);
    }
});

test('Line Command should return "Invalid Command" when empty string is passed in', () => {
    try {
        let lineCommand = new LineCommand(" ");
        // Fail test if above expression doesn't throw anything.
        expect(lineCommand).toBe(false);
    } catch (e) {
        expect(e.message).toBe(Constants.error.invalidCommand);
    }
});

test('Line Command should return "Invalid Command" when invalid string is passed in', () => {
    try {
        let lineCommand = new LineCommand("asd123");
        // Fail test if above expression doesn't throw anything.
        expect(lineCommand).toBe(false);
    } catch (e) {
        expect(e.message).toBe(Constants.error.invalidCommand);
    }
});

test('Line Command should return "Canvas not created. Please create a canvas first." when line creation is triggered before canvas is created', () => {
    try {
        let lineCommand = new LineCommand("L 3 4 5 4");
        // Fail test if above expression doesn't throw anything.
        expect(lineCommand).toBe(false);
    } catch (e) {
        expect(e.message).toBe(Constants.error.canvasNotCreated);
    }
});


test('Draw line should return correct drawing of line when expected parameter for vertial line is entered', () => {
    DrawAction.createCanvas(10, 5);
    DrawAction.drawLine(3, 2, 3, 5);
    expect(DrawAction.getCanvas()).toEqual([
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        ['|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
        ['|', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
        ['|', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
        ['|', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
        ['|', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ])
});

test('Draw line should return correct drawing of line when expected parameter for horizontal line is entered', () => {
    DrawAction.createCanvas(10, 5);
    DrawAction.drawLine(3, 2, 7, 2);
    expect(DrawAction.getCanvas()).toEqual([
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        ['|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
        ['|', ' ', ' ', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', '|'],
        ['|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
        ['|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
        ['|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ])
});

test('Draw line should return correct drawing of line when expected parameter for horizontal and vertical line is entered', () => {
    DrawAction.createCanvas(10, 5);
    DrawAction.drawLine(3, 2, 7, 2);
    DrawAction.drawLine(3, 2, 3, 5);
    expect(DrawAction.getCanvas()).toEqual([
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        ['|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
        ['|', ' ', ' ', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', '|'],
        ['|', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
        ['|', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
        ['|', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ])
});

test('Draw line should return correct drawing of line when expected parameter for vertial and horizontal line (even if it is draw from the bottom to the top or right to left) is entered', () => {
    DrawAction.createCanvas(10, 5);
    DrawAction.drawLine(3, 5, 3, 2);
    DrawAction.drawLine(7, 2, 3, 2);
    expect(DrawAction.getCanvas()).toEqual([
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        ['|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
        ['|', ' ', ' ', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', '|'],
        ['|', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
        ['|', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
        ['|', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ])
});

test('Draw line should return return "The coordinate is out of bound" when input line coordinate is outside of the canvas created', () => {
    try {
        DrawAction.createCanvas(10, 5);
        DrawAction.drawLine(3, 2, 3, 6);
    } catch (e) {
        expect(e.message).toBe(Constants.error.outOfBound);
    }
});

test('Draw line should return return "Invalid Parameter to draw a line" when input line coordinate is not a straight line', () => {
    try {
        DrawAction.createCanvas(10, 5);
        DrawAction.drawLine(3, 2, 4, 5);
    } catch (e) {
        expect(e.message).toBe(Constants.error.invalidLineParameter);
    }
});