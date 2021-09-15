import Board from "./board/board";
import ShapeGenerator from "./utils/shapeGenerator";
import Shape from "./shapes/shape";
import TetrisView from "./tetrisView";
import React from "react";


/**
 * Tetris is responsible for game actions and any modifications to
 * the board member will be made by calls to board instance methods
 */
class Tetris extends React.Component<any, any> {
  board: Board
  refreshBoard: Board
  currentShape: Shape | null
  currentPieceCoords: Array<number[]>
  refreshTime: number

  constructor(props: any) {
    super(props);
    this.board = new Board();
    this.refreshBoard = new Board();
    this.currentShape = null;
    this.currentPieceCoords = [];
    this.refreshTime = 1000;
  }

  generateNewPiece() {
    return ShapeGenerator();
  }

  dropNewPiece() {

  }

  detectCollision(){

  }

  calculateNextState(){

  }

  refresh() {
    // if a new piece has not been dropped then drop one
    if(this.currentShape === null){
      this.currentShape = this.generateNewPiece();
    }else{
      /*
        1. move the piece down one square
        2. Check for a collision
        3. if there's a collision start a countdown timer till the board
           is finalized
       */
    }
  }

  rotateLeftCurrentShape(){
    this.currentShape?.rotateLeft();
    this.refresh();
  }

  rotateRightCurrentShape(){
    this.currentShape?.rotateRight();
    this.refresh();
  }

  gameLoop() {

  }

  render(){
    return (
      <TetrisView board={this.refreshBoard}/>
    )
  }

}

export default Tetris;