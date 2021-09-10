class Board {
  board: Array<number[]>

  constructor(){
    this.board = new Array(20).fill(new Array(10).fill(0))
  }
}