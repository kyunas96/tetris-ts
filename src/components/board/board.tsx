import React from 'react';
import BoardType from '../types/board';
import BoardRow from './BoardRow';
import "./Board.css";

const Board = ({board} : {board: BoardType}): JSX.Element => (
  <div className='board'>
    {board.map(row => <BoardRow row={row}/>)}
  </div>
)

export default Board;