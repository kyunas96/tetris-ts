import React from "react";
import BoardType from "./types/board";
import { Block } from "./Block/block";
import BoardView from "./board/BoardView";
import ShapeGenerator from "./utils/shapeGenerator";
import Shape from "./shapes/shape";
import "./Tetris.css";
import ShapeNames from "./shapes/shapeNames";

const BOARD_HEIGHT = 20;
const BOARD_WIDTH = 10;

/**
 * Tetris is responsible for game actions and any modifications to
 * the board member will be made by calls to board instance methods
 */
class Tetris extends React.Component<any, any> {
  // board: BoardType
  // refreshBoard: BoardType
  // currentShape: Shape | null
  // currentPieceCoords: Array<number[]>
  // refreshTime: number

  constructor(props: any) {
    super(props);
    this.state = {
      board: Array(BOARD_WIDTH).fill(0).map(row => new Array(BOARD_WIDTH).fill(0)),
      refreshBoard: Array(BOARD_HEIGHT).fill(0).map(row => new Array(BOARD_WIDTH).fill(0)),
      currentPiece: null,
      currentPieceCoords: [
        [0, 3],
        [0, 4],
        [0, 5]
      ],
      refreshTime: 1000,
      paused: false
    }
    this.state.board[0][3] = 
    this.state.board[0][4] = 
    this.state.board[0][5] = ShapeNames.T;
  }

  componentDidMount(){
    this.start();
  }

  start(){
    setTimeout(() => {
      this.tick();
    }, 500)
  }

  tick(){
    setTimeout(() => {
      this.setNextState();
      this.tick();
    }, 500)
  }

  

  setNextState() {
    // function responsibilities
    // Check for collisions
    // Check to see if at the bottom of the grid
    const swapBuffer: number[][] = this.state.board.map(
      (inner: number[]) => inner.slice());
    console.log("swapBuffer: " + swapBuffer);
    const newCurrentCoords = [];
    for(const currentCoord of this.state.currentPieceCoords){
      const [x, y] = currentCoord;
      const currentColor = swapBuffer[x][y];
      swapBuffer[x][y] = 0;
      const newX = x + 1;
      const newY = y ;
      swapBuffer[newX][newY] = currentColor;
      newCurrentCoords.push([newX, newY]);
    }
    this.setState({
      ...this.state,
      board: swapBuffer,
      currentPieceCoords: newCurrentCoords
    })
  }

  
  // if a collision has been detected:
  // 1. leave the board as is
  // 2. check to see if the game has been lost
  // 3. if game is not over, drop the next piece
  detectCollision(currentPieceCoords: number[][]): Boolean {
    // cycle through the coordinates of the current piece
    for (const curCoord of this.state.currentPieceCoords){
      // deconstruct x and y values from the current coord
      const [curX, curY] = curCoord;
      // increment the current y position by 1 to represent going down
      // a row
      const newY = curY + 1;
      // get the entry for the next cell in the board
      const nextCellDown = this.state.board[curX][newY];
      // check to see if there's a block in the next cell 
      if(nextCellDown !== 0) return true;
    }
    return false;
  }

  currentPieceHasHitBottom(currentPieceCoords: number[][]): Boolean{
    // given an array containing the indices of the current piece
    // check to see if the coordinates have hit the bottom
    for(const curCoord of this.state.currentPieceCoords){
      const [curX, curY] = curCoord;
      if(curY === BOARD_HEIGHT - 1) return true;
    }
    return false;
  }

  dropPieceOneRow(currentPieceCoords: number[][]){
    const newCoords: number[][] = [];
    
  }

  generateNewPiece() {
    return ShapeGenerator();
  }

  dropNewPiece() {

  }

  refresh() {
    // if a new piece has not been dropped then drop one
    if (this.state.currentShape === null) {
      this.setState({
        ...this.state,
        currentShape: this.generateNewPiece()
      })
    } else {
      /*
        1. move the piece down one square
        2. Check for a collision
        3. if there's a collision start a countdown timer till the board
           is finalized
       */
    }
  }

  rotateLeftCurrentShape() {
    this.state.currentShape?.rotateLeft();
    this.refresh();
  }

  rotateRightCurrentShape() {
    this.state.currentShape?.rotateRight();
    this.refresh();
  }

  gameLoop() {

  }

  render() {
    return (
      <div className="tetris">
        <BoardView board={this.state.board} />
      </div>
    )
  }

}

export default Tetris;