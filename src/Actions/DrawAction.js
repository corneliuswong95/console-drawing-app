import Constants from '../Enums/Constants.js';

class DrawAction {
    constructor() {
        this.canvas = []; //[y,x]
        this.width = 0;
        this.height = 0;
    }

    static createCanvas(x, y) {
        if(x < 1 || y < 1){
            throw new Error (Constants.error.outOfBound);
        }
        this.width = x;
        this.height = y;
        this.canvas = new Array(this.height + 2);
        for (let y = 0; y < this.canvas.length; y++) {
            //draw the x boarder line when at the top and the botton of canvas
            if (y === 0 || y === this.height + 1) {
                this.canvas[y] = new Array(this.width + 2).fill(Constants.draw.boarderX);
            } else {
                this.canvas[y] = new Array(this.width + 2).fill(Constants.draw.empty);
                this.canvas[y][this.width + 1] = Constants.draw.boarderY;
                this.canvas[y][0] = Constants.draw.boarderY;
            }
        }
    }

    static drawLine(x1, y1, x2, y2) {
        if(this.isCanvasNotCreated()){
            throw new Error (Constants.error.canvasNotCreated);
        }
        if(this.isOutOfBound(x1,y1)|| this.isOutOfBound(x2,y2)){
            throw new Error (Constants.error.outOfBound);
        }
        let isVertical = (x1 === x2);
        let isHorizontal = (y1 === y2);
        if (isVertical) {
            if (y2 < y1) {
                //swap the value if y2 < y1
                let temp = y2;
                y2 = y1;
                y1 = temp;
            } 
            for (let y = y1; y <= y2; y++) {
                this.canvas[y][x1] = Constants.draw.line;
            }
        } else if (isHorizontal) {
            if (x2 < x1) {
                //swap the value if x2 < x1
                let temp = x2;
                x2 = x1;
                x1 = temp;
            }
            for (let x = x1; x <= x2; x++) {
                this.canvas[y1][x] = Constants.draw.line;
            }
        } else {
            throw new Error(Constants.error.invalidLineParameter);
        }
    }

    static drawRectangle(x1, y1, x2, y2) {
        if(this.isCanvasNotCreated()){
            throw new Error (Constants.error.canvasNotCreated);
        }
        if(this.isOutOfBound(x1,y1)|| this.isOutOfBound(x2,y2)){
            throw new Error (Constants.error.outOfBound);
        }
        if(x1 === x2 || y1 === y2){
            throw new Error(Constants.error.invalidRectangleParameter);
        }
        this.drawLine(x1, y1, x1, y2);
        this.drawLine(x1, y1, x2, y1);
        this.drawLine(x2, y1, x2, y2);
        this.drawLine(x1, y2, x2, y2);
    }

    static fillColour(x, y, colour, isFirstLoop = true, isOnLine = false) {
        if(isFirstLoop){
            if(this.isCanvasNotCreated()){
                throw new Error (Constants.error.canvasNotCreated);
            }
            if(this.isOutOfBound(x,y)){
                throw new Error (Constants.error.outOfBound);
            }
        }
        //create a looping to fill colour until it hit a not empty space
        if(this.canvas[y][x] != Constants.draw.empty){
            //return false;
            if(isOnLine){
                this.canvas[y][x] = colour;
            }
            isOnLine = true;
        }else if (isOnLine == false){
            this.canvas[y][x] = colour;
        }
        
        let firstLoop = false;
        //left
        this.fillColour(x-1, y, colour, firstLoop, isOnLine);
        //right
        this.fillColour(x+1, y, colour, firstLoop, isOnLine);
        //up
        this.fillColour(x, y-1, colour, firstLoop, isOnLine);
        //down
        this.fillColour(x, y+1, colour, firstLoop, isOnLine);
    }

    static render() {
        for (let y = 0; y < this.canvas.length; y++) {
            console.log(this.canvas[y].join(''));
        }
    }
    
    static getCanvas() {
        return this.canvas;
    }

    static isOutOfBound (x,y) {
        return x > this.width || y > this.height || x <= 0 || y <= 0;
    }

    static isCanvasNotCreated () {
        return !this.canvas;
    }

}

const drawAction = DrawAction;
export default drawAction;