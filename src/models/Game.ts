import Board from "./Board";
import KeyBindings from '../types/keyBindings';

type Game = {
  board: Board,
  keyBindings: KeyBindings,
  state: 'PLAYING' | 'PAUSED',
  pieceQueue: 

}

export default Game;