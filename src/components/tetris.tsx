import Board from "./board/board";


/**
 * Tetris is responsible for game actions and any modifications to
 * the board member will be made by calls to board instance methods
 */
class Tetris {
  board: Board

  constructor(){
    this.board = new Board();
  }


}

export default Tetris;