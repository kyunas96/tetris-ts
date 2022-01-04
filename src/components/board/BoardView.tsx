import BoardType from '../types/board';
import BoardRow from './BoardRow';
import "./Board.css";

const BoardView = ({board} : {board: BoardType}): JSX.Element => (
  <div className='board'>
    {board.map(row => <BoardRow row={row}/>)}
  </div>
)

export default BoardView;