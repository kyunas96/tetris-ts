import Board from "./board/board";
import ShapeGenerator from "./utils/shapeGenerator";
import Shape from "./shapes/shape";


/**
 * Tetris is responsible for game actions and any modifications to
 * the board member will be made by calls to board instance methods
 */
class Tetris {
  board: Board
  refreshBoard: Board
  newPieceDropped: boolean
  currentShape: Shape | null

  constructor() {
    this.board = new Board();
    this.refreshBoard = new Board();
    this.newPieceDropped = false;
    this.currentShape = null;
  }

  generateNewPiece() {
    return ShapeGenerator();
  }

  dropNewPiece() {

  }

  refresh() {
    // if a new piece has not been dropped then drop one
    if(!this.newPieceDropped){
      
      this.newPieceDropped = true;
    }else{

    }
  }

  gameLoop() {

  }

}

export default Tetris;