import React from "react";
import BoardType from "./types/board";
import { Block } from "./Block/block";
import Board from "./board/Board";
import ShapeGenerator from "./utils/shapeGenerator";
import Shape from "./shapes/shape";
import "./Tetris.css";


/**
 * Tetris is responsible for game actions and any modifications to
 * the board member will be made by calls to board instance methods
 */
class Tetris extends React.Component<any, any> {
  board: BoardType
  refreshBoard: BoardType
  currentShape: Shape | null
  currentPieceCoords: Array<number[]>
  refreshTime: number

  constructor(props: any) {
    super(props);
    this.board = new Array(40).fill(0).map(row => new Array(10).fill(0));
    this.refreshBoard = new Array(40).fill(0).map(row => new Array(10).fill(0));
    this.currentShape = null;
    this.currentPieceCoords = [];
    this.refreshTime = 1000;
  }

  generateNewPiece() {
    return ShapeGenerator();
  }

  dropNewPiece() {

  }

  detectCollision() {

  }

  calculateNextState() {

  }

  refresh() {
    // if a new piece has not been dropped then drop one
    if (this.currentShape === null) {
      this.currentShape = this.generateNewPiece();
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
    this.currentShape?.rotateLeft();
    this.refresh();
  }

  rotateRightCurrentShape() {
    this.currentShape?.rotateRight();
    this.refresh();
  }

  gameLoop() {

  }

  render() {
    return (
      <div className="tetris">
        <Board board={this.board} />
      </div>
    )
  }

}

export default Tetris;