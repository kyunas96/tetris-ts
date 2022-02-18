import Piece from '../types/Piece';

class Board {
  public matrix: number[][];
  public currentPiece: Piece | null;

  static constructBoard(width: number, height: number): number[][] {
    const ret: number[][] = new Array(height);
    for (let i = 0; i < width; i++) {
      ret[i] = new Array<number>(width).fill(0);
    }

    return ret;
  }

  constructor() {
    this.matrix = Board.constructBoard(10, 20);
    this.currentPiece = null;
  }


}



export default Board;