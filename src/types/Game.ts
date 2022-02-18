import Board from "../models/Board";
import KeyBindings from './keyBindings';
import PieceQueue from './PieceQueue';

type Game = {
  board: Board,
  keyBindings: KeyBindings,
  state: 'PLAYING' | 'PAUSED',
  pieceQueue: PieceQueue

}

export default Game;