import React from "react";
import BoardType from "./types/board";
import { Block } from "./Block/block";
import BoardView from "./board/BoardView";
import ShapeGenerator from "./utils/shapeGenerator";
import Shape from "./shapes/shape";
import "./Tetris.css";
import ShapeNames from "./shapes/shapeNames";


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
      board: Array(20).fill(0).map(row => new Array(10).fill(0)),
      refreshBoard: Array(20).fill(0).map(row => new Array(10).fill(0)),
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
    console.log(newCurrentCoords);
    this.setState({
      ...this.state,
      board: swapBuffer,
      currentPieceCoords: newCurrentCoords
    })
  }

  generateNewPiece() {
    return ShapeGenerator();
  }

  dropNewPiece() {

  }

  detectCollision() {

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