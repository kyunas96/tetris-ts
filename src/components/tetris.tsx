import React from "react";
import BoardType from "../types/board";
import { Block } from "./Block/block";
import BoardView from "./board/BoardView";
import ShapeGenerator from "../utils/shapeGenerator";
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
      board: Array(BOARD_HEIGHT).fill(0).map(row => new Array(BOARD_WIDTH).fill(0)),
      currentPiece: null,
      currentPieceCoords: [
        [0, 3],
        [0, 4],
        [0, 5]
      ],
      refreshTime: 1000,
      paused: false,
      currentTick: null,
      currentPieceColor: ShapeNames.T
    }
    this.state.board[0][3] =
      this.state.board[0][4] =
      this.state.board[0][5] = ShapeNames.T;
  }

  mapKeyBindings() {
    const callback = this.generateHandler();
    document.addEventListener<'keydown'>('keydown', callback);
  }
  
  generateHandler() {
    const tetrisGame = this;
    return function (this: Document, ev: globalThis.KeyboardEvent) {
      const keyName = ev.key;
      console.log("keypress: " + keyName);
      if (keyName === 'ArrowLeft') tetrisGame.movePieceToLeft();
      if (keyName === 'ArrowRight') tetrisGame.movePieceToRight();
    }
  }

  componentDidMount() {
    this.mapKeyBindings();
    this.start();
  }

  start() {
    setTimeout(() => {
      this.tick();
    }, 500)
  }

  tick() {
    // setTimout returns a reference to the function on the callback
    // stack, allows for interruptions of the current tick
    if (this.currentPieceHasHitBottom()) {
      console.log("Hit bottom");
    } else {
      const currentTick = setTimeout(() => {
        this.setNextState();
        this.tick();
      }, 500)
      // save the reference to the current setTimout function
      this.setState({
        ...this.state,
        currentTick
      })
    }

  }

  // migrate function body to tick
  setNextState() {
    // function responsibilities
    // Check for collisions
    // Check to see if at the bottom of the grid
    // clear the previous coordinates with 0's
    // calculate the next position for the current piece
    // calculate the next board given the new piece coords

    const swapBuffer = this.state.board.map((row: number[]) => row.slice());
    // console.log("swapBuffer: " + swapBuffer);
    for (const curCoord of this.state.currentPieceCoords) {
      const [curRow, curCol] = curCoord;
      swapBuffer[curRow][curCol] = 0;
    }

    const newPieceCoords = this.state.currentPieceCoords.map((curCoord: number[]) => {
      const [curRow, curCol] = curCoord;
      return [curRow + 1, curCol];
    })

    for (const curNewCoord of newPieceCoords) {
      const [newRow, newCol] = curNewCoord;
      console.log("curNewCoord: " + JSON.stringify(curNewCoord));
      swapBuffer[newRow][newCol] = this.state.currentPieceColor;
    }

    console.log("newBoard: " + JSON.stringify(swapBuffer));

    this.setState({
      ...this.state,
      board: swapBuffer,
      currentPieceCoords: newPieceCoords
    })

  }

  // function will take the current piece coords and shift them a column
  // right
  movePieceToRight() {
    const curCoords = this.state.currentPieceCoords;
    const currentPieceNewCoords: number[][] = [];
    for (let i = 0; i < curCoords.length; i++) {
      const [row, col] = curCoords[i];
      const newCol = col + 1;
      // short cicruit and don't set state if the piece will be pushed
      // off the board
      if (newCol > BOARD_WIDTH - 1) return;
      currentPieceNewCoords.push([row, newCol]);
    }
    this.setState({
      ...this.state,
      currentPieceCoords: currentPieceNewCoords
    }, () => {
      console.log("pushed piece to the right: " +
        JSON.stringify(this.state.currentPieceCoords))
    })
  }

  // function will take the current piece coords and shift the a column
  // to the left
  movePieceToLeft() {
    const curCoords = this.state.currentPieceCoords;
    const currentPieceNewCoords: number[][] = [];
    for (let i = 0; i < curCoords.length; i++) {
      const [row, col] = curCoords[i];
      const newCol = col - 1;
      // short cicruit and don't set state if the piece will be pushed
      // off the board
      if (newCol < 0) return;
      currentPieceNewCoords.push([row, newCol]);
    }
    this.setState({
      ...this.state,
      currentPieceCoords: currentPieceNewCoords
    }, () => {
      console.log("pushed piece to the left: " +
        JSON.stringify(this.state.currentPieceCoords))
    })
  }


  // if a collision has been detected:
  // 1. leave the board as is
  // 2. check to see if the game has been lost
  // 3. if game is not over, drop the next piece
  detectCollision(): Boolean {
    // cycle through the coordinates of the current piece
    for (const curCoord of this.state.currentPieceCoords) {
      // deconstruct x and y values from the current coord
      const [curX, curY] = curCoord;
      // increment the current y position by 1 to represent going down
      // a row
      const newY = curY + 1;
      // get the entry for the next cell in the board
      const nextCellDown = this.state.board[curX][newY];
      // check to see if there's a block in the next cell 
      if (nextCellDown !== 0) return true;
    }
    return false;
  }

  currentPieceHasHitBottom(): Boolean {
    // given an array containing the indices of the current piece
    // check to see if the coordinates have hit the bottom
    for (const curCoord of this.state.currentPieceCoords) {
      const [curRow, curCol] = curCoord;
      if (curRow === BOARD_HEIGHT - 1) return true;
    }
    return false;
  }

  dropPieceOneRow(currentPieceCoords: number[][]) {
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