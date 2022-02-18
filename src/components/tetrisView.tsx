import React from 'react';
import Board from '../types/board';

type TetrisViewProps = {
  board: Board
}

const TetrisView = (props: TetrisViewProps) => (
  <>
    <div>Tetris</div>
    {/* make subcomponents to deal with rendering of the board */}
    <div>
      
    </div>
  </>
)

export default TetrisView;