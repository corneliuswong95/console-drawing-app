
import DrawAction from "../Actions/DrawAction.js";
import Constants from "../Enums/Constants.js";

class RectangleCommand {
    constructor(input) {
        let match = input?.match(/^R (\d+?) (\d+?) (\d+?) (\d+?)$/);
        if(match && match.length === 5){
            DrawAction.drawRectangle(Number(match[1]), Number(match[2]), Number(match[3]), Number(match[4]));
            DrawAction.render();
        }else{
            throw new Error(Constants.error.invalidCommand);
        }
    }
}


const rectangleCommand = RectangleCommand;
export default rectangleCommand;