import DrawAction from '../src/Actions/DrawAction.js';
import Constants from '../src/Enums/Constants.js'
import ColourCommand from '../src/Commands/ColourCommand.js';

test('Colour Command should return "Invalid Command" when no parameter is passed in', () => {
    try {
        let colourCommand = new ColourCommand();
        // Fail test if above expression doesn't throw anything.
        expect(colourCommand).toBe(false);
    } catch (e) {
        expect(e.message).toBe(Constants.error.invalidCommand);
    }
});

test('Colour Command should return "Invalid Command" when wrong number of paramters is passed in', () => {
    try {
        let colourCommand = new ColourCommand("B 3 4 C C");
        // Fail test if above expression doesn't throw anything.
        expect(colourCommand).toBe(false);
    } catch (e) {
        expect(e.message).toBe(Constants.error.invalidCommand);
    }
});

test('Colour Command should return "Invalid Command" when wrong colour is entered (only one character is accepted as colour) is passed in', () => {
    try {
        let colourCommand = new ColourCommand("B 3 4 hh");
        // Fail test if above expression doesn't throw anything.
        expect(colourCommand).toBe(false);
    } catch (e) {
        expect(e.message).toBe(Constants.error.invalidCommand);
    }
});

test('Colour Command should return "Invalid Command" when empty string is passed in', () => {
    try {
        let colourCommand = new ColourCommand(" ");
        // Fail test if above expression doesn't throw anything.
        expect(colourCommand).toBe(false);
    } catch (e) {
        expect(e.message).toBe(Constants.error.invalidCommand);
    }
});

test('Colour Command should return "Invalid Command" when invalid string is passed in', () => {
    try {
        let colourCommand = new ColourCommand("asd123");
        // Fail test if above expression doesn't throw anything.
        expect(colourCommand).toBe(false);
    } catch (e) {
        expect(e.message).toBe(Constants.error.invalidCommand);
    }
});

test('Colour Command should return "Canvas not created. Please create a canvas first." when rectangle creation is triggered before canvas is created', () => {
    try {
        let colourCommand = new ColourCommand("B 3 4 b");
        // Fail test if above expression doesn't throw anything.
        expect(colourCommand).toBe(false);
    } catch (e) {
        expect(e.message).toBe(Constants.error.canvasNotCreated);
    }
});

test('Fill Colour should return correct colour filling when expected parameter for colour filling is entered', () => {
    DrawAction.createCanvas(10, 5);
    DrawAction.fillColour(3, 2, "c");
    expect(DrawAction.getCanvas()).toEqual([
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        ['|', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', '|'],
        ['|', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', '|'],
        ['|', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', '|'],
        ['|', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', '|'],
        ['|', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', '|'],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ])
});

test('Fill Colour should return correct colour filling and skip spaces where it is not empty', () => {
    DrawAction.createCanvas(10, 5);
    DrawAction.drawRectangle(3, 2, 5, 5);
    DrawAction.fillColour(2, 2, "c");
    expect(DrawAction.getCanvas()).toEqual([
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        ['|', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c', '|'],
        ['|', 'c', 'c', 'x', 'x', 'x', 'c', 'c', 'c', 'c', 'c', '|'],
        ['|', 'c', 'c', 'x', ' ', 'x', 'c', 'c', 'c', 'c', 'c', '|'],
        ['|', 'c', 'c', 'x', ' ', 'x', 'c', 'c', 'c', 'c', 'c', '|'],
        ['|', 'c', 'c', 'x', 'x', 'x', 'c', 'c', 'c', 'c', 'c', '|'],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ])
});

test('Fill Colour will not fill in colour if the coordinate input is already a line or rectangle', () => {
    DrawAction.createCanvas(10, 5);
    DrawAction.drawRectangle(3, 2, 5, 5);
    DrawAction.fillColour(3, 2, "c");
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

test('Fill Colour will return "The coordinate is out of bound" if the coordinate is outside of the canvas created', () => {
    try {
        DrawAction.createCanvas(10, 5);
        DrawAction.fillColour(3, 6, "c");
    } catch (e) {
        expect(e.message).toBe(Constants.error.outOfBound);
    }
});