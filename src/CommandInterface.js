import CanvasCommand from './Commands/CanvasCommand.js';
import LineCommand from './Commands/LineCommand.js';
import RectangleCommand from './Commands/RectangleCommand.js';
import ColourCommand from './Commands/ColourCommand.js';
import Constants from './Enums/Constants.js';

class CommandInterface {
    static execute(input) {
        if (!input || input.length < 1) {
            throw new Error(Constants.error.invalidCommand);
        }
        const action = input[0].toUpperCase();
        switch (action) {
            case 'C':
                return new CanvasCommand(input);
            case 'L':
                return new LineCommand(input);
            case 'R':
                return new RectangleCommand(input);
            case 'B':
                return new ColourCommand(input);
            case 'Q':
                process.exit();
            default:
                throw new Error(Constants.error.invalidCommand);
        }
    }
}

const commandInterface = CommandInterface;
export default commandInterface;