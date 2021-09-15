import { Block } from "./block";

class Board {
  board: Array<number[]>

  constructor(){
    this.board = new Array(20).fill(new Array(10).fill(0))
  }

  generateRow(row: Array<number>){
    return row.map(ID => <Block ID={ID} />);
  }

  generateBoard(){
    let blocks: Array<JSX.Element> = [];
    for(let i = 0; i < this.board.length; i++){
      blocks.concat(this.generateRow(this.board[i]));
    }
    return blocks;
  }

  render(){
    {this.generateBoard()}
  }

}

export default Board;