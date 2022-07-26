# Console Drawing Program

## Description 

A console program that able to create canvas, draw line, draw rectangle, fill in colour and quit.


Command 		Description
C w h           Should create a new canvas of width w and height h.
L x1 y1 x2 y2   Should create a new line from (x1,y1) to (x2,y2). Currently only
                horizontal or vertical lines are supported. Horizontal and vertical lines
                will be drawn using the 'x' character.
R x1 y1 x2 y2   Should create a new rectangle, whose upper left corner is (x1,y1) and
                lower right corner is (x2,y2). Horizontal and vertical lines will be drawn
                using the 'x' character.
B x y c         Should fill the entire area connected to (x,y) with "colour" c. The
                behavior of this is the same as that of the "bucket fill" tool in paint
                programs.
Q               Should quit the program.

## Installation
- check if node is installed in your pc, as it is require as an enviroment to run javascript
 1)launch 'Command Prompt'
 2)type in 'node -v'
 3)expect to see 'v1x.xx.x'. if nothing is shown, please install node from https://nodejs.org/en/download/
 4)CD to the root folder of the project
 5)type in 'npm install'

## How to run
1)launch 'Command Prompt'
2)CD to the root folder of the project

To run the project 
-type in 'npm start'

To test the project
-type in 'npm test'

## Assumptions
- Only capital letter and integer are accepted for command
- Color cannot be filled in if the coordinate (x,y) entered is already a line or rectangle
- 'Colour' can only be a single character

## Library used
- JEST- it is used to create the test suite, run the test and perform test driven development
- Babel-JEST - it is used to transform javascript code to babel-jest module so to run the JEST testing

## Project Structure
- May refer to the UML class diagram under 'diagram/UML class.png'.
- All command passed in will be send to 'Command Interface' and it distributes to their Command Classes respectively. Command Class will then perform command validation and trigger the needed action from Draw Action to fulfill the command request. It is to achieve low coupling and high cohension principle so to increase maintainability and extensibility of the program in the future.