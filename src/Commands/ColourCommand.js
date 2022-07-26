
import DrawAction from "../Actions/DrawAction.js";
import Constants from "../Enums/Constants.js";

class ColourCommand {
    constructor(input) {
        let match = input?.match(/^B (\d+?) (\d+?) ([a-zA-z])$/);
        if(match && match.length === 4){
            DrawAction.fillColour(Number(match[1]), Number(match[2]), match[3]);
            DrawAction.render();
        }else{
            throw new Error(Constants.error.invalidCommand);
        }
    }
}


const colourCommand = ColourCommand;
export default colourCommand;