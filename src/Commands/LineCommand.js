
import DrawAction from "../Actions/DrawAction.js";
import Constants from "../Enums/Constants.js";

class LineCommand {
    constructor(input) {
        let match = input?.match(/^L (\d+?) (\d+?) (\d+?) (\d+?)$/);
        if(match && match.length === 5){
            DrawAction.drawLine(Number(match[1]), Number(match[2]), Number(match[3]), Number(match[4]));
            DrawAction.render();
        }else{
            throw new Error(Constants.error.invalidCommand);
        }
    }
}


const lineCommand = LineCommand;
export default lineCommand;