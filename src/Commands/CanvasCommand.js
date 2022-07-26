
import DrawAction from "../Actions/DrawAction.js";
import Constants from "../Enums/Constants.js";

class CanvasCommand {
    constructor(input) {
        let match = input?.match(/^C (\d+?) (\d+?)$/);
        if(match && match.length === 3){
            DrawAction.createCanvas(Number(match[1]), Number(match[2]));
            DrawAction.render();
        }else{
            throw new Error(Constants.error.invalidCommand);
        }
    }
}


const convasCommand = CanvasCommand;
export default convasCommand;