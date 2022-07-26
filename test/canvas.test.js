// //import DrawAction from "../src/DrawAction.js";
// const DrawAction = require("../src/DrawAction.js");
import DrawAction from '../src/Actions/DrawAction.js';
import Constants from '../src/Enums/Constants.js'
import CanvasCommand from '../src/Commands/CanvasCommand.js';

test('Canvas Command should return "Invalid Command" when no parameter is pass in', () => {
    try {
        let canvasCommand = new CanvasCommand();
        // Fail test if above expression doesn't throw anything.
        expect(canvasCommand).toBe(false);
    } catch (e) {
        expect(e.message).toBe(Constants.error.invalidCommand);
    }
});

test('Canvas Command should return "Invalid Command" when empty string is pass in', () => {
    try {
        let canvasCommand = new CanvasCommand(" ");
        // Fail test if above expression doesn't throw anything.
        expect(canvasCommand).toBe(false);
    } catch (e) {
        expect(e.message).toBe(Constants.error.invalidCommand);
    }
});

test('Canvas Command should return "Invalid Command" when unexpect string is pass in', () => {
    try {
        let canvasCommand = new CanvasCommand("234dasg");
        // Fail test if above expression doesn't throw anything.
        expect(canvasCommand).toBe(false);
    } catch (e) {
        expect(e.message).toBe(Constants.error.invalidCommand);
    }
});


test('Create Canvas should return "The coordinate is out of bound" if x < 0', () => {
    try {
        DrawAction.createCanvas(-1, 3);
        // Fail test if above expression doesn't throw anything.
        expect(true).toBe(false);
    } catch (e) {
        expect(e.message).toBe(Constants.error.outOfBound);
    }
});

test('Create Canvas should return "The coordinate is out of bound" if y < 0', () => {
    try {
        DrawAction.createCanvas(1, -3);
        // Fail test if above expression doesn't throw anything.
        expect(true).toBe(false);
    } catch (e) {
        expect(e.message).toBe(Constants.error.outOfBound);
    }
});

test('Create Canvas should return correct dimension of canvas when expected parameter is entered', () => {
        DrawAction.createCanvas(8,5);
        expect(DrawAction.getCanvas()).toEqual([
            ['-','-','-','-','-','-','-','-','-','-'],
            ['|',' ',' ',' ',' ',' ',' ',' ',' ','|'],
            ['|',' ',' ',' ',' ',' ',' ',' ',' ','|'],
            ['|',' ',' ',' ',' ',' ',' ',' ',' ','|'],
            ['|',' ',' ',' ',' ',' ',' ',' ',' ','|'],
            ['|',' ',' ',' ',' ',' ',' ',' ',' ','|'],
            ['-','-','-','-','-','-','-','-','-','-'],
        ])
});

test('Create Canvas should return correct dimension of canvas when expected parameter is entered', () => {
    DrawAction.createCanvas(10,5);
    expect(DrawAction.getCanvas()).toEqual([
        ['-','-','-','-','-','-','-','-','-','-','-','-'],
        ['|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'],
        ['|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'],
        ['|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'],
        ['|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'],
        ['|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'],
        ['-','-','-','-','-','-','-','-','-','-','-','-'],
    ])
});